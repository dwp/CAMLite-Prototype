const express = require('express')
const router = express.Router()



router.post('/assigned-cases-confirmation-b', function(req, res) {
    res.render('/alpha/camlite/cases/assigned-cases-confirmation-b');
});



    //removing query
                router.post('/delete-query', function (req, res) {
                    const deletequery = req.session.data['delete-query']
                    console.log(deletequery)
                    if (deletequery === 'yes') {
                      res.redirect('/alpha/every-user-general/removing-query-confirmation')

                    } else if (deletequery === 'no') {
                      res.redirect('/alpha/every-user-general/saved-queries')

                    }
                  });



module.exports = router
