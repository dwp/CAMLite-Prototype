const express = require('express')
const router = express.Router()

router.get('/test', function(req, res) {
    res.render('alpha/agent/test1', { 'name' : 'Foo','row': 'hellohello' });
});





module.exports = router
