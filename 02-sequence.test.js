var buster = require("buster");
var pazadai = require("./pazadai");
var pakelkAlga = require("./02-sequence");

buster.testCase("Kaip pakelsim minimalią algą?", {

	"Kai rinkimuose klaida - algos kelti negalim": function(done)
	{
		this.stub(pazadai, "rinkimai").yields(new Error("Rinkimų klaida"));
		var koalicijaStub = this.stub(pazadai, "koalicija");

		pakelkAlga(function(e, alga){
			expect(e.toString()).toEqual("Error: Rinkimų klaida");
			expect(alga).not.toBeDefined();
			expect(koalicijaStub).not.toHaveBeenCalled();
			done();
		});
	},

	"Kai gaunam tik 5 mandatus - algos kelti negalim": function(done)
	{
		this.stub(pazadai, "rinkimai").yields(null, 3);
		var koalicijaStub = this.stub(pazadai, "koalicija");
		pakelkAlga(function(e, alga){
			expect(e.toString()).toEqual("Error: Negalim formuot koalicijos!");
			expect(alga).not.toBeDefined();
			expect(koalicijaStub).not.toHaveBeenCalled();
			done();
		});
	},

	"Kai formuojant koaliciją įvyksta klaida - algos kelti negalim": function(done)
	{
		this.stub(pazadai, "rinkimai").yields(null, 10);
		this.stub(pazadai, "koalicija").withArgs(10).yields(new Error("Koalicijos klaida"));
		pakelkAlga(function(e, alga){
			expect(e.toString()).toEqual("Error: Koalicijos klaida");
			expect(alga).not.toBeDefined();
			done();
		});
	},

	"Kai koalicija ne su socdemais - algos kelti negalim": function(done)
	{
		this.stub(pazadai, "rinkimai").yields(null, 10);
		this.stub(pazadai, "koalicija").withArgs(10).yields(null, false);
		pakelkAlga(function(e, alga){
			expect(e.toString()).toEqual("Error: Partneriai nesutinka");
			expect(alga).not.toBeDefined();
			done();
		});
	},

	"Kai koalicija su socdemais - alga kyla iki 1509": function(done)
	{
		this.stub(pazadai, "rinkimai").yields(null, 10);
		this.stub(pazadai, "koalicija").withArgs(10).yields(null, true);
		pakelkAlga(function(e, alga){
			expect(e).toBeNull();
			expect(alga).toEqual(1509);
			done();
		});
	}

});