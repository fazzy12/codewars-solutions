/*
 *INSTRUCTIONS
 * Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
In this case, all triangles must have surface greater than 0 to be accepted).
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Here is an implementation of a function that returns whether it is possible to build a triangle with the given side lengths:


/*This function first checks if the triangle inequality theorem is satisfied, and then checks if all sides are positive.
If both of these conditions are met, the function returns True, indicating that it is possible to build a triangle with the given side lengths. Otherwise, it returns False.
*/


const isTriangle = (a, b, c) => {
  // Check if the triangle inequality theorem is satisfied
  if (a + b > c && a + c > b && b + c > a) {
    // Check if all sides are positive
    if (a > 0 && b > 0 && c > 0) {
      return true;
    }
  }
  return false;
};




//Sample Tests

console.log(isTriangle(3, 4, 5)); //true
console.log(isTriangle(3, 4, 10));  // false
console.log(isTriangle(0, 4, 5));  // false
console.log(isTriangle(-3, 4, 5));  // false

