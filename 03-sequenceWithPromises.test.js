var buster = require("buster");
var Q = require("q");
var pazadai = require("./pazadai");
var pakelkAlga = require("./03-sequenceWithPromises");

buster.testCase("Kaip pakelsim minimalią algą su pažadais?", {

	"Kai rinkimuose klaida - algos kelti negalim": function(done)
	{
		this.stub(pazadai, "rinkimai").returns(Q.reject(new Error("Rinkimų klaida")));
		var koalicijaStub = this.stub(pazadai, "koalicija");

		pakelkAlga()
			.then(this.mock().never())
			.fail(function(e){
				expect(e.toString()).toEqual("Error: Rinkimų klaida");
				expect(koalicijaStub).not.toHaveBeenCalled();
			})
			.fin(done).done();
	},

	"Kai gaunam tik 5 mandatus - algos kelti negalim": function(done)
	{
		this.stub(pazadai, "rinkimai").returns(Q.resolve(3));
		var koalicijaStub = this.stub(pazadai, "koalicija");
		pakelkAlga()
			.then(this.mock().never())
			.fail(function(e){
				expect(e.toString()).toEqual("Error: Negalim formuot koalicijos!");
				expect(koalicijaStub).not.toHaveBeenCalled();
			})
			.fin(done).done();
	},

	"Kai formuojant koaliciją įvyksta klaida - algos kelti negalim": function(done)
	{
		this.stub(pazadai, "rinkimai").returns(Q.resolve(10));
		this.stub(pazadai, "koalicija").withArgs(10).returns(Q.reject(new Error("Koalicijos klaida")));
		pakelkAlga()
			.then(this.mock().never())
			.fail(function(e){
				expect(e.toString()).toEqual("Error: Koalicijos klaida");
			})
			.fin(done).done();
	},

	"Kai koalicija ne su socdemais - algos kelti negalim": function(done)
	{
		this.stub(pazadai, "rinkimai").returns(Q.resolve(10));
		this.stub(pazadai, "koalicija").withArgs(10).returns(Q.resolve(false));
		pakelkAlga()
			.then(this.mock().never())
			.fail(function(e){
				expect(e.toString()).toEqual("Error: Partneriai nesutinka");
			})
			.fin(done).done();
	},

	"Kai koalicija su socdemais - alga kyla iki 1509": function(done)
	{
		this.stub(pazadai, "rinkimai").returns(Q.resolve(10));
		this.stub(pazadai, "koalicija").withArgs(10).returns(Q.resolve(true));
		pakelkAlga()
			.then(function(alga){
				expect(alga).toEqual(1509);
			})
			.fail(this.mock().never())
			.fin(done).done();
	}

});