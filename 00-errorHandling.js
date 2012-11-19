function trolinkGapsi(onTroll) {
	onTroll("Eina į prokuratūrą");
}

trolinkGapsi(function onTrollCompleted(kaDaroGapsys){
	if (kaDaroGapsys == "Eina į prokuratūrą")
		throw new Error("Skandalas žiniasklaidoje");
});
