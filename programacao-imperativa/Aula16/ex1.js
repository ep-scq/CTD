let fizzbuzz = (a, b) => {
    for (let i = 1; i <= 100; i++) {
        if (a % i == 0 && b % i == 0) {
            console.log("O número " + i + " é FizzBuzz");
        } else if (b % i == 0) {
            console.log("O número " + i + " é Buzz");
        } else if (a % i == 0) {
            console.log( "O número " + i + " é Fizz");
        } else {
            console.log(i);
        }
    }
}

fizzbuzz(25, 88);