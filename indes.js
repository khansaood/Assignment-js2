//****Write a program that takes user input. Convert and show the input in capital letters.

// var userInput = prompt("Enter You Name");
// document.write(userInput.toUpperCase())






// ***Write a program that takes user input. Convert and show the input in title case .

// var Name = prompt("Enter you name");
// var space = Name.indexOf(" ")
// var firstName = Name.slice(0, space)
// var secondName = Name.slice(space + 1, )
// document.write("</br>")
// document.write(firstName[0].toUpperCase() + firstName.slice(1))
// document.write(" ")
// document.write(secondName[0].toUpperCase() + secondName.slice(1))







//***Write a program to take a user input about his favorite mobile phone model.Find and display the length of user input in your browser.

// var mobile = prompt("Enter your fav mobile Phone")
// document.write("length of the user input is " + mobile.length)





//****Write a program to display the last character of a user input.

// var lastchar = prompt("Enter your Name");
// var num = lastchar.length;
// document.write(lastchar.charAt(num - 1))








//*** Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.

// var Pa = "Pakistani";
// var na = Pa.indexOf("n")
// document.write(na)





//*** Write a program to take user input and store username in a variable.If the username contains any special symbol among(@., !), prompt the user to enter a valid username.

// var UserChar = prompt("enter userName ");
// var specialChar = UserChar;
// var sp;
// for (var i = 0; i <= specialChar.length - 1; i++) {
//     sp = specialChar[i];
//     if (sp >= "A" && sp <= "Z" || sp >= "a" && sp <= "z") {
//         document.write(sp);
//     } else {
//         alert("ERROR!!! enter correct name please")
//     }
// }




// You have a string“ The quick brown fox jumps over the lazy dog”.Write a program to count number of occurrences of word“ the” in given string.

// var words;
// var sentence = "The quick brown fox jumps over the lazy dog";
// var count = 0
// for (var i = 0; i < sentence.length; i++) {
//     if (sentence.charAt(i) === " ") {
//         count++
//     }
//     // document.write(words)
// }
// document.write(count + 1)







//Write a program to find the character at 3 rd index in the word “Pakistani” and display the result in your browser.

// var character = "pakistani";
// document.write(character.charAt(3));










//Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser".

// var place = "Hyderabad"
// var fulplace = place.replace("Hyder", "Islam ");
// document.write(place)
// document.write("</br>")
// document.write(fulplace)







//Write a program to replace all occurrences of “and” in the string with“ & ”and display the result in your browser.

// var sentence = "Ali and Sami are best friends.They play cricket and football together. ";
// var finalSentence = sentence.replace(/and/g, "&");
// document.write(finalSentence);






// 1. Write a program that takes a positive integer from user & display
// the following in your browser.
// a.number(example number: 3.45214)
// b.round off value of the number
// c.floor value of the number
// d.ceil value of the number

// var positiveValue = +prompt("enter any positive value ");
// document.write("value =", positiveValue, "</br>");
// document.write("round =" + Math.round(positiveValue) + " </br>");
// document.write("floor value =" + Math.floor(positiveValue) + "</br>");
// document.write("Ceil value" + Math.ceil(positiveValue) + "</br>");






//negative values 
// var positiveValue = +prompt("enter any negatice value ");
// document.write("value =", positiveValue, "</br>");
// document.write("round =" + Math.round(positiveValue) + " </br>");
// document.write("floor value =" + Math.floor(positiveValue) + "</br>");
// document.write("Ceil value" + Math.ceil(positiveValue) + "</br>");








//1. Write a program that simulates a dice using random() method of JS Math class.Display the value of dice in your browser.

// var a = Math.random() * 5
// var b = Math.round(a)
// if (b === 0) {
//     document.write("One")
// } else if (b === 1) {
//     document.write("two")
// } else if (b === 2) {
//     document.write("three")
// } else if (b === 3) {
//     document.write("four")
// } else if (b === 4) {
//     document.write("five")
// } else if (b === 5) {
//     document.write("six")
// }









//Write a program that simulates a coin toss using random() method of JS Math class.Display the value of coin in your browser. 2 = Heads and 1 = Tails

// var a = Math.random() * 1;
// var b = Math.round(a)
// if (b == 0) {
//     document.write("HEADS")
// } else if (b == 1) {
//     document.write("TAILS")
//}










//Write a program that stores a random secret number from 1 to 10 in a
//variable.Ask the user to input a number between 1 and 10. If the user input
//equals the secret number, congratulate the user.

// var userNumber = +prompt("Guess The Number")
// var num = Math.random() * 9;
// num = Math.round(num)
// if (userNumber == num) {
//     document.write("congratulations!!! You got it ")
// } else {
//     document.write("Try again")
// }









// Write a program that asks the user about his weight.Parse the user
// input and display his weight in your browser.
// Possible user inputs can be:

// var userWeight = ("72")
// var finalWeight = parseInt(userWeight)
// document.write(finalWeight, " Kilograms" + "</br>")
// document.write(typeof finalWeight)








//Write a program that converts a string“ 472” to a number 472.
//Display the values & types in your browser.
//Hint: (use typeof())

// var sting = prompt("")
// document.write("before conversion " + sting + typeof sting + "</br>")
// document.write("</br>");
// var finalSting = Number(sting);
// document.write("After conversion " + finalSting);
// document.write(typeof finalSting)






// Write a program that converts the variable num to string.var num = 35.36;
// Remove the dot to display“ 3536” display in your browser

// var userTask = (35.36);
// var a = userTask.toString()
// document.write(a + "</br>")
// document.write(typeof a + "</br>")
// document.write(parseInt(userTask))







//Write a program to control the length of decimals to 2.var percentage = 30 / 45 * 100; - > 66.66666666666666

// var v = +prompt("enter decimale value")
// document.write(v.toFixed(2));