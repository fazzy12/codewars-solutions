/*Instructions

Complete the function that takes a non-negative integer n as input, and returns a 
list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/

//THOUGHT PROCESS

/* We need to create a function that takes a non-negative integer n as input and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).

*  To do this, we can use a for loop to iterate from 0 to n, and for each iteration we can calculate 2 to the power of i and add the result to an array.

*  After the loop completes, we can return the array as the result of the function.

*  To make the solution more concise, we can use the exponentiation operator (**) to calculate 2 to the power of i on each iteration.
*/
function powersOfTwo(n){
  const result = []

  for (let i = 0; i <= n; i++){
    result.push(2 ** i)
  }
    return result
