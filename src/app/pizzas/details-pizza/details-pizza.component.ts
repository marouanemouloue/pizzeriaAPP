import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Pizza } from 'src/app/Pizza';
import { LIST_PIZZAS } from 'src/app/Shared/list.pizza';
import { PizzasService } from 'src/app/pizzas.service';

@Component({
  selector: 'app-details-pizza',
  templateUrl: './details-pizza.component.html',
  styleUrls: ['./details-pizza.component.scss']
})
export class DetailsPizzaComponent {

  id: number | null;
  pizzaToDisplay: Pizza | undefined;
  listPizzas: Pizza[] | [];

  constructor(private activatedRoute: ActivatedRoute, private route: Router, private service: PizzasService) {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '0');
    this.listPizzas = this.service.getListPizzas()
    this.pizzaToDisplay = service.getSinglePizza(this.id)

  }
  backHome() {
    this.route.navigate(['/pizzas']);
  }
  editPizza(pizzaToEdit: Pizza) {
    console.log(pizzaToEdit)
    const link = ['pizzas/edit', pizzaToEdit.id];
    this.route.navigate(link)
  }
  deletePizza(pizza: Pizza) {
    this.service.deletePizza(pizza)
    this.route.navigate(['/pizzas'])
  }
}
