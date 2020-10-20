// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
// Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".

// stampare i numeri da 1 a 100
for (var i = 1; i <= 100; i++) {
// stampare al posto dei numeri che sono sia multipli di 3 che di 5 la parola "FizzBuzz"
  if ( (i % 3 == 0) && (i % 5 == 0) ) {
    console.log("FizzBuzz");
  }
// stampare al posto dei multipli di 3 la parola "Fizz"
  else if (i % 3 == 0) {
  console.log('Fizz');
}
// stampare al posto dei multipli di 5 la parola "Buzz"
 else if (i % 5 == 0) {
  console.log('Buzz');
}
else {
  console.log(i);
}
}
