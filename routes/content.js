
var path = require('path');
var fs = require('fs');
var express = require('express');

var router = express.Router();

// Add 10 walls without loop
router.get('/js-1', function(req, res) {
  res.render('js-1');
}); 

// Add 10 walls with while loop
router.get('/js-2', function(req, res) {
  res.render('js-2');
}); 

// Add 10 walls with a for loop
router.get('/js-3', function(req, res) {
  res.render('js-3');
}); 

// Challenge add 5 walls and 5 energies with a for loop
router.get('/js-4', function(req, res) {
  res.render('js-4');
}); 

// Challenge add 5 walls and 5 energies with a for loop
router.get('/js-5', function(req, res) {
  res.render('js-5');
}); 

// Challenge for loop with if
  router.get('/js-6', function(req, res) {
  res.render('js-6');
}); 

// For loop multiple statements
  router.get('/js-7', function(req, res) {
  res.render('js-7');
}); 

// For loop counter addition
  router.get('/js-8', function(req, res) {
  res.render('js-8');
}); 

// For loop addWall(x,y) horizontal line of walls
  router.get('/js-9', function(req, res) {
  res.render('js-9');
}); 

// For loop addWall(x,y) diagonal line of walls - challenge
  router.get('/js-10', function(req, res) {
  res.render('js-10');
}); 

// For loop 'V' challenge
  router.get('/js-11', function(req, res) {
  res.render('js-11');
}); 

// For loop break
  router.get('/js-12', function(req, res) {
  res.render('js-12');
}); 

// Nested for
  router.get('/js-13', function(req, res) {
  res.render('js-13');
}); 


module.exports = router;



