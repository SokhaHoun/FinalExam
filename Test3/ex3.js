'use strict';

try {
  // Replace 'Houn Sokha' with your full name
  console.log('Student Name: Houn Sokha'); 
  let x = 10; // Declare x with let
} catch (error) {
  console.error(error.message); // Output: "x is not defined"
}

function demo() { 
  try {
    let y = 20; // Declare y with let
  } catch (error) {
    console.error(error.message); // Output: "y is not defined"
  }
}

demo();

try {
  eval("var z = 50; delete z;"); // SyntaxError: Cannot delete variable declared with var
} catch (error) {
  console.error(error.message); // Output: "Cannot delete property 'z' of #<Object>"
}
