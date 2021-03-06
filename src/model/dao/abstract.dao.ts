export default abstract class DAO<T> {
  
  protected _db: FirebaseFirestore.Firestore

  constructor(db: FirebaseFirestore.Firestore) {
    this._db = db
  }
  
  abstract async fetchSingle(id: string | number): Promise<T>;
  abstract async fetchAll(...conditions: {
    field: string, 
    op: string, 
    value: string | number | boolean
}[]): Promise<T[]>;
  abstract async insert(document: T, id: number | string): Promise<T>;
  abstract async update(document: T, id: number | string): Promise<T>;
  abstract async delete(id: string | number): Promise<T>;
}