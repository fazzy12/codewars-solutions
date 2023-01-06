/*Instructions

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/



//THOUGHT PROCESS 
/*
 * Define a regular expression reg1 that will match only 4 or 6 digits.
 * Check if the given PIN string pin matches the regular expression reg1 using the match method.
 * If pin matches reg1, return true. Otherwise, return false.
 *
 *
This function is used to validate that a given PIN string is a 4- or 6-digit string. 
It does this by using a regular expression to match only 4 or 6 digits. If the given PIN string 
matches the regular expression, it returns true to indicate that the PIN is valid. Otherwise, it returns false to indicate that the PIN is not valid.
*/


function validatePin(pin){
	const reg = /^(\d{4}|\d{6})$/
	
	if (pin.match(reg){
		return true
	}else{
		return false
	}
}
