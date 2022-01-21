module.exports = function (folderForViews, urlPrefix, router) {
  router.get('/login-as', function (req, res) {
    res.render(`./${folderForViews}/login-as`)
  })

  router.post('/position-notification', function (req, res) {
      const position = req.session.data['position']
      if (position === 'teamleader') {
        res.redirect(`/${urlPrefix}/position-confirmation-tl`)
      } else if (position === 'agent') {
        res.redirect(`/${urlPrefix}/position-confirmation-a`)
      }
  })

//  router.post('/queue-choice', function (req, res) {
//           const assign = req.session.data['assign-queue']
//           if (assign === 'me') {
//             res.redirect(`/${urlPrefix}/test1`)
//           } else if (assign === 'agent') {
//             res.redirect(`/${urlPrefix}/test2`)
//           } else if (assign === 'other') {
//             res.redirect(`/${urlPrefix}/test3`)
//           }
//           })

        router.post('/assigned-cases-confirmation-a', function (req, res) {
          console.log(req)
          })
}

