// Assignment 4.1: Objective Recipes 1

function Ingredients(name, amount) {
  (this.name = name), (this.amount = amount);
}
function Recipe(name, ingredients, servings) {
  this.name = name;
  this.ingredients = ingredients;
  this.servings = servings;
}

Ingredients.prototype.scale = function (factor) {
  this.amount = this.amount * factor;
};

Recipe.prototype.toString = function () {
  return this.ingredients.reduce((acc, ingredient) => {
    return acc + `- ${ingredient.name} (${ingredient.amount})\n`;
  }, `${this.name} (${this.servings} servings)\n\n`);
};

Recipe.prototype.setServings = function (servings) {
  this.ingredients.forEach((ingredient) =>
    ingredient.scale(servings / this.servings)
  );
  this.servings = servings;
};

const rice = new Ingredients("rice", 5);
const meat = new Ingredients("meat", 3);
const tomato = new Ingredients("tomato", 2);
const pepper = new Ingredients("pepper", 1);

const kebapRoll = new Recipe("kebapRoll", [rice, meat, tomato, pepper], 5);
kebapRoll.setServings(100);
console.log(kebapRoll.toString());

class HotRecipe extends Recipe {
  constructor(name, ingredients, servings, heatLevel) {
    super(name, ingredients, servings);
    this.heatLevel = heatLevel;
  }

  toString() {
    let recipeStr = super.toString();
    if (this.heatLevel > 5) {
      recipeStr +=
        "\n" + `WARNING: This is a heat level ${this.heatLevel} recipe!`;
    }
    return recipeStr;
  }
}
