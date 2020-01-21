class Breakfast {
  constructor(food, drink){
    this.food = food;
    this.drink = drink;
  }
}

let bfast = new Breakfast('eggs', 'juice');
bfast;

class Lunch {
  constructor(salad, soup, drink){
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

let newlunch = new Lunch('side salad', 'broccoli cheddar soup', 'iced tea');
newlunch;

class Dinner {
  constructor(salad, soup, entree, dessert){
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this._dessert = dessert;
  }
}

let newdinner = new Dinner('balsamic salad', 'consomme', 'filet mignon', 'cheesecake');
newdinner;