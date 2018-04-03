// Given an integer,n, print its first 10 multiples. Each multiple n * i (where ) should be printed on a new line in the form: n x i = result.

function main(n) {
    // var n = parseInt(readLine());
    for (let i = 1; i <= 10; i++) {
      console.log(n + ' * ' + i + ' = ' + n * i);
    }
}
main(5)
