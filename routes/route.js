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

router.get('/dealerlocator', function(req, res) {
    let filePath = path.join(__dirname, '/../views/DealerLocator/dealerlocator.html')
    res.sendFile(filePath);
});

router.get('/unidades', function(req, res) {
    let filePath = path.join(__dirname, '/../views/ProductPage/Unid/unidades.html')
    res.sendFile(filePath);
});

// router.get('/unidades/:name', function(req, res) {
//     res.send(`unidades ${req.params.name}  page`);
// });

router.get('/unidades/desertcross', function(req, res) {
    let filePath = path.join(__dirname, '/../views/Teasers/desertcross/desertcross.html')
    res.sendFile(filePath);
});

router.get('/unidades/pathcross', function(req, res) {
    let filePath = path.join(__dirname, '/../views/Teasers/pathcross/pathcross.html')
    res.sendFile(filePath);
});

router.get('/unidades/workcross', function(req, res) {
    let filePath = path.join(__dirname, '/../views/Teasers/workcross/workcross.html')
    res.sendFile(filePath);
});


module.exports = router
