var express= require('express');
var router = express.Router();
var session = require('express-session');
var bodyParser = require('body-parser');
//DB's
var userDb = require('../Models/userDB.js');
var userDB = require('../Models/userDB.js');
var userItem = require('../Models/userItem.js');
router.use(session({secret:"test", cookie:{maxAge: 6000}}));
var urlencodedParser = bodyParser.urlencoded ({extended:false});
router.use(session({secret: "test", cookie:{maxAge: 600000}}));
// router.get('/signIn', urlencodedParser, function(req, res){
//   var users = getUsers();
//   var items = userDB.getUser();
//   console.log(items);
//   var user = {
//     title: 'items',
//     path: req.url,
//     users: items,
//     users:users
//   }
//   res.rendedr('/signIn', {user:user});
// });
// router.get('/signIn/myOrders/:userID', urlencodedParser ,function(req,res){
//   var userID = req.params.userID;
//   console.log("user identification is: " + userID);
//    var user = getUsers();
//    var user = userDB.getUser(userID);
//    console.log(user);
//    var user = {
//      title: 'User',
//      path: req.url,
//      user: user
//    }
//    res.render('myOrders',{user: req.session.user});
// });
var items = require('../Models/itemDB.js');

router.get('/', function(req, res){
  console.log("signin");
//getting userID associated
  users = userDb.getUsers();
  user = {
    userID: users[0].userID,
    firstName: users[0].firstName,
    lastName: users[0].lastName,
    email: users[0].email,
  }

  var itemCode = req.query.itemCode;
  console.log("Item code is : "+ itemCode);
//getting respected item information
  var itemList =[];
  itemList.push(req.params.itemName);
  var item = itemDb.getItem();
  console.log(item);
  var data= {
    title: 'itemList',
    path: req.url,
    itemList: itemList,
    items: item
  }

  req.session.theUser = user;
  req.session.itemList = data;
//displaying userID information to the console
  console.log(`info is:
     ${user.userID}
      ${user.firstName} ${user.lastName}
      ${user.email}`);
//displaying itemList to the console
  userList = itemDb.getItems();
  console.log(`item list is:` + userList);
  res.render('pages/myItems', {user: req.session.theUser, data: req.session.itemList});
});


router.get('/signout', function(req, res){
  console.log("signout");
  req.session.destroy();

  res.render('pages/index');
  console.log("destroyed");
});


router.get('/myOrders', urlencodedParser, function(req, res){
    if(req.session.theUser){
      res.render('pages/myItems',{user: req.session.theUser, items: req.session.userList} );
      next();
    }
  });

router.get('/add', function(req, res){
    res.locals.data = req.body.addItem;
    let userProfile = addItem(req.query.itemCode);
    res.render('pages/myItems', {user: user, data: req.session.itemList});

  });








router.post('/signin', function(req, res){
  main(req, res);
});
function main(req, res){
  if(req.session.theUser){
    if(req.params.actionParameter){
      console.log("action action action");
      if(req.params.actionParameter == "save"){
        save();
        console.log('save item');
      }
      if(req.params.actionParameter == "updateProfile"){
        updateProfile();
        console.log('update user profile')
      }
      if(req.params.actionParameter == "updateRating"){
        updateRating();
      }
      if(req.params.actionParameter == "deleteItem"){
        deleteItem();
      }
      if(req.params.actionParameter == "updateFlag"){
        updateFlag();
    }
    }else{
      res.render('pages/myItems' ,{});
    }
  if(!req.session.theUser || req.session.theUser == ""){
    var newUser = userDB.getUsers();
    req.session.theUser = newUser;
    var Profile2 = userDB.getUserProfiles();
    req.session.userProfile = Profile2;
    res.render('pages/index', {});
  }
}
function save(){
  if(ItemlistFound()){

    req.params.itemList.forEach(element => {
      if(element.code == req.params.itemCode){

        req.session.userProfile.getItems().forEach(item => {
          if(item == element){
            res.render('myItems', {});
          }else{
            var userItem2 = userItem.userItem2(element, 0);
            Profile2.addItem(userItem2);
            req.session.userProfile = Profile2;
            res.render('myItems', {});
          }
        });
      }else{
        res.render('myItems', );
      }
    });
}
}

function updateProfile(){
  if(ItemlistFound()){
    if (element.code == req.params.itemCode){
      req.session.userProfile.getItems();
      if(item == element){
        req.session.theItem = item;
        res.render('pages/feedback', {item: item.item});
      }
    }
  }
  else{
    res.render('myItems', {});
  }
}

function updateRating(){
  if(ItemlistFound()){
    if(req.params.rating >=0 && req.params.rating <=5){
      if (req.params.rating == 0){
        req.params.itemList[0].rating =0;
        userProfile.updateItem(req.params.itemList[0]);
      }
    }
  }else{
    res.render('myItems', {});
  }
}

function updateFlag(){
  if(ItemlistFound()){
    if(req.params.flag == true){
      req.params.itemList[0].addItem = req.params.flag;
      Profile2.updateItem(req.params.itemList[0]);
    }
    req.session.userProfile = Profile2;
    res.render('myItems');
  }else{
    res.render('myItems', {});
  }
}
function deleteItem (){
  if(ItemlistFound()){
    Profile2.removeItem(req.params.itemList[0].itemCode);
  }
    res.render('myItems');
}


function ItemlistFound(){
  if(req.params.itemList && req.params.itemList != "" && req.params.itemList != null){
    return true;
  }else{
    return false;
  }
}
};
module.exports = router;
