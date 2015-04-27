function fibonacci() {
    var prev1 = 0;
    var prev2 = 1;
    var current;
    return function() {
        current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
        return current;
    };
}

var fib = fibonacci();
var sum = 0;
for(var i = fib(); i < 4000000; i = fib()) if(i % 2 === 0) sum += i;
console.log(sum);
