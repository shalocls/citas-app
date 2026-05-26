import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class SqliteService {

  private sqlite: SQLiteConnection;
  private db!: SQLiteDBConnection;

  constructor() {
    this.sqlite = new SQLiteConnection(CapacitorSQLite);
  }

  async init() {
    this.db = await this.sqlite.createConnection(
      'citasDB',
      false,
      'no-encryption',
      1,
      false
    );

    await this.db.open();

    await this.db.execute(`
      CREATE TABLE IF NOT EXISTS citas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        frase TEXT NOT NULL,
        autor TEXT NOT NULL
      );
    `);
  }

  async obtenerCitas() {
    const res = await this.db.query('SELECT * FROM citas');
    return res.values || [];
  }

  async agregarCita(frase: string, autor: string) {
    await this.db.run(
      'INSERT INTO citas (frase, autor) VALUES (?, ?)',
      [frase, autor]
    );
  }

  async eliminarCita(id: number) {
    await this.db.run(
      'DELETE FROM citas WHERE id = ?',
      [id]
    );
  }
}