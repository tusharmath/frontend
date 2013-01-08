var assert = require('assert')
   ,routes = require('../routes/wwstay')
   ,should = require('should')


var request = {};
var response = {
    viewName: ""
    , data : {}
    , render: function(view, viewData) {
        this.viewName = view;
        this.data = viewData;
    }
};
describe("Default Route", function(){
    it("should provide the a title and the index view name", function(done){
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
})