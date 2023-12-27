import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListPizzaComponent } from './pizzas/list-pizza/list-pizza.component';
import { DetailsPizzaComponent } from './pizzas/details-pizza/details-pizza.component';
import { PageNotFoundComponent } from './Shared/page-not-found/page-not-found.component';
import { PizzaEditComponent } from './pizzas/pizza-edit/pizza-edit.component';

const routes: Routes = [
  { path: 'pizzas', component: ListPizzaComponent },
  { path: 'pizzas/:id', component: DetailsPizzaComponent },
  { path: 'pizzas/edit/:id', component:PizzaEditComponent},
  {path:'',redirectTo: 'pizzas',pathMatch: 'full'},
  {path:'**',component: PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
