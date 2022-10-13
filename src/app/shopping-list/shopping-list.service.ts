import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: ingredient[] = [
    new ingredient('apple', 5),
    new ingredient('tomato', 10),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index: any) {
    return this.getIngredients[index];
  }
  addIngredient(ingredient: ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients: ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  updateIngredient(index: number, newIngredient: ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
