var Q = require("q");
var trolinkGapsi = function()
{
	var g = Q.defer();

	// this setTimeout() to break the event loop is actually meaningless,
	// since promise handlers get called asynchronously anyways
	setTimeout(function(){
		g.resolve("Eina į prokuratūrą");
	}, 100);

	return g.promise;
};

trolinkGapsi()

	// it does not matter when the promise gets resolved - .then() will get called as soon as it does
	// onTrollCompleted() will also _always_ be called asynchronously, i.e. not in the same tick
	.then(function onTrollCompleted(kaDaroGapsys){
		if (kaDaroGapsys == "Eina į prokuratūrą")
			throw new Error("Skandalas žiniasklaidoje");
	})

	// whenever the promise handler throws an exception - it will _always_ be passed along to the failure
	// handler, if one exists
	.fail(function onTrollFailed(e){
		console.log("Viešieji ryšiai suvaldyti", e);
	})

	// IMPORTANT: do not forget to call .done() - otherwise unhandled errors will go undetected!
	.done();
