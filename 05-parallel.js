var pazadai = require("./pazadai");

module.exports = function(iSeima, iKalejima)
{

	var alga, augymas, nidarbas, kaipSekasi=0;

	var arJauRojusLietuvoje = function()
	{
		if (kaipSekasi < 3) return;

		if (alga >= 1509 && augymas >= 10 && nidarbas == 0) {
			iSeima();
		} else {
			iKalejima();
		}
	};

	pazadai.pakelkMinimaliaAlga(function(v){
		alga=v;
		kaipSekasi++;
		arJauRojusLietuvoje();
	});

	pazadai.ginirokIkanomika(function(v){
		augymas=v;
		kaipSekasi++;
		arJauRojusLietuvoje();
	});

	pazadai.dokDarbasVisiems(function(v){
		nidarbas=v;
		kaipSekasi++;
		arJauRojusLietuvoje();
	});

};