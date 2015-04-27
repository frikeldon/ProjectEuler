var num1 = 0;
var num2 = 0;

for(var i = 1; i <= 100; i++) {
	num1 += Math.pow(i, 2);
	num2 += i;
}
num2 = Math.pow(num2, 2);

console.log(num2 - num1);
