var buster = require("buster");
var pazadai = require("./pazadai");

buster.testCase("Pažadų tikrinimas", {

	"Rinkimuose DP gauna 29 mandatus": {
		"callback": function(done)
		{
			pazadai.rinkimai(function(e, mandatai){
				expect(e).toBeNull();
				expect(mandatai).toEqual(29);
				done();
			});
		},

		"promise": function(done)
		{
			pazadai.rinkimai().then(function(mandatai){
				expect(mandatai).toEqual(29);
			}).fin(done).done();
		}
	},

	"Kai išrinkta mažiau nei 15, koalicija ne su LSDP": {

		"callback":function(done)
		{
			pazadai.koalicija(10, function(e, arSuSocDemais) {
				expect(arSuSocDemais).toBeFalse();
				done();
			})
		},

		"promise":function(done)
		{
			pazadai.koalicija(10).then(function(arSuSocDemais){
				expect(arSuSocDemais).toBeFalse();
			}).fin(done).done();
		}

	},

	"Kai išrinkta daugiau nei 15, koalicija su LSDP": {

		"callback":function(done)
		{
			pazadai.koalicija(20, function(e, arSuSocDemais) {
				expect(arSuSocDemais).toBeTrue();
				done();
			})
		},

		"promise":function(done)
		{
			pazadai.koalicija(20).then(function(arSuSocDemais){
				expect(arSuSocDemais).toBeTrue();
			}).fin(done).done();
		}

	}

});