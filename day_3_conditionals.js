// If N is odd, print Weird
// If N is even and in the inclusive range of 2 to 5, print Not Weird
// If N is even and in the inclusive range of 6 to 20, print Weird
// If N is even and greater than 20, print Not Weird

function main(N) {
    // var N = parseInt(readLine());
    if (N % 2 != 0 || (N % 2 == 0 && 6 <= N && N <= 20)) {
        console.log('Weird')
    } else {
      console.log('Not Weird');
    }
}
main(3);
