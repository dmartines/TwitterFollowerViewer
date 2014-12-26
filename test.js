var x = 0

var b = 3

function addOne(x) {
	x++;
	x += b;
	console.log(x);
}

addOne();

console.log(x);