import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from 'src/app/Pizza';
import { PizzasService } from 'src/app/pizzas.service';

@Component({
  selector: 'app-pizza-edit',
  templateUrl: './pizza-edit.component.html',
  styleUrls: ['./pizza-edit.component.scss']
})
export class PizzaEditComponent {
  singlePizza: Pizza | undefined;
  id :number ;

  constructor(private activatedRoute: ActivatedRoute, private service: PizzasService) {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')|| '0');

  }
  ngOnInit(): void {
    this.singlePizza = this.service.getSinglePizza(this.id)
  }

}
