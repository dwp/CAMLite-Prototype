 const express = require('express')
 const router = express.Router()
// const folderWithinViews = 'alpha'
// const urlPrefix = 'alpha'
// //require(`../views/${folderWithinViews}/_alpha-routes`)(folderWithinViews, urlPrefix, router)
// //require(`../views/${folderWithinViews}/teamleader/_teamleader-routes`)(folderWithinViews, urlPrefix, router)


router.post('/login-as', function (req, res) {
    const login = req.session.data['login']
    if (login === 'teamleader') {      
      //res.render('alpha/teamleader/dashboard-tl') // Could use but in this case better to redirect as below
      res.redirect('/alpha/teamleader/dashboard-tl')
    } else if (login === 'agent') {
      //res.render('alpha/agent/dashboard-a')
      res.redirect('/alpha/agent/dashboard-a')
    } else if (login === 'manager') {
      //res.render('alpha/manager/dashboard-m')
      res.redirect('/alpha/manager/dashboard-m')
    }
  })

 module.exports = router
