// Using the library with standard node callbacks is trivial
var bePazadu = require("./02-sequence");
bePazadu(function(e, alga){
	if (e) {
		console.error("(Be pažado) Nepavyko pakelti algos", e);
	} else {
		console.log("(Be pažado) Nauja alga:",alga);
	}
});

// Using the library with promises is just as trivial
var suPazadais = require("./03-sequenceWithPromises");
suPazadais()
	.then(function(alga){
		console.log("(Su pažadu) Nauja alga:",alga);
	})
	.fail(function(e){
		console.error("(Su pažadu) Nepavyko pakelti algos", e);
	}).done();

// When you do have a library which doesn't use promises - ncall/ninvoke it!
var Q = require("q");
Q.ncall(bePazadu)
	.then(function(alga){
		console.log("(Su padažu) Nauja alga:",alga);
	})
	.fail(function(e){
		console.error("(Su padažu) Nepavyko pakelti algos", e);
	}).done();

// On the other hand - if you have a library which does use promises and you don't like it - nodeify it!
suPazadais().nodeify(function(e, alga){
	if (e) {
		console.error("(Be padažo) Nepavyko pakelti algos", e);
	} else {
		console.log("(Be padažo) Nauja alga:",alga);
	}
});