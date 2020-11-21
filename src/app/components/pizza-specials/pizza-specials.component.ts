import { PizzaService } from './pizza.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import PizzaSpecial from '../../models/pizza.special';


@Component({
  selector: 'app-pizza-specials',
  templateUrl: './pizza-specials.component.html',
  styleUrls: ['./pizza-specials.component.css']
})
export class PizzaSpecialsComponent implements OnInit {


  pizzaSpecials: any;
  currentSpecial = null;
  currentIndex = -1;
  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.retrieveSpecials();
  }
  refreshList(): void {
    this.currentSpecial = null;
    this.currentIndex = -1;
    this.retrieveSpecials();
  }
  retrieveSpecials(): void {
    this.pizzaService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.pizzaSpecials = data;
    });
  }


  setActiveSpecial(pizzaSpecial, index): void {
    this.currentSpecial = pizzaSpecial;
    this.currentIndex = index;
  }

  removeAllSpecials(): void {
    this.pizzaService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
    }

}
