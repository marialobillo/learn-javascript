class Media{
  constructor(title, isCheckedOut, ratings){
    this._title = title;
    this.isCheckedOut = isCheckedOut;
    this._ratings = ratings;
  }

  get title(){
    return this._title;
  }

  get isCheckedOut(){
    return this._isCheckedOut;
  }

  get ratings(){
    return this._ratings;
  }

  toggleCheckOutStatus(){
    this._isCheckedOut ? this._isCheckedOut=false : this._isCheckedOut=true;
  }

  getAverageRating(){
  	let averageSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0) / rating.length;
  }

  addRating(inputValue){
    this.ratings.push(inputValue);
  }

}

class Book extends Media{
  constructor(author, title, pages){
    this.author = author;
    this.title = title;
    this.pages = pages;
    super(isCheckedOut);
    super(ratings);
  }
  get author(){
    return this.author;
  }
  get title(){
    return this.title;
  }
  get pages(){
    this.pages;
  }
  getAverageRating(){
  	let averageSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0) / rating.length;
  }
  toggleCheckOutStatus(){
    this._isCheckedOut ? this._isCheckedOut=false : this._isCheckedOut=true;
  }
  addRating(inputValue){
    this.ratings.push(inputValue);
  }

}

let myBook = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
