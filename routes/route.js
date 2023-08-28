var express = require('express');
var router = express.Router();
const path = require('path');


router.get('/', function(req, res) {

    let filePath = path.join(__dirname, '/../views/HomePage/home.html')
    res.sendFile(filePath);

});

router.get('/unidades', function(req, res) {

    let filePath = path.join(__dirname, '/../views/ProductPage/Unid/unidades.html')
    res.sendFile(filePath);

});

router.get('/nosotros', function(req, res) {
    res.send('nosotros page');
});

router.get('/dealer', function(req, res) {
    res.send('dealer page');
});

router.get('/dealer/locator', function(req, res) {
    res.send('dealer locator page');
});

router.get('/products/', function(req, res) {
    res.send('products list page');
});

router.get('/products/:name', function(req, res) {
    res.send(`product ${req.params.name}  page`);
});




module.exports = router
