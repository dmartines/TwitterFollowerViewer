var express = require('express'),
    app = express(),
    Twit = require('twit');

//Twitter
var twit = new Twit ({
	consumer_key: 'Xbzri55aYSbMZrif0b0OFEFJH',
	consumer_secret: 'U92Zgvlfc850ksLXrkjiuB5Sv8dx9BtoHGV2dNvNXbhoT0WbbZ',
	access_token: '27511311-pdYKdb77rK3xf4R6ZQIb2lEhqOhappkR4b95WMSr3',
	access_token_secret: 'NBF0IOQ9cdcC6P1hWCUUYO6Elmuh610PIXoMUSnkIm17S'
});

//Express 4
app.use(express.static(__dirname + "/"));
//app.use(express.static(path.join(__dirname, '/')));
app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);


app.get('/', function(req, res) {
    res.render('index.html');
});

app.get('/tf', function(req, res) {
    res.render('tf.html');
});

app.get('/about', function(req, res) {
    res.render('about.html');
});

app.get('/followers/:id', function(req, res) {
    var screenName = req.params.id;
    if (screenName == undefined) {
    	return res.json('{"Invalid screen name"}');
    }
    
    users = [];
	next_cursor = -1;
	twit.get('followers/list', { screen_name: screenName, count:'200', cursor:next_cursor },  function (err, data, response) {
		if (data != undefined) {
			for (i in data.users) {
				users.push(data.users[i]);
			}
			return res.json(users);
		} else {
			return res.json(err);
		}
	})
});

app.get('/user_lookup/:id', function(req, res) {
    var screenName = req.params.id;
    if (screenName == undefined) {
    	return res.json('{"Invalid screen name"}');
    }
    
    twit.get('users/lookup', { screen_name: screenName },  function (err, data, response) {
		if (data != undefined) {
			return res.json(data[0]);
		} else {
			return res.json(err);
		}
	})
});

app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});