const express = require('express')
const router = express.Router()



router.post('/assigned-cases-confirmation-b', function(req, res) {
    res.render('/alpha/camlite/cases/assigned-cases-confirmation-b');
});

//cases queue choice
router.post('/queue-choice', function (req, res) {
    const assignqueue = req.session.data['assign-queue']
    console.log(assignqueue)
    if (assignqueue === 'me') {
      res.redirect('/alpha/camlite/cases/assigned-cases-confirmation-myqueue')

    } else if (assignqueue === 'agent') {
      res.redirect('/alpha/camlite/cases/assigning-cases-to-agent')

    } else if (assignqueue === 'other') {
      res.redirect('/alpha/camlite/cases/assigning-cases-to-other-team')

    }else if (assignqueue === 'addqueue') {
      res.redirect('/alpha/camlite/cases/assigning-cases-to-add-queue')
    }
  });

//cases new queue add
  router.post('/new-queue-added', function (req, res) {
      const newqueue = req.session.data['new-queue']
      console.log(newqueue)
      if (newqueue === 'me') {
        res.redirect('/alpha/camlite/cases/assigned-cases-confirmation-myqueue')

      } else if (newqueue === 'agent') {
        res.redirect('/alpha/camlite/cases/assigning-cases-to-agent')

      } else if (newqueue === 'team') {
        res.redirect('/alpha/camlite/cases/assigned-cases-confirmation-myqueue')

      }
    });

//tasks queue choice
    router.post('/queue-choice-tasks', function (req, res) {
        const assignqueue = req.session.data['assign-queue']
        console.log(assignqueue)
        if (assignqueue === 'me') {
          res.redirect('/alpha/camlite/tasks/assigned-tasks-confirmation-myqueue')

        } else if (assignqueue === 'agent') {
          res.redirect('/alpha/camlite/tasks/assigning-tasks-to-agent')

        } else if (assignqueue === 'other') {
          res.redirect('/alpha/camlite/tasks/assigning-tasks-to-other-team')

        }else if (assignqueue === 'addqueue') {
          res.redirect('/alpha/camlite/tasks/assigning-tasks-to-add-queue')
        }
      });

  //tasks new queue add
        router.post('/new-queue-added2', function (req, res) {
            const newqueue = req.session.data['new-queue']
            console.log(newqueue)
            if (newqueue === 'me') {
              res.redirect('/alpha/camlite/tasks/assigned-tasks-confirmation-myqueue')

            } else if (newqueue === 'agent') {
              res.redirect('/alpha/camlite/tasks/assigning-tasks-to-agent')

            } else if (newqueue === 'team') {
              res.redirect('/alpha/camlite/tasks/assigned-tasks-confirmation-myqueue')

            }
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
