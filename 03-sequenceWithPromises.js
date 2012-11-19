var Q = require("q");
var pazadai = require("./pazadai");

var tinkamaKoalicija = function()
{
	return pazadai.rinkimai()

		.then(function(kiekIsrinktu){

			if (kiekIsrinktu < 5) throw new Error("Negalim formuot koalicijos!");
			return kiekIsrinktu;

		})

		.then(pazadai.koalicija)

		.then(function(arSuSocDemais){
			if (!arSuSocDemais) throw new Error("Partneriai nesutinka");
		});
};

module.exports = function()
{

	return tinkamaKoalicija().then(function(){ return 1509; });

};