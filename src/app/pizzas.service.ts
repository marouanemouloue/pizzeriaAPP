import { Injectable } from '@angular/core';
import { LIST_PIZZAS } from './Shared/list.pizza';
import { Pizza } from './Pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {
  PIZZAS:Pizza[] = [];

  constructor() { 
    console.log(this.PIZZAS)
    this.PIZZAS = LIST_PIZZAS

  }
  getListPizzas(): Pizza[]{
    return this.PIZZAS
  }
  getSinglePizza(id: number) : Pizza | undefined {
    const listOfPizzas= this.getListPizzas();
    return listOfPizzas.find(pizza => pizza.id === id)
  }
  getPizzaIngredients():string[] {
    return ['S. tomate','v. kebab','roquette','piments','miel','c. fraîche','v. hachée','S. barbecue','champignons',
    'merguez','chèvre','mozzarella','oignons']
  }
  deletePizza(pizza:Pizza): void {
    const index = this.PIZZAS.findIndex(p => p === pizza);
    if (index !== -1) {
      LIST_PIZZAS.splice(index, 1);
      console.log(`Pizza with id ${pizza.id} has been deleted.`);
    } else {
      console.error(`Pizza with id ${pizza.id} not found.`);
    }
  }
}
