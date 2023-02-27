        //--require modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
        //--route
const route = express.Router();
        //--Models
const {User, Product } = require('../models');
        //--user & products instance 
const user = new User();
const product = new Product();
        //--get
route.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'))
})

        //--USERS
route.post('/login', bodyParser.json(), (req, res) =>{
    User.login(req, res);
})
        //get all users
route.get('/users', (req, res) => {
    user.fetchUsers(req, res);
});
        //register a user
route.post('/register', bodyParser.json(), (req, res) => {
    User.createUser(req, res);
});
        //update user
route.put('/user/:id', bodyParser.json(), (req, res) => {
    User.updateUser(req, res);
});
        //delete 
route.delete('/user/:id', (req, res) => {
    User.deleteUser(req, res);
});

        //PRODUCTS
//get all products
route.get('/products', (req, res) => {
    Product.fetchProducts(req, res);
})
//get 1 product
route.get('/product/:id', (req, res) => {
    Product.fetchProduct(req, res);
});
//add a new product
route.post('/product', bodyParser.json(), (req, res) => {
    Product.addProduct(req, res);
})
//update product
route.put('/product/:id', bodyParser.json(), (req, res) => {
    Product.updateProduct(req, res);
})
//delete product
route.delete('/product/:id', bodyParser.json(), (req, res) => {
    Product.deleteProducts(req, res);
})

module.exports = route;
