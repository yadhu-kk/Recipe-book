import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipes.model';

@Injectable()
export class RecipeService {
  recipeSelected = new Subject<Recipe>();
  // recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'sample test',
      'https://curlytales.com/wp-content/uploads/2020/09/Untitled-2020-09-09T181703.130.jpg',
      [new ingredient('meat', 1), new ingredient('Frenchfries', 20)]
    ),
    new Recipe(
      'A test recipe',
      'sample test',
      'https://static.toiimg.com/photo/79811787.cms',
      [new ingredient('Buns', 2), new ingredient('Meat', 1)]
    ),
    new Recipe(
      'A Test recipe',
      'sample test',
      'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg',
      [new ingredient('meat', 1), new ingredient('Frenchfries', 20)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); //making copy of array
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppinList(ingredients: ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
