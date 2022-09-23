let number = 7;
let count = 0;

for (let i = 0; i <= number; i++) {
  if (number % i == 0) {
    count++;
  }
}
if (count == 2) {
  console.log(number, "is a prime");
}
else {
  console.log(number, "is Not a prime");
}
