var Q = require("q");
var trolinkGapsi = function()
{
	return Q.resolve("Eina į prokuratūrą");
};

trolinkGapsi()
	.then(function onTrollCompleted(kaDaroGapsys){
		if (kaDaroGapsys == "Eina į prokuratūrą")
			throw new Error("Skandalas žiniasklaidoje");
	})
	.fail(function onTrollFailed(e){
		console.log("Viešieji ryšiai suvaldyti", e);
	})
	.done();
