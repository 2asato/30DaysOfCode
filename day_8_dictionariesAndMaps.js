function processData(input) {
  //Enter your code here
  input = input.split('\n');
  // splits input into array
  let phoneBook = [];

  for (i = 1; i <= parseInt(input[0]); i++) {
    let contactArray = input[i].split(' ');
    phoneBook[contactArray[0]] = contactArray[1];
  }

  for (i = (parseInt(input[0]) + 1); i < input.length; i++) {
    if (phoneBook[input[i]]) {
      console.log(input[i] + '=' + phoneBook[input[i]]);
    } else {
      console.log('Not found');
    }
  }
}
processData('aaronsato')
