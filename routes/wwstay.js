var pg = require('pg'),
    config = {
      user: 'admin',
      password: process.env.PG_ADMIN_PASS,
      database: 'bookingdb',
      host: 'localhost',
      port: 5432
    },
    client = new pg.Client(config);

client.connect();	

exports.home = function(req, res){
  client.query("SELECT name from booking_country", function(err, result) {
    var country = [];	
    if(err){
  	  console.log("Database Error " + err);
      } else {
        for (var i = 0 ; i < result.rows.length; i++ ){
		  // console.log(result.rows[i].name);
		  country.push(result.rows[i].name)
	    }  	
       }
     res.render('home',{
  	   country:country
     }); 
    });
};

exports.deals = function(req, res){
  res.render('deals');
};
exports.terms = function(req, res){
  res.render('terms');
};
exports.privacy = function(req, res){
  res.render('privacy');
};
exports.team = function(req,res){
  res.render('team')
}
exports.leisure = function(req,res){
  res.render('leisure')
}
exports.business = function(req,res){
  res.render('business')
}
