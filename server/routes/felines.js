var express = require('express');
var router = express.Router();
var path = require('path');

var cats = ['Kris', 'Luna', 'Rubio'];



router.get('/', function(req, res) {
  res.send(cats);
});

router.post('/', function(req, res) {
  var match = false;
  var cat = req.body.catName;
  cats.forEach(function(item,index,arr) {


    if (cat.toLowerCase()==item.toLowerCase()) {
      match = true;
      res.send(false);
    }
  });
  if (match==false) {
  cats.push(cat);
  res.send(true);
  }

});



module.exports = router;
