
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dbPath = '/users';

  dbRef: AngularFireList<User> = null;

  constructor(private db: AngularFireDatabase) {
    this.dbRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<User> {
    return this.dbRef;
  }


  create(user: User): any {
    return this.dbRef.push(user);
  }

  update(key: string, value: any): Promise<void> {
    return this.dbRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.dbRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.dbRef.remove();
  }
}
