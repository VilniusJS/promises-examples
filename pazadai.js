var Q = require("q");

exports.rinkimai = function(cb)
{
	return Q.resolve(29).nodeify(cb);
};

exports.koalicija = function(kiekMandatu, cb)
{
	return Q.resolve(kiekMandatu > 15).nodeify(cb);
};

exports.pakelkMinimaliaAlga = function(){ throw new Error("Neaišku kaip"); };
exports.ginirokIkanomika = function(){ throw new Error("Neaišku kaip"); };
exports.dokDarbasVisiems = function(){ throw new Error("Neaišku kaip"); };
