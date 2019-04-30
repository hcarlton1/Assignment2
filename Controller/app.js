var express = require('express');
var app = express();
const path =require('path');
//changed the path name, took out the 'user/hcarlton/...'
var itemDb = require('../Models/itemDB');
var profileController=  require('../Controller/profile-controller.js');
var userProfile = require('../Models/userProfile.js');
//changed the path name, took out the 'user/hcarlton/...'
let catalog = require('./catalog.js');



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../Views'));
// app.set('assets', path.join('/../assets'))
app.use('/assets', express.static('../assets'));

app.get('/', function (req, res) {
  res.render('pages/index.ejs');
});
// app.get('/signIn/myOrders', urlencodedParser ,function(req,res){
//   var userID = req.params.userID;
//   console.log("user identification is:" + userID);
//    var users = userDb.getUsers();
//    // var user = userDb.getUser();
//    console.log(users);
//    var user ={
//       user: users
//    }
//    // req.session.theUser = user;
//    res.render('pages/myItems', {user: user});
//
// });
app.use('/signin', profileController);
app.get('/signout', profileController);









app.get('/catalog', function(req, res){
  var catalogs = getCatalogs();
  var itemData = itemDb.getItems();
  console.log(itemData);
  var data ={
    title: 'Catalogs',
    path: req.url,
    catalogs: catalogs,
    items: itemData
  }
  res.render('pages/catalog', { data: data});
});

app.get('/catalog/:catalogName', function(req, res){
  var catalogs =[];
  catalogs.push(req.params.catalogName);
  var itemData = itemDb.getItems();

  var data ={
    title: 'Catalogs',
    path: req.url,
    catalogs: catalogs,
    items: itemData
  }
  res.render('pages/catalog', { data: data});
});

app.get('/catalog/item/:itemCode', function (req, res) {
  var itemCode = req.params.itemCode;
  console.log("Item code is : "+ itemCode);

  var item = itemDb.getItem(itemCode);
  console.log(item);
  var data= {
    title: 'Item',
    path: req.url,
    item: item
  }
  res.render('pages/item', {data: data});
});

var catalogs = [];
let getCatalogs = function() {

    var data = itemDb.getItems();
    data.forEach(function (item) {
        if(!catalogs.includes(item.category)){
            catalogs.push(item.category);
        }

    });
    return catalogs;
};




app.get('/about', function (req, res) {
  res.render('pages/about.ejs');
});
app.get('/contact', function (req, res) {
  res.render('pages/contact.ejs');
});
app.get('/#', function(req, res){
  res.render('pages/contact.ejs');
});
app.get('/myOrders', function (req, res) {
  res.render('pages/myItems.ejs');
});
app.get('/myItems/item', function (req, res) {
  res.render('pages/item.ejs');
});
app.get('/feedback', function (req, res) {
  res.render('pages/feedback.ejs');
});


app.listen(40);
console.log('2000 is the magic port');
