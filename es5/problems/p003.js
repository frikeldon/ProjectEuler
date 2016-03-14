var current = 600851475143;
var factor = 3;

while(factor < current) {
	while(current % factor === 0) current /= factor;
	factor += 2;
}

console.log(factor);