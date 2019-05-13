// PROBLEM 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// Solution
sumMultiplesOf3And5 = function() {
	var result = 0
	var max = 1000

	for (var i = 1; i < max; i++) {
		if (i%3 == 0 || i%5 == 0) {
			result += i
		}
	}

	return result
}
// Alternative
sumMultiplesBelow1000() = function(){
  let sum = 0;
  let num = 1000;

  while (num--) {
    if (num % 3 === 0 || num % 5 === 0) {
      sum += num;
    }
  }
  console.log(sum);
  return sum;
}

sumMultiplesBelow1000();
