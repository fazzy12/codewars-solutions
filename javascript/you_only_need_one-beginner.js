/*
* Instructions

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/


/*
 Here is a thought process for writing a function that takes an array and a value and returns true if the array contains the value, false if not:

* Define a function called check() that takes in two arguments, a and x.
* Check if the a array includes the value of x using the includes() method.
* Return true if x is found in the a array, false if not.
*
Here is the implementation of the function:

*/

function check(a, x) {

  for (let i = 0; i <= a.length; i++){
    if (a.includes(x)){
      return true
    }else{
      return false
    }
  }
}

