var algosPazadas = require('./03-sequenceWithPromises')();

algosPazadas.then(function(alga){
	if (alga >= 1509) {
		console.log("Darbuotojas: myliu VU!");
	}
});
algosPazadas.then(function(alga){
	if (alga > 850) {
		console.warn("Darbdavys: mažinsiu etatus!");
	}
});
