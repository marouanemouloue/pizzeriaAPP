import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/Pizza';
import { PizzasService } from 'src/app/pizzas.service';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss']
})
export class PizzaFormComponent implements OnInit {
  ingredients: string[]; 
  @Input() pizza: Pizza | undefined; 

  constructor(private router: Router, private pizzasService: PizzasService) {
    this.ingredients= this.pizzasService.getPizzaIngredients();
   }

  ngOnInit() {
  }

  hasIngredient(type: string): boolean {
      
    const index = this.pizza?.compositions?.indexOf(type);
    console.log(this.pizza?.compositions)
    return (index !== -1)? true : false;
  }

  selectIngredient($event:any, ingredient: string): void {
    console.log($event)
    const checked = $event.target.checked;
    console.log(checked)
    if (checked){
      this.pizza?.compositions?.push(ingredient);
    } else {
      const index = this.pizza?.compositions?.indexOf(ingredient);
  
      if (index !== undefined && index > -1) {
        this.pizza?.compositions?.splice(index, 1);
      }
    }
  }
  isCompositionValid(ingredient: string): boolean {
    console.log(this.pizza?.compositions?.length)
    if(this.pizza?.compositions?.length === 1 && this.hasIngredient(ingredient)){
      return false;
    }
    if (this.pizza?.compositions && this.pizza?.compositions.length >= 3 && !this.hasIngredient(ingredient)){
      return false;
    }
    return true;
  }

  onSubmit(): void {
    
    this.router.navigate(['/pizzas', this.pizza?.id]);
  }
}
