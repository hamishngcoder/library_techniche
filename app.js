var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var ObjectID = require('mongodb').ObjectID;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(__dirname + 'assets/'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/login.html');
});

app.get('/booklist', function (req, res) {
  res.sendFile(__dirname + '/views/booklist.html');
});
app.get('/userList', function (req, res) {
  res.sendFile(__dirname + '/views/UserList.html');
});

MongoClient.connect('mongodb://localhost:/Library', function(err, database) {
	if(err) throw err;
	db = database;

	app.get('/index', function(req, res) {
		res.sendFile(__dirname + '/views/index.html');
	});

	app.get('/getbooks', function(req, res) {
		db.collection("Books").find().toArray(function(err, books) {
			if(err) throw err;
			res.send(books);
		});
		
	});

	app.get('/getUsers', function(req, res) {
		db.collection("User_Details").find().toArray(function(err, User_Details ) {
			if(err) throw err;
			res.send(User_Details);
		});
		
	});

	app.post('/booklist', function(req, res) {
		
		db.collection("Books").insert({'author': req.body.author1,'name':req.body.name1,'availability':req.body.isAvail1}); 
		if(err) throw err;
		else
		{
			//res.send("Database Updated");
			res.redirect('/booklist');
		}
		
	});

	app.post('/assignBookToUser', function(req, res) { 
		
		db.collection("User_Details").insert({'username':req.body.Username1,'name':req.body.name1,'email':req.body.email1,'contact':req.body.contact,'Unique_Id':req.body.Unique_Id}, function(err, results) {
			console.log(results);
			if(err) { 
				throw err;
			}
			else {
				res.redirect('/booklist');
			}
		}); 
	});


	app.post('/login', function(req, res) {

		db.collection("User").find({'username': req.body.username, 'password': req.body.password}).toArray(function(err, user) {
			if(err) throw err;
			if(user.length === 0) {
        res.send('no such user found');
      }
      else {
        res.redirect('/index');
      }
		});
	});

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });

	// app.post('/data/toggle', function(req, res) {
  //
	// 	db.collection("TODOS").find({'_id': new ObjectID(req.body.id)}, function(err, record) {
  //
	// 		console.log(record);
	// 	});
  //
	// });

});
