module.exports = function Route(app){
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
	 res.render("index");
	});
	// post route for adding a data from a survey
	app.post('/details', function(req, res) {
		const submittedInfo = {
			name: req.body.name,
			email: req.body.email,
			phone: req.body.phone
    };

	 	res.render("details", { userData: submittedInfo });
    });
    
    app.get('/add', function(req,res){
        res.render("newcontact");
	});
	
};