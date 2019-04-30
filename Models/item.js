class Item {
  get note(){
    return this._note;
  }
  set note(value){
    this._note = value;
  }

  constructor(itemCode, itemName, category, price, area, description, rating, ImageURL){
    this._itemCode = itemCode;
    this._itemName = itemName;
    this._category = category;
    this._price = price;
    this._area = area;
    this._description = description;
    this._rating = rating;
    this._ImageURL = ImageURL;
  }
  get itemCode(){
    return this._itemCode;
  }
  set itemCode(value){
    this._itemCode = value;
  }
  get itemName(){
    return this._itemName;
  }
  set itemName(value){
    this._itemName = value;
  }
  get category(){
    return this._category;
  }
  set category(value){
    this._category = value;
  }
  get price(){
    return this._price;
  }
  set price(value){
    this._price = value;
  }
  get area(){
    return this._area;
  }
  set area(value){
    this._area = value;
  }
  get description(){
    return this._description;
  }
  set description(value){
    this._description = value;
  }
  get rating(){
    return this._rating;
  }
  set rating(value){
    this._rating = value;
  }
  get ImageURL(){
    return this._ImageURL;
  }
  set ImageURL(value){
    this._ImageURL = value;
  }
}
module.exports = Item;
