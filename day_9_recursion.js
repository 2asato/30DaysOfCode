function factorial(n) {
    // Complete this function
    let result = 1;
    for (let i = n; i > 0; i--) {
      // starts at n and goes down till 1
      // takes each number and multiples it by the next
      result *= i;
    }
    return result;
}
console.log(factorial(3));
