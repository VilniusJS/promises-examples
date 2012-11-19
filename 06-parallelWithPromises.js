var pazadai = require("./pazadai");
var Q = require("q");

module.exports = function(iSeima, iKalejima)
{

	Q.allResolved([pazadai.pakelkMinimaliaAlga(), pazadai.ginirokIkanomika(), pazadai.dokDarbasVisiems()])
		.spread(function(alga, augymas, nidarbas){
			if (alga >= 1509 && augymas >= 10 && nidarbas == 0) {
				iSeima();
			} else {
				iKalejima();
			}
		})
		.fail(iKalejima).done();

};