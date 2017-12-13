module.exports = function Route(app){
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
		res.render("index", { 
			nameArray: req.session.names, 
			emailArray: req.session.emails, 
			phoneArray: req.session.phones 
		});
		console.log(req.session.names);
	});

	//initializing arrays to store post data into session
	var names = [];
	var emails = [];
	var phones = [];

	// post route for adding data from new contact form
	app.post('/details', function(req, res) {
		//session to store data
		if (!req.session.names){
			req.session.names = [];
		}
		if (!req.session.emails){
			req.session.emails = [];
		}
		if (!req.session.phones){
			req.session.phones = [];
		} 


		const submittedInfo = {
			name: req.body.name,
			email: req.body.email,
			phone: req.body.phone
		};


		//pushing post data into array
		req.session.names.push(req.body.name);
		req.session.emails.push(req.body.email);
		req.session.phones.push(req.body.phone);
		console.log(req.session.names);
		console.log(req.session.emails);
		console.log(req.session.phones);

	 	res.render("details", { userData: submittedInfo });
	});
    
    app.get('/add', function(req,res){
        res.render("newcontact");
	});
	
};