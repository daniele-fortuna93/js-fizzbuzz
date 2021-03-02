// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz

// 1. Stampare numeri da 1 a 100
for (var i = 1; i <= 100; i++) {
  if  ( i % 15 == 0 ) {
    //  2. Controllare se è multiplo di 15
    console.log("FizzBuzz");
  } else if ( i % 3 == 0 ) {
    // 3. Controllare se è multiplo di 3
    console.log("Fizz");
  } else if ( i % 5 == 0) {
    // 4. Controllare se è multiplo di 5
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
