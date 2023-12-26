import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PizzaIngredientColorPipe } from "../Shared/pipes/pizza-ingredient-color.pipe";
import { BorderCardDirectiveDirective } from "../directive/border-card-directive.directive";
import { DetailsPizzaComponent } from "./details-pizza/details-pizza.component";
import { ListPizzaComponent } from "./list-pizza/list-pizza.component";
import { PizzasService } from "../pizzas.service";
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { FormsModule } from "@angular/forms";
import { PizzaEditComponent } from './pizza-edit/pizza-edit.component';

@NgModule({
    declarations: [
      ListPizzaComponent,
      BorderCardDirectiveDirective,
      PizzaIngredientColorPipe,
      DetailsPizzaComponent,
      PizzaFormComponent,
      PizzaEditComponent
      ],
    imports: [
      CommonModule,
      FormsModule
      
    ]
  })
  export class PizzasModule { }
  