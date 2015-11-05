function fitness(num) {
	for(var i = 20; i > 1; i--) {
		if(num % i !== 0) {
			return false;
		}
	}
	return true;
}

var answer = 20;
while(!fitness(answer)) {
	answer += 10;
}
console.log(answer);
