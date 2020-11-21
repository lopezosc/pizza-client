import { Component, OnInit } from '@angular/core';
import PizzaSpecial from 'src/app/models/pizza.special';
import { PizzaService } from '../pizza-specials/pizza.service';

@Component({
  selector: 'app-add-pizza-special',
  templateUrl: './add-pizza-special.component.html',
  styleUrls: ['./add-pizza-special.component.css']
})
export class AddPizzaSpecialComponent implements OnInit {
  pizzaSpecial: PizzaSpecial = new PizzaSpecial();
  submitted = false;

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
  }

  savePizzaSpecial(): void {
    this.pizzaService.create(this.pizzaSpecial).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }
  newPizzaSpecial(): void {
    this.submitted = false;
    this.pizzaSpecial = new PizzaSpecial();
  }

}
