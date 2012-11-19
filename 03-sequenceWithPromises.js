var Q = require("q");
var pazadai = require("./pazadai");

module.exports = function()
{

	var promise = pazadai.rinkimai()

		.then(function(kiekIsrinktu){

			if (kiekIsrinktu < 5) throw new Error("Negalim formuot koalicijos!");
			return kiekIsrinktu;

		})

		.then(pazadai.koalicija)

		.then(function(arSuSocDemais){
			if (!arSuSocDemais) throw new Error("Partneriai nesutinka");

			return 1509;
		});

	return promise;

};