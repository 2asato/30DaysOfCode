function processData(input) {
  let even = [];
  let odd = [];
  let evenIndexed;
  let oddIndexed;
  for (let i = 0; i < input.length; i+=2) {
    even.push(input.charAt(i));
  }
  for (let i = 1; i < input.length; i+=2) {
    odd.push(input.charAt(i));
  }
  evenIndexed = even.join('');
  oddIndexed = odd.join('');
  console.log(evenIndexed + '  ' + oddIndexed);
}
processData('hacker');
