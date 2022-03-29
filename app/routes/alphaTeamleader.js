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

    //changing records
                router.post('/change-records', function (req, res) {
                  const changerecords = req.session.data['change-records']
                  console.log(changerecords)
                  if (changerecords === 'status') {
                      res.redirect('/alpha/camlite/cases/change-status-bulk')

                  } else if (changerecords === 'duedate') {
                        res.redirect('/alpha/camlite/cases/change-due-date')

                  } else if (changerecords === 'resolution') {
                    res.redirect('/alpha/camlite/cases/change-resolution')

            }
            });




//delete-position-skill-item
            router.post('/delete-position-skill-item', function (req, res) {
              const deletepositionskillitem = req.session.data['delete-position-skill-item']
              console.log(deletepositionskillitem)
              if (deletepositionskillitem === 'yes') {
                  res.redirect('/alpha/admin/position-details-confir')

              } else if (deletepositionskillitem === 'no') {
                    res.redirect('/alpha/admin/position-details')



        }
        });


//delete-position-employee
                    router.post('/delete-position-employee', function (req, res) {
                      const deletepositionemployee = req.session.data['delete-position-employee']
                      console.log(deletepositionemployee)
                      if (deletepositionemployee === 'yes') {
                          res.redirect('/alpha/admin/position-delete-confir')

                      } else if (deletepositionemployee === 'no') {
                            res.redirect('/alpha/admin/view-position')



                }
                });

  //delete-respo-employee
                                    router.post('/delete-respo-employee', function (req, res) {
                                      const deleterespoemployee = req.session.data['delete-respo-employee']
                                      console.log(deleterespoemployee)
                                      if (deleterespoemployee === 'yes') {
                                          res.redirect('/alpha/admin/view-responsibility-confir')

                                      } else if (deleterespoemployee === 'no') {
                                            res.redirect('/alpha/admin/view-responsibility')



                                }
                                });

module.exports = router
