var express = require('express')
            , http = require('http')
            , gm = require('gm')
            , app = express()
            , imageMagick = gm.subClass({ imageMagick: true });

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.logger('dev'));
  app.use(express.favicon());
  app.use(express.bodyParser());
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/:width([0-9]+)x:height([0-9]+)', function(req,res,next) {
  var height, width, _ref, text, bg, fg, fs;

  _ref = [parseInt(req.params.width)
       , parseInt(req.params.height)]
       , width = _ref[0]
       , height = _ref[1]
       , text = ('text' in req.query) ? req.query.txt : (width + 'x' + height)
       , bg = ('bg' in req.query) ? req.query.bg : '#aaa'
       , fg = ('fg' in req.query) ? req.query.fg : '#fff'
       , fs = ('fs' in req.query) ? req.query.fs : 40;

  imageMagick(width, height, bg)
  .fontSize(fs)
  .fill(fg)
  .font('SourceCodePro-Light.ttf')
  .drawText(0, 0, text, 'center')
  .stream('png', function(err, stdout) {
    if (err) {
      console.log(err);
      process.exit();
    }
    stdout.pipe(res);
  });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
