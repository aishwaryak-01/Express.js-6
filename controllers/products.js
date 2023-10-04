const products = [];

const path = require('path');

exports.getAddProducts = (req, res, next) => {
res.render('add-product', {pageTitle: 'Add Product', path:'/admin/add-product', formsCSS:true, productCSS:true, activeAddProduct:true});
}

exports.postAddProducts = (req, res, next) => {
products.push({title:req.body.title});
res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    res.render('shop', {pageTitle:'shop', path:'/', productsCSS:true, activeShop:true, hasProducts:products.length>0, prods:products});
}

exports.getContact = (req, res, next) => {
    res.render('contactus', {pageTitle: 'ContactUs', path:'/contactus', formsCSS:true, activeContact:true})
}

exports.postContact = (req, res, next) => {
    res.redirect('/success');
}

exports.getSuccesss = (req, res, next) => {
    res.render('Success', {pageTitle:'Success', path:'/success', formsCSS:true, activeSuccess:true});
}
