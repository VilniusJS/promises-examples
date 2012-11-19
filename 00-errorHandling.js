function trolinkGapsi(onTroll) {
	onTroll("Eina į prokuratūrą");
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