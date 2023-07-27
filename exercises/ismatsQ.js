function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function calculate() {
  let x = 2;
  let y = 3;

  let sum = add(x, y);
  let product = multiply(x, y);

  return sum + product;
}

calculate();

On lines 1-3 we declare a function, add, which takes two parameters `a` and `b`, 
expecting numeric values.The function returns a new number, the sum of the two 
parameters. 

Aside: add(a, b) would concatenate two strings and return a new string if a string
were passed in for either `a`, `b`, or both.b

On lines 5-7 we declare a function, multiply, which takes two parameters `a` 
and `b`, expecting numeric values. The function returns a new number, the 
product of the two parameters.

Aside: multiply(a, b) would attempt implicit coercion of a string passed in as
an argument for either `a` or `b`, and if coercion failed, return `NaN`.

On lines 9-17 we declare a function, calculate with no parameters.
On line 10 calculate declares and initializes a local variable `x` and assign it 
the number `2`. 
On line 11 calculate declares and initializes a local variable `y` and assigns it
to th number `3`.

On line 13 calculate declares and initializes the local variable `sum` and assigns
it to the return value of the invocation of `add(x, y)`, or `5`.

On line 14 calculate declares and initializes the local variable `product` and 
assigns it to the return value of the invocation of `multiply(x, y)` or `6`.

on line 16 calculate returns the sum of `sum` and `product`, or `11`.

On line 19 the program invokes the calculate method which returns the number `11`.
This number is not output and this return value is not used.


