var pg = require('pg');


var conSettings = "tcp://admin:xxx@localhost/bookingdb";
var client = new pg.Client(conSettings);
client.connect();


//client.query("SELECT name from booking_country", function(err, result) {
//   console.log("Row count: %d",result.rows.length);
//    pg.end();
//  });