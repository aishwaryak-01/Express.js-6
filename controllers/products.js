const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

exports.postAddProducts = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
  }

exports.getProducts = (req, res, next) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  }

  exports.getContactus = (req, res, next) => {
    res.render('contactus', {
      pageTitle: 'Contact Us',
      path: '/contactus',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

  exports.postContactus = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/success');
  }

  exports.getSuccess = (req, res, next) => {
    res.render('success', {
      pageTitle: 'Success',
      path: '/success',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
  }

  exports.getError = (req, res, next) => {
    res.render('404', {
      pageTitle: 'Error',
      path: '/shop',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
  }

