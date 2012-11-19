var buster = require("buster");
var Q = require("q");
var pazadai = require("./pazadai");
var parallel = require("./06-parallelWithPromises");

buster.testCase("Vėl į Seimą ar į kalėjimą su pažadais?", {

	"Kai pakeliam algą, ikanomika generoja ir nulynis nidarbas - vėl į Seimą!": function(done)
	{
		this.stub(pazadai, "pakelkMinimaliaAlga").returns(Q.resolve(1509));
		this.stub(pazadai, "ginirokIkanomika").returns(Q.resolve(10));
		this.stub(pazadai, "dokDarbasVisiems").returns(Q.resolve(0));

		parallel(done, this.mock().never());
	},

	"Kai nepakeliam algos - į kalėjimą": function(done)
	{
		this.stub(pazadai, "pakelkMinimaliaAlga").returns(Q.resolve(850));
		this.stub(pazadai, "ginirokIkanomika").returns(Q.resolve(10));
		this.stub(pazadai, "dokDarbasVisiems").returns(Q.resolve(0));

		parallel(this.mock().never(), done);
	},

	"Kai ikanomika niginiroja - į kalėjimą": function(done)
	{
		this.stub(pazadai, "pakelkMinimaliaAlga").returns(Q.resolve(1509));
		this.stub(pazadai, "ginirokIkanomika").returns(Q.resolve(-10));
		this.stub(pazadai, "dokDarbasVisiems").returns(Q.resolve(0));

		parallel(this.mock().never(), done);
	},

	"Kai ira nidarbas - į kalėjimą": function(done)
	{
		this.stub(pazadai, "pakelkMinimaliaAlga").returns(Q.resolve(1509));
		this.stub(pazadai, "ginirokIkanomika").returns(Q.resolve(10));
		this.stub(pazadai, "dokDarbasVisiems").returns(Q.resolve(13));

		parallel(this.mock().never(), done);
	}

});