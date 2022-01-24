const express = require('express')
const router = express.Router()

router.get('/test', function(req, res) {
    res.render('alpha/teamleader/test', { 'name' : 'Foo' });
});

router.post('/assigned-cases-confirmation-b', function(req, res) {
    res.render('alpha/teamleader/assigned-cases-confirmation-b');
});


router.post('/queue-choice', function (req, res) {
    const assignqueue = req.session.data['assign-queue']
    console.log(assignqueue)
    if (assignqueue === 'me') {
      res.redirect('/alpha/teamleader/test1')

    } else if (assignqueue === 'agent') {
      res.redirect('/alpha/agent/test2')

    } else if (assignqueue === 'other') {
      res.redirect('/alpha/agent/other')

    }else if (assignqueue === 'addqueue') {
      res.redirect('/alpha/agent/other')
    }
  });


module.exports = router
