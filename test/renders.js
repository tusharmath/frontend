var assert = require('assert')
   ,routes = require('../routes/wwstay')
   ,should = require('should')


describe("Default Routes Rendering", function(){
    it("should provide a title and the index Home name", function(done){
        routes.home({}, {
            render: function (viewName) {
                viewName.should.equal("home")
                done()
            }
        })
    })
    it("should provide the a title and the index view name", function(done){
        routes.about({}, {
            render: function (viewName) {
                viewName.should.equal("about")
                done()
            }
        })
    })
    it("should provide the a title and the leisure view name", function(done){
        routes.leisure({}, {
            render: function (viewName) {
                viewName.should.equal("leisure")
                done()
            }
        })
    })
    it("should provide the a title and the business view name", function(done){
        routes.business({}, {
            render: function (viewName) {
                viewName.should.equal("business")
                done()
            }
        })
    })
    it("should provide the a title and the business view name", function(done){
        routes.terms({}, {
            render: function (viewName) {
                viewName.should.equal("terms")
                done()
            }
        })
    })
})