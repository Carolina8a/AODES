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
    let filePath = path.join(__dirname, '/../views/Unidades/unidades.html')
    res.sendFile(filePath);
});

router.get('/unidades/atv/:name', function(req, res) {
    let filePath = path.join(__dirname, `/../views/Unidades/ATVs/${req.params.name}/${req.params.name}.html`)
    res.sendFile(filePath, {}, function (err) {
        if (err) {
            console.log(`Tried to load page that does not exist:\n\n${JSON.stringify(req.params.name)}\n\nredirecting to homepage`)
            res.redirect('/')
        } else {
            console.log('Sent:', filePath);
        }
    })
});

router.get('/unidades/utv/:name', function(req, res) {
    let filePath = path.join(__dirname, `/../views/Unidades/UTVs/${req.params.name}/${req.params.name}.html`)
    res.sendFile(filePath, {}, function (err) {
        if (err) {
            console.log(`Tried to load page that does not exist:\n\n${JSON.stringify(req.params.name)}\n\nredirecting to homepage`)
            res.redirect('/')
        } else {
            console.log('Sent:', filePath);
        }
    })
});

router.get('/unidades/:name', function(req, res) {
    let filePath = path.join(__dirname, `/../views/Teasers/${req.params.name}/${req.params.name}.html`)
    res.sendFile(filePath, {}, function (err) {
        if (err) {
            console.log('Tried to load page that does not exist, redirecting to homepage')
            res.redirect('/')
        } else {
            console.log('Sent:', filePath);
        }
    })
});

// router.get('/unidades/desertcross', function(req, res) {
//     let filePath = path.join(__dirname, '/../views/Teasers/desertcross/desertcross.html')
//     res.sendFile(filePath);
// });

// router.get('/unidades/pathcross', function(req, res) {
//     let filePath = path.join(__dirname, '/../views/Teasers/pathcross/pathcross.html')
//     res.sendFile(filePath);
// });

// router.get('/unidades/workcross', function(req, res) {
//     let filePath = path.join(__dirname, '/../views/Teasers/workcross/workcross.html')
//     res.sendFile(filePath);
// });

router.get('*', function(req, res){
    console.log(`Tried to load page that does not exist:\n\n${JSON.stringify(req.params.name)}\n\nredirecting to homepage`)
    res.redirect('/')
});

module.exports = router
