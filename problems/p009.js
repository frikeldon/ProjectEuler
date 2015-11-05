console.log((function() {
    var a, b, c;

    for(a = 1; a < 999; a++) {
    	for(b = a + 1; b < 999; b++) {
    		c = 1000 - a - b;
    		if(c < b) {
    			break;
    		}
    		if(Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
    			return a * b * c;
    		}
    	}
    }

})());