/*Instructions

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
*/

/*
To solve this problem, we need to come up with a way to make a number negative if it is not already negative. 
One way to do this is to multiply the number by -1. This has the effect of reversing the sign of the number.

For example, consider the number 5. If we multiply 5 by -1, we get -5. Similarly, if we have the number
-5 and multiply it by -1, we get 5. Thus, multiplying a number by -1 will make it negative if 
it is not already negative, and will leave it negative if it is already negative.

With this in mind, we can implement the makeNegative function as follows:

*/

const makeNegetive = () => num * -1
