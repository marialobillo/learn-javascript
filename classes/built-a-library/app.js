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
