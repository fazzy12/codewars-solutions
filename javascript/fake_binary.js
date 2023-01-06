/*Instructions

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

/*
 * We need to create a function that takes a string of digits as input and returns a
 new string where any digit below 5 is replaced with '0' and any digit 5 and above is replaced with '1'.

 * To do this, we can split the input string into an array of characters using the split() function.

*  Then we can use the map() function to transform each character into a '0' or '1' depending on its value.

*  Finally, we can join the array back into a string using the join() function and return the result.
*/

function fakeBin(x){
   return x.split('').map(d => d < 5 ? '0' : '1').join('');

}



