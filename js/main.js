
// Qestion 1

/*var number = Number(window.prompt("Enter your number"));
document.getElementById("demo").innerHTML= number;
console.log(number)*/

// Qestion 2
// var num =Number(window.prompt("enter a number divide by 3 or 4"))
// if(num % 3== 0 && num % 4== 0){
//     document.write("yes")
// }else{
//     document.write("No")
// }


// Qestion 3
/*var num1,num2;
num1= Number(window.prompt("enter first number"));
num2 =Number(window.prompt("enter second number"));
if (num1 > num2 ) {
    document.write(num1);
    console.log(num1);
}else if (num1 < num2){
    document.write(num2);
    console.log(num2);
}*/

// Qestion 4

/*var number = Number(window.prompt("Enter negative or positive value"));
if(number < 0){
    document.write("negative");
}else if(number > 0){
    document.write("positive");
}*/

// Qestion 6

// var num =Number(window.prompt("enter even or odd number"))
// if(num % 2 == 0){
//     document.write("even")
// }else{
//     document.write("odd")
// }
// Qestion 5
/*
num1= Number(window.prompt("enter first number"));
num2 =Number(window.prompt("enter second number"));
num3 =Number(window.prompt("enter third number"));
if (num1 > num2 && num1 > num3){
    console.log(num1);
    document.write(num1);
}else if (num2 > num1 && num2 >num3){
    console.log(num2);
    document.write(num2);
}else if(num3 > num1 && num3 > num2){
    console.log(num3);
    document.write(num3);
}else if (num1 < num2 && num1 < num3){
    console.log(num1);
    document.write(num1);
}else if (num2 < num1 && num2 <num3){
    console.log(num2);
    document.write(num2);
}else if (num3 < num1 && num3 < num2){
    console.log(num3);
    document.write(num3);
}
*/
// Qestion 8
/*
var character= window.prompt("Enter character vowel or consontant")
if(character == "a"|| character == "e"|| character == "i"|| character == "o"||character =="u"){
    document.write("vowel");
    console.log("vowel");
}else if (character == "A"|| character == "E"|| character == "I"|| character == "O"||character =="U"){
    document.write("vowel");
    console.log("vowel");
}else{
    document.write("Consonant");
    console.log("Consonant");
}
*/

// Qestion 9
/*
var number =Number(window.prompt(" Enter integer numbers between 1 to that’s number"));
for (var i = 1; i <= number; i++) {
    console.log(i);
    document.getElementById("num").innerHTML+=i + "</br>";
}
*/
// Qestion 10
/*
var number =Number(window.prompt(" Enter a multiplication table up to 12"));
for (var i = 1; i <= 12; i++) {
    var product = number * i;
    console.log(number + " * " + i + " = " + product);
}
*/
// Qestion 11
/*
var number =Number(window.prompt("  insert number then print all even numbers between 1 to this number"));
for (var i = 2; i <= number; i += 2) {
    console.log(i);
}
*/
// Qestion 12
/*
var firstNumber = Number(window.prompt("Enter the first number:"));  
var secondNumber =  Number(window.prompt("Enter the second number:"));
    console.log(firstNumber ** secondNumber);
    document.write(firstNumber ** secondNumber);
*/
// Qestion 12


// Qwstion 14
/*
var num1 =Number(window.prompt("Enter a first Subject"));
var num2 =Number(window.prompt("Enter a sec Subject"));
var num3 =Number(window.prompt("Enter a 3rd Subject"));
var num4 =Number(window.prompt("Enter a 4th Subject"));
var num5 =Number(window.prompt("Enter a 5th Subject"));
document.getElementById("num").innerHTML +=  "Total Marks = " + (num1+num2+num3+num4+num5)  +"</br>";
document.getElementById("num").innerHTML +=  "Average = " + (num1+num2+num3+num4+num5) / 5  +"</br>";
document.getElementById("num").innerHTML +=  "Percentage = " + ((num1+num2+num3+num4+num5)*100) /500  +"%</br>";
*/
/*
var firstSubject= Number(window.prompt("Enter mark of first subject"));
var secondSubject= Number(window.prompt("Enter mark of second subject"));
var thirdubject= Number(window.prompt("Enter mark of third subject"));
var forthSubject= Number(window.prompt("Enter mark of forth subject"));
var fifthSubject= Number(window.prompt("Enter mark of fifth subject"));
var total = 500;
var totalAllMarks = firstSubject+secondSubject+thirdubject+forthSubject+fifthSubject;
var percentage = (totalAllMarks /total)*100;
if(percentage >= 90){
    document.write("Grade " + "A", (percentage),("%"));
    console.log("Grade " +"A" ,(percentage),("%"));
}else if (percentage >= 80 && percentage<90 ){
    document.write("Grade " + "B" , (percentage),("%"));
    console.log("Grade " + "B" , (percentage),("%"));
}else if (percentage >=70&& percentage<80){
    document.write("Grade " + "C", (percentage),("%"));
    console.log("Grade " + "C", (percentage),("%"));
}else if(percentage >=60&& percentage<70){
    document.write("Grade " + "D", (percentage),("%"));
    console.log("Grade " + "D", (percentage),("%"));
}else if (percentage >= 40&& percentage<60){
    document.write("Grade " + "E", (percentage),("%"))
    console.log("Grade " + "E", (percentage),("%"));
}else{
    document.write("Grade " + "F", (percentage),("%"))
    console.log("Grade " + "F", (percentage),("%"));
}*/


//Qestion 13
/*
var month=Number(window.prompt("Enter a month number "));
switch(month){
    case 1:
        console.log("Dayes in month : 31");
        document.write("Dayes in month : 31");
        break;
    case 2:
        console.log("Dayes in month : 28");
        document.write("Dayes in month : 28");
        break;
    case 3:
        console.log("Dayes in month :31");
        document.write("Dayes in month : 31");
        break;
        case 4:
            console.log("Dayes in month :30");
        document.write("Dayes in month : 30");
            break;
        case 5:
            console.log("Dayes in month :31");
        document.write("Dayes in month : 31");
            break;
        case 6:
            console.log("Dayes in month :30");
        document.write("Dayes in month : 30");
            break;
        case 7:
            console.log("Dayes in month :31");
        document.write("Dayes in month : 31");
            break;
        case 8:
            console.log("Dayes in month :31");
        document.write("Dayes in month : 31");
            break;
        case 9:
            console.log("Dayes in month :31");
        document.write("Dayes in month : 31");
            break;
        case 10:
            console.log("Dayes in month :30");
        document.write("Dayes in month : 30");
            break;
        case 11:
            console.log("Dayes in month :30");
        document.write("Dayes in month : 30");
            break;
        case 12:
            console.log("Dayes in month :31");
        document.write("Dayes in month : 31");
            break;
}
*/
// SWITCH CASE !!!!
// Qestion 15
/*
var month=Number(window.prompt("Enter a month number "));
switch(month){
    case 1:
        console.log("Dayes in month : 31");
        document.write("Dayes in month : 31");
        break;
    case 2:
        console.log("Dayes in month : 28");
        document.write("Dayes in month : 28");
        break;
    case 3:
        console.log("Dayes in month :31");
        document.write("Dayes in month : 31");
        break;
        case 4:
            console.log("Dayes in month :30");
        document.write("Dayes in month : 30");
            break;
        case 5:
            console.log("Dayes in month :31");
        document.write("Dayes in month : 31");
            break;
        case 6:
            console.log("Dayes in month :30");
        document.write("Dayes in month : 30");
            break;
        case 7:
            console.log("Dayes in month :31");
        document.write("Dayes in month : 31");
            break;
        case 8:
            console.log("Dayes in month :31");
        document.write("Dayes in month : 31");
            break;
        case 9:
            console.log("Dayes in month :31");
        document.write("Dayes in month : 31");
            break;
        case 10:
            console.log("Dayes in month :30");
        document.write("Dayes in month : 30");
            break;
        case 11:
            console.log("Dayes in month :30");
        document.write("Dayes in month : 30");
            break;
        case 12:
            console.log("Dayes in month :31");
        document.write("Dayes in month : 31");
            break;
}
*/
// Qestion 16
/*
var character=window.prompt("Enter character vowel or consonant");
switch(character){
    case 'a':
    case 'e':
    case 'i':
    case 'u':
    case 'o':
    case 'A':
    case 'E':
    case 'I':
    case 'U':
    case 'O':
        console.log("vowel");
        document.write("vowel");
        break;
        default:
            console.log("consonant");
            document.write("consonant");
}
*/
// Qestion 17
/*
var number1 = Number(prompt("Enter number1 :"));
var number2 = Number(prompt("Enter number2 :"));
switch (true) {
    case (number1 > number2):
        console.log(number1 +" is greater than "+ number2);
        document.getElementById("num").innerHTML+= number1 +" is greater than "+ number2;
    break;
    case (number1 < number2):
        console.log(number2 +" is greater than "+ number1);
        document.getElementById("num").innerHTML+= number2 +" is greater than "+ number1;
    break;
    default:
    console.log("Both numbers are equal");
    break;
}
*/

// Qestion 18
/*
var number=Number(window.prompt("Enter a number is even or odd "));
var res =number %2;
switch(res){
    case  1:
        console.log("the number is odd");
        document.write("the number is odd")
        break;
    case  0:
        console.log("the number is even");
        document.write("the number is even")
        break;
    default:
        console.log("invalid value")
}
*/

// Qestion 19
/*
var number=Number(window.prompt("Enter positive or negative or zero "));
switch (true){
    case number > 0:
        console.log("The number is positive.");
        document.write("The number is positive.");
        break;
    case number < 0:
        console.log("The number is negative.");
        document.write("The number is negative.");
        break;
    case number ===0:
        console.log("The number is zero.");
        document.write("The number is Zero.");
        break;
    default:
        console.log("Invalid number.");
        document.write("Invalid number.");
}
*/

// Qestion 20

/*
var firstNumber = Number(window.prompt("Enter the first number:"));  
var operator = window.prompt("Enter the operator (+, -, *, /): ");
var secondNumber =  Number(window.prompt("Enter the second number:"));
switch (operator) {
    case "+":
            console.log((firstNumber) + (secondNumber));
            document.write((firstNumber) + (secondNumber))
        break;
    case "-":
        console.log((firstNumber) - (secondNumber));
        document.write((firstNumber) - (secondNumber));
        break;
    case "*":
        console.log((firstNumber) * (secondNumber));
        document.write((firstNumber) * (secondNumber));
        break;
    case "/":
        console.log((firstNumber) / (secondNumber));
        document.write((firstNumber) / (secondNumber));
        break;
    default:
        console.log("Invalid operator!");
        break;
}
*/



