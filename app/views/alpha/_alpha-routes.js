module.exports = function (folderForViews, urlPrefix, router) {
  router.get('/login-as', function (req, res) {
    res.render(`./${folderForViews}/login-as`)
  })

router.post('/login-as-answer', function (req, res) {
    const login = req.session.data['login']
    if (login === 'teamleader') {
      res.render('agent/teamleader/dashboard-tl')
    } else if (login === 'agent') {
      res.render('agent/teamleader/dashboard-a')
    } else if (login === 'manager') {
      res.render('agent/teamleader/dashboard-m')
    }
  })


}

// router.post('/login-as-answer', function (req, res) {
//     const login = req.session.data['login']
//     if (login === 'teamleader') {
//       res.redirect(`/${urlPrefix}/teamleader/dashboard-tl`)
//     } else if (login === 'agent') {
//       res.redirect(`/${urlPrefix}/agent/dashboard-a`)
//     } else if (login === 'manager') {
//       res.redirect(`/${urlPrefix}/manager/dashboard-m`)
//     }
//   })
// }
