import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import PizzaSpecial from '../../models/pizza.special';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private dbPath = '/pizza-specials';

  pizzaSpecialsRef: AngularFireList<PizzaSpecial> = null;

  constructor(private db: AngularFireDatabase) {
    this.pizzaSpecialsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<PizzaSpecial> {
    return this.pizzaSpecialsRef;
  }

  create(pizzaspecial: PizzaSpecial): any {
    return this.pizzaSpecialsRef.push(pizzaspecial);
  }

  update(key: string, value: any): Promise<void> {
    return this.pizzaSpecialsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.pizzaSpecialsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.pizzaSpecialsRef.remove();
  }
}
