const express = require('express')
const router = express.Router()



router.post('/assigned-cases-confirmation-b', function(req, res) {
    res.render('alpha/teamleader/cases/assigned-cases-confirmation-b');
});

//cases queue choice
router.post('/queue-choice', function (req, res) {
    const assignqueue = req.session.data['assign-queue']
    console.log(assignqueue)
    if (assignqueue === 'me') {
      res.redirect('/alpha/teamleader/cases/assigned-cases-confirmation-myqueue')

    } else if (assignqueue === 'agent') {
      res.redirect('/alpha/teamleader/cases/assigning-cases-to-agent')

    } else if (assignqueue === 'other') {
      res.redirect('/alpha/teamleader/cases/assigning-cases-to-other-team')

    }else if (assignqueue === 'addqueue') {
      res.redirect('/alpha/teamleader/cases/assigning-cases-to-add-queue')
    }
  });

//cases new queue add
  router.post('/new-queue-added', function (req, res) {
      const newqueue = req.session.data['new-queue']
      console.log(newqueue)
      if (newqueue === 'me') {
        res.redirect('/alpha/teamleader/cases/assigned-cases-confirmation-myqueue')

      } else if (newqueue === 'agent') {
        res.redirect('/alpha/teamleader/cases/assigning-cases-to-agent')

      } else if (newqueue === 'team') {
        res.redirect('/alpha/teamleader/cases/assigned-cases-confirmation-myqueue')

      }
    });

//tasks queue choice
    router.post('/queue-choice-tasks', function (req, res) {
        const assignqueue = req.session.data['assign-queue']
        console.log(assignqueue)
        if (assignqueue === 'me') {
          res.redirect('/alpha/teamleader/tasks/assigned-tasks-confirmation-myqueue')

        } else if (assignqueue === 'agent') {
          res.redirect('/alpha/teamleader/tasks/assigning-tasks-to-agent')

        } else if (assignqueue === 'other') {
          res.redirect('/alpha/teamleader/tasks/assigning-tasks-to-other-team')

        }else if (assignqueue === 'addqueue') {
          res.redirect('/alpha/teamleader/tasks/assigning-tasks-to-add-queue')
        }
      });

  //tasks new queue add
        router.post('/new-queue-added2', function (req, res) {
            const newqueue = req.session.data['new-queue']
            console.log(newqueue)
            if (newqueue === 'me') {
              res.redirect('/alpha/teamleader/tasks/assigned-tasks-confirmation-myqueue')

            } else if (newqueue === 'agent') {
              res.redirect('/alpha/teamleader/tasks/assigning-tasks-to-agent')

            } else if (newqueue === 'team') {
              res.redirect('/alpha/teamleader/tasks/assigned-tasks-confirmation-myqueue')

            }
          });
module.exports = router
