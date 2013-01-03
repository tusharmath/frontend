var request = require('supertest')
  , assert  = require("assert");

request = request('http://localhost:3000')

describe('Test Page stats', function(){
  it('should return 404', function(done){
    request
       .get('/nonsensefakepage')
       .expect(404)
       .end(function(err,res){
          if (err) throw err;
          done();
       })
  })
  it('should return -200 OK- home Page', function(done){
    request
       .get('/')
       .expect(200)
       .end(function(err,res){
       		if (err) throw err;
       		done();
       })
  })
  it('should return -200 OK- business Page', function(done){
    request
       .get('/business')
       .expect(200)
       .end(function(err,res){
       		if (err) throw err;
       		done();
       })
  })
  it('should return -200 OK- leisure Page', function(done){
    request
       .get('/leisure')
       .expect(200)
       .end(function(err,res){
       		if (err) throw err;
       		done();
       })
  })/*
  it('should return 200 OK teams Page', function(done){
    request
       .get('/teams')
       .expect(200)
       .end(function(err,res){
       		if (err) throw err;
       		done();
       })
  })*/
  it('should return 200 OK about Page', function(done){
    request
       .get('/about')
       .expect(200)
       .end(function(err,res){
       		if (err) throw err;
       		done();
       })
  })
  it('should return 200 OK deals Page', function(done){
    request
       .get('/deals')
       .expect(200)
       .end(function(err,res){
       		if (err) throw err;
       		done();
       })
  })
  it('should return 200 OK careers Page', function(done){
    request
       .get('/careers')
       .expect(200)
       .end(function(err,res){
       		if (err) throw err;
       		done();
       })
  })
  it('should return 200 OK terms Page', function(done){
    request
       .get('/terms')
       .expect(200)
       .end(function(err,res){
          if (err) throw err;
            done();
       })
  })
});