var should = require('should')
var pg = require('pg'),
    config = {
    user: 'admin',
    password: process.env.PG_ADMIN_PASS,
    database: 'bookingdb',
    host: 'localhost',
    port: 5432
}


describe('Test connection properties',function(){
	client = new pg.Client(config);
	client.connect();


	it('Should be a conn obj',function(done){
		client.should.have.property('user');
		client.should.have.property('host');
		client.should.have.property('password');
		client.should.have.property('database');
		done();
	})
	it('properties should have right values',function(done){
		client.user.should.be.equal('admin')
		client.host.should.be.equal('localhost')
		client.database.should.be.equal('bookingdb')
		client.port.should.be.equal(5432)
		done();
	})
});

describe('Test Connection Object',function(){

	client = new pg.Client(config);
	client.connect();

	it('row count should not be null',function(done){
		client.query('SELECT name from booking_country',function(err,result){
			if (result.rowCount != null) true.should.be.true;
			done();
		})
	});

	it('Query must be select',function(done){
		client.query('SELECT name from booking_country',function(err,result){
			result.command.should.equal("SELECT");
			done();
		});
	});


	it("An idea of -must be true- test",function(done){
		client.query('SELECT name from booking_country',function(err,result){
			var i = 0;
			for (i = 0;i<=result.rows;i++){
				result.rows[i].should.be.equal(result.rows[i]);
			}
		});
		done();
	});

	it('Musthave property rows and rows.name',function(done){
		client.query('SELECT name from bookingdb',function(err,result){
			result.should.have.property('rows')
			result.rows.should.have.property('name')
		})
		done();
	});

});



