const express = require('express')
const router = express.Router()

router.get('/test', function(req, res) {
    res.render('alpha/teamleader/test', { 'name' : 'Foo' });
});

router.post('/assigned-cases-confirmation-b', function(req, res) {
    res.render('alpha/teamleader/assigned-cases-confirmation-b');
});



module.exports = router