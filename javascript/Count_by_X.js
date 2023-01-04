/*
 DESCRIPTION:
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/


///////////////////////////////////////////////////////////////////////////////////////
/*THOUGHT PROCESS
 *
In the first solution, we use a for loop to iterate n times. On each iteration, we calculate the multiple
of x that we want to add to the result array and then push it to the array using the push method.

Here is a breakdown of the steps the function takes:

* Declare an empty array called result which will be used to store the multiples of x.
* Initialize a loop variable i to 1.
* Start a for loop that will iterate n times.
* On each iteration of the loop, calculate x * i and push the result to the result array using the push method.
* Increment i by 1 at the end of each iteration.
* Return the result array after the loop has completed.
*/


const = countBy (x, n) => {
	let z []

	for (let i = 1; i <= n; i++){
		z.push(x * i)
	}

	return z
}
