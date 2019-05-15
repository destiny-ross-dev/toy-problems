// Problem 3

//The prime factors of 13195 are 5, 7, 13 and 29.

//What is the largest prime factor of the number 600851475143?

const largestPrime = n => {
  let i = 2;
  while (i * i < n) {
    while (n % i === 0) {
      n /= i;
    }
    i++;
  }
  return n;
};

console.log(largestPrimeFactor(600851475143));
