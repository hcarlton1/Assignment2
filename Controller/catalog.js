var express = require('express');
var router = express.Router();
//changed the path name, took out the 'user/hcarlton/...'
var itemDb = require('../Models/itemDB');

router.get('/catalog', function(req, res){
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

router.get('/catalog/:catalogName', function(req, res){
  var catalogs =[];
  catalogs.push(req.params.catalogName);
  var itemData = itemDb.getItems();

  var data ={
    title: 'Catalogs',
    path: req.url,
    catalogs: catalogs,
    items: itemData
  }
  res.render('catalog', { data: data});
});

router.get('/catalog/item/:itemCode', function (req, res) {
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


module.exports = router;
