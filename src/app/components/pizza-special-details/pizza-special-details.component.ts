import { Component, EventEmitter, OnInit, Output, Input, OnChanges, TrackByFunction } from '@angular/core';
import PizzaSpecial from '../../models/pizza.special';
import { PizzaService } from '../pizza-specials/pizza.service';

@Component({
  selector: 'app-pizza-special-details',
  templateUrl: './pizza-special-details.component.html',
  styleUrls: ['./pizza-special-details.component.css']
})
export class PizzaSpecialDetailsComponent implements OnInit, OnChanges {

  @Input() pizzaSpecial: PizzaSpecial;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentpizzaSpecial: PizzaSpecial = null;


  placements = ['top', 'left', 'right', 'bottom'];
  placement = 'top';
  popoverTitle = 'Are you sure?';
  popoverMessage = 'Are you really <b>sure</b> you want to do this?';
  confirmText = 'Yes <i class="fas fa-check"></i>';
  cancelText = 'No <i class="fas fa-times"></i>';
  confirmClicked = false;
  cancelClicked = false;

  message = '';

  constructor(private pizzaService: PizzaService) {

  }
  ngOnChanges(): void {
    this.message = '';
    this.currentpizzaSpecial = { ...this.pizzaSpecial };
  }

  ngOnInit(): void {
  }
  updatePizzaSpecial(): void {
    this.pizzaService.update(this.currentpizzaSpecial.key, this.currentpizzaSpecial)
      .then(() => this.message = 'The Pizza Special was updated successfully!')
      .catch(err => console.log(err));
  }

  deletePizzaSpecial(): void {
    this.pizzaService.delete(this.currentpizzaSpecial.key)
      .then(() => {
        this.refreshList.emit();
        this.message = 'The special was updated successfully!';
      })
      .catch(err => console.log(err));
  }

  confirmedDelete(): void{
    this.deletePizzaSpecial();
  }


}


