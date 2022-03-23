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
                      res.redirect('/alpha/every-user-general/deleted-queries-confir')

                    } else if (deletequery === 'no') {
                      res.redirect('/alpha/every-user-general/saved-queries')

                    }
                  });

    //admin employee change
                              router.post('/admin-changed-name', function (req, res) {
                                  const adminchangedname = req.session.data['admin-changed-name']
                                  console.log(adminchangedname)
                                  if (adminchangedname === 'yes') {
                                    res.redirect('/alpha/admin/employee-details-notif')

                                  } else if (adminchangedname === 'no') {
                                    res.redirect('/alpha/admin/employee-details')

                                  }
                                });


module.exports = router
