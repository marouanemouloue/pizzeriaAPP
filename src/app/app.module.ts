import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPizzaComponent } from './pizzas/list-pizza/list-pizza.component';
import { BorderCardDirectiveDirective } from './directive/border-card-directive.directive';
import { PizzaIngredientColorPipe } from './Shared/pipes/pizza-ingredient-color.pipe';
import { DetailsPizzaComponent } from './pizzas/details-pizza/details-pizza.component';
import { PageNotFoundComponent } from './Shared/page-not-found/page-not-found.component';
import { PizzasModule } from './pizzas/pizzas.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PizzasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
