function trolinkGapsi(onTroll) {
	setTimeout(function(){
		onTroll("Eina į prokuratūrą");
	}, 0);
}

try
{
	trolinkGapsi(function onTrollCompleted(kaDaroGapsys){

		// This error is impossible to catch - the only place that it can be handled is inside the
		// function that calls this directly - but that is undesirable (it should not be aware of errors
		// inside callbacks

		// In fact, the standard node pattern of cb(e, data) explicitly says:
		//      Callbacks should not throw errors

		// But errors do happen...

		if (kaDaroGapsys == "Eina į prokuratūrą")
			throw new Error("Skandalas žiniasklaidoje");
	});
} catch (e){
	console.log("Viešieji ryšiai suvaldyti", e);
}