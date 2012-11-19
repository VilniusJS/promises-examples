var buster = require("buster");
var pazadai = require("./pazadai");
var parallel = require("./05-parallel");

buster.testCase("Vėl į Seimą ar į kalėjimą?", {

	"Kai pakeliam algą, ikanomika generoja ir nulynis nidarbas - vėl į Seimą!": function(done)
	{
		this.stub(pazadai, "pakelkMinimaliaAlga").yields(1509);
		this.stub(pazadai, "ginirokIkanomika").yields(10);
		this.stub(pazadai, "dokDarbasVisiems").yields(0);

		parallel(done, this.mock().never());
	},

	"Kai nepakeliam algos - į kalėjimą": function(done)
	{
		this.stub(pazadai, "pakelkMinimaliaAlga").yields(850);
		this.stub(pazadai, "ginirokIkanomika").yields(10);
		this.stub(pazadai, "dokDarbasVisiems").yields(0);

		parallel(this.mock().never(), done);
	},

	"Kai ikanomika niginiroja - į kalėjimą": function(done)
	{
		this.stub(pazadai, "pakelkMinimaliaAlga").yields(1509);
		this.stub(pazadai, "ginirokIkanomika").yields(-10);
		this.stub(pazadai, "dokDarbasVisiems").yields(0);

		parallel(this.mock().never(), done);
	},

	"Kai ira nidarbas - į kalėjimą": function(done)
	{
		this.stub(pazadai, "pakelkMinimaliaAlga").yields(1509);
		this.stub(pazadai, "ginirokIkanomika").yields(10);
		this.stub(pazadai, "dokDarbasVisiems").yields(13);

		parallel(this.mock().never(), done);
	}

});