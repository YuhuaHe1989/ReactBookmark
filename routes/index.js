var express = require('express');
var router = express.Router();

router.get('/express', function(req, res, next) {
  res.render('index', { title: 'React' });
});

var links = [];

router.get('/api/links', function(req, res, next) {
   res.json({ links: links });
});

router.post('/api/links', function(req, res, next) {
   var newLink = req.body;
   newLink.id = Date.now();
   links.push(newLink);
   res.json(newLink);
});

router.post('/api/deletelink', function(req, res, next) {

 links.forEach(function(link, i) {
    if(link.id == req.body.id) links.splice(i,1);
  });
  res.json({links: links});
});

router.post('/api/savebookmarkinfo', function(req, res, next) {
  var IP = req.connection.remoteAddress;
  var title = req.body.title;
  res.json({ title: title, IP: IP});
});

module.exports = router;






