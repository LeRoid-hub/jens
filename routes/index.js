var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sites/index', { title: 'home' });
});
router.get('/leistungen', function(req, res, next) {
  res.render('sites/leistungen', { title: 'leistungen' });
});
router.get('/karriere', function(req, res, next) {
  res.render('sites/karriere', { title: 'karriere' });
});
router.get('/team', function(req, res, next) {
  res.render('sites/team', { title: 'team' });
});
router.get('/kontakt', function(req, res, next) {
  res.render('sites/kontakt', { title: 'kontakt' });
});
router.get('/impressum', function(req, res, next) {
  res.render('sites/impressum', { title: 'impressum' });
});
router.get('/datenschutz', function(req, res, next) {
  res.render('sites/datenschutz', { title: 'datenschutz' });
});

module.exports = router;
