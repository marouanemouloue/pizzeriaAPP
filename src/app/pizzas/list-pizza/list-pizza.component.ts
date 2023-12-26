import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../Pizza';
import { LIST_PIZZAS } from '../../Shared/list.pizza';
import { Router } from '@angular/router';
import { PizzasService } from 'src/app/pizzas.service';
@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.scss']
})
export class ListPizzaComponent implements OnInit {
  PIZZAS: Pizza[] = [];

  constructor(private route: Router, private service: PizzasService) {

  }

  ngOnInit(): void {
    this.PIZZAS = this.service.getListPizzas()

  }
  selectPizza(pizza: Pizza) {
    const link: any = ['pizzas', pizza.id];
    this.route.navigate(link);
  }


}
