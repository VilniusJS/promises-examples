var pazadai = require("./pazadai");

module.exports = function(callback)
{
	pazadai.rinkimai(function(e, kiekMandatu){

		if (e) {
			callback(e);
			return;
		}

		if (kiekMandatu < 5) {
			callback(new Error("Negalim formuot koalicijos!"));
			return;
		}

		pazadai.koalicija(kiekMandatu, function(e, arSuSocDemais){

			if (e) {
				callback(e);
				return;
			}

			if (!arSuSocDemais) {
				callback(new Error("Partneriai nesutinka"));
				return;
			}

			callback(null, 1509);

		});

	});
};