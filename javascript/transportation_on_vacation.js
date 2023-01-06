/*Instructions

After a hard quarter in the office you decide to get some rest on a vacation. 
So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. 
The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. 
Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).
*/

//THOUGHT PROCESS

/*
 * We need to create a function that takes a number of days d as input and returns the total cost of the rental car.

 * The cost of the rental car is $40 per day.

 * If the number of days d is greater than or equal to 7, we need to apply a discount of $50 to the total cost.

 * If the number of days d is greater than or equal to 3 but less than 7, we need to apply a discount of $20 to the total cost.

 * If the number of days d is less than 3, we don't need to apply any discount to the total cost.

 * Based on these requirements, we can use an if statement to check the value of d and return the appropriate value.
*/

function rentalCarCost(d) {
  if (d >= 7) {
    return d * 40 - 50;
  } else if (d >= 3) {
    return d * 40 - 20;
  } else {
    return d * 40;
  }
}
