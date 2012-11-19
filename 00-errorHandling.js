function trolinkGapsi(onTroll) {
	setTimeout(function(){
		onTroll("Eina į prokuratūrą");
	}, 0);
}

try
{
	trolinkGapsi(function onTrollCompleted(kaDaroGapsys){
		if (kaDaroGapsys == "Eina į prokuratūrą")
			throw new Error("Skandalas žiniasklaidoje");
	});
} catch (e){
	console.log("Viešieji ryšiai suvaldyti", e);
}