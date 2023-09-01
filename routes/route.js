var express = require('express');
var router = express.Router();
const path = require('path');


router.get('/', function(req, res) {
    let filePath = path.join(__dirname, '/../views/HomePage/home.html')
    res.sendFile(filePath);
});

router.get('/nosotros', function(req, res) {
    let filePath = path.join(__dirname, '/../views/Nosotros/nosotros.html')
    res.sendFile(filePath);
});

router.get('/dealer', function(req, res) {
    let filePath = path.join(__dirname, '/../views/DealerPage/dealer.html')
    res.sendFile(filePath);
});

router.get('/dealer/locator', function(req, res) {
    let filePath = path.join(__dirname, '/../views/DealerLocator/dealerlocator.html')
    res.sendFile(filePath);
});

router.get('/unidades', function(req, res) {
    let filePath = path.join(__dirname, '/../views/ProductPage/Unid/unidades.html')
    res.sendFile(filePath);
});

router.get('/unidades/:name', function(req, res) {
    res.send(`unidades ${req.params.name}  page`);
});


module.exports = router
