var express = require('express');
var router = express.Router();
//testings
var userData = require('../Models/userDB.js');
var user = require('../Models/user.js');
var userItem = require('../Models/userItem.js');
var itemDb = require('../Models/itemDB.js');


var userID;
var userItems = [];

module.exports.addItem= function(userItem, userItems){
  var found = -1;
  for(var i = 0; i < userItems.length; i++){
      if(userItems[i].item.itemCode == userItem.item.itemCode){
          found = 1;
      }
  }
  if(found != 1){
      userItems.push(userItem);
  }
  return userItems;
};

function removeItem(userItems, userItem){
  for (var i = 0; i < userItems.length; i++){
    if(userItems[i].item.itemCode == userItem.item.itemCode){
      userItems.splice(i, 1);
    }
  }
return userItems;
};
function updateItem(userItems,userItem, rating, addItem ){
  for(var i = 0; i < userItems.length; i++){
    if(userItems[i].itemCode == userItem.item.itemCode){
      userItems[i].rating = rating;
      userItems[i].addItem = addItem;
    }
  }
  return userItems;
}
function getItems(){
  return userItems;
}
function emptyProfile(){
  userItems = [];
  return userItems;
}
module.exports.Profile2 = function (userID, userItems){
  userID = userID;
  userItems = userItems;
  return {userID, userItems};
}

module.exports = {userID, userItems};
