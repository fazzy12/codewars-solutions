/*Instructions

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
*/

/*
This function first checks if the input number is greater than 0. If it is, then it multiplies the number by-1 
to make it negative. If the number is not greater than 0, then it is already negative or 0, so the function simply returns it as is.

For example, consider the number 5. If we multiply 5 by -1, we get -5. Similarly, if we have the number
-5 and multiply it by -1, we get 5. Thus, multiplying a number by -1 will make it negative if 
it is not already negative, and will leave it negative if it is already negative.

With this in mind, we can implement the makeNegative function as follows:

*/

const makeNegetive = (num) => {
     if (num > 0){

	num * -1
     }else{

	return num
     }
}
