//https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch3.md

function add(getX, getY, cb) {
	var x, y;
	getX(function (xVal) {
		x = xVal;
		// both are ready?
		if (y != undefined) {
			cb(x + y); // send along sum
		}
	});
	getY(function (yVal) {
		y = yVal;

		// both are ready?
		if (x != undefined) {
			cb(x + y); // send along sum
		}
	});
}
function fetchX(cb) {
	cb(4);
}

function fetchY(cb) {
	cb(2);
}

function sum(sumVal) {
	console.log(sumVal);
}

// `fetchX()` and `fetchY()` are sync or async functions
add(fetchX, fetchY, function (sum) {
	console.log(sum); // that was easy, huh?
});
