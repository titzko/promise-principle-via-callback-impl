//https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch3.md

function add(getX, getY, cb) {
	var x, y;
	getX(function (xVal) {
		console.log("xval" + xVal);
		x = xVal;
		// both are ready?
		if (y != undefined) {
			cb(x + y); // send along sum
		}
	});
	getY(function (yVal) {
		y = yVal;
		console.log("yval" + yVal);

		// both are ready?
		if (x != undefined) {
			cb(x + y); // send along sum
		}
	});
}
function fetchX(cb) {
	console.log("hi");
	cb(4);
	console.log("ho");
}

function fetchY(cb) {
	cb(2);
}

function sum(sumVal) {
	console.log(sumVal);
}

// `fetchX()` and `fetchY()` are sync or async functions
add(fetchX, fetchY, sum);

//callbacks suck
