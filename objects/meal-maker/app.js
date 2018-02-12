const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: []
  },
  set appetizers(appetizer){
  	this._courses._appetizers.push(appetizer);
	},

  get appetizers(){
    return this._courses._appetizers;
  },

  set mains(main){
  	this._courses._mains.push(main);
	},

  get mains(){
    return this._courses._mains;
  },

  set desserts(dessert){
  	this._courses._desserts.push(dessert);
	},

  get desserts(){
    return this._courses._desserts;
  },

  get courses(){
    return {
      appetizers: this._courses._appetizers,
      mains: this._courses._mains,
      desserts: this._courses._desserts
    };
  },
  addDishToCourse(courseName, dishName, dishPrice){
    let dish =  {
      name: dishName,
      price: dishPrice
    };

    this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName){
    let dishes = this._courses[courseName];
    let rand = Math.floor(Math.random() * dishes.length);

    return dishes[rand];
  },
  generateRandomMeal(){
    let appetizer = this.getRandomDishFromCourse('_appetizers');
    let main = this.getRandomDishFromCourse('_mains');
    let dessert = this.getRandomDishFromCourse('_desserts');
    let total = 0;
    total = appetizer.price + main.price + dessert.price;

    return `${appetizer.name}, ${main.name}, ${dessert.name} - Total price is ${total}`;
  }
};


menu.addDishToCourse('_appetizers', 'Chicken Tikka', 4);
menu.addDishToCourse('_appetizers', 'Chicken Tandoori', 5);
menu.addDishToCourse('_appetizers', 'Roast Beef', 5);

menu.addDishToCourse('_mains', 'Noodles', 6);
menu.addDishToCourse('_mains', 'Biryani', 7);
menu.addDishToCourse('_mains', 'Pizza', 8);

menu.addDishToCourse('_desserts', 'Pan', 1);
menu.addDishToCourse('_desserts', 'Cream', 2);
menu.addDishToCourse('_desserts', 'Sweet', 4);

console.log(menu.generateRandomMeal());
