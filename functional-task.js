/*
Task 1 : Write a JavaScript function that reverse a number.
Example : 
x = 32243
Output : 34223
*/


function resverse_number(number){
    number = number + "";
    return number.split("").reverse().join("")
}

console.log(Number(resverse_number(32243)));


//Explanation:

/*Convert a number to a string :
Assume n = 1000. Code : -> n = n + "";Note : There are different ways to convert number to string :Strin literal -> str = "" + num + "";The split() method is used to split a String object into an array of strings by separating the string into substrings. Code : console.log('1000'.split(""));
Output : ["1", "0", "0", "0"] .The reverse() method is used to reverse an array in place. The first array element becomes the last and the last becomes the first.
Code : console.log(["1", "0", "0", "0"].reverse());
Output : ["0", "0", "0", "1"].The join() method is used to join all elements of an array into a string.
Code : console.log(["1", "0", "0", "0"].reverse().join(""));
The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.
Output : 1
*/


