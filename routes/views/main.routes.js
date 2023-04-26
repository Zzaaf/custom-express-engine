const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.render('Home', { name: 'Artem' });
  });

module.exports = router;
