var number1 = 700;
var number2 = 800;
console.log("your number is =", number1);
console.log("your number is =", number2);
var Name = "Huraira Imtiaz";
console.log("your name is :", Name);
//------------------- relational operators-----------------------------
// 1) less than operator
var result1 = number1 < number2;
console.log("your result1 is :", result1);
// 2) greater than operator
var result2 = number1 > number2;
console.log("your result2 is :", result2);
// 3) less-than-equal to operator
var result3 = number1 <= number2;
console.log("your result3 is :", result3);
// 4) greater-than-eqaul to  operator
var result4 = number1 >= number2;
console.log("your result4 is :", result4);
// 4) eqaul to  operator
var result5 = number1 == number2;
console.log("your result5 is :", result5);
// 4) not-eqaul to  operator
var result6 = number1 != number2;
console.log("your result6 is :", result6);
//------------------- logical operators-----------------------------
// 1) AND OERATOR
var logicalOperator = number1 == number2 && number1 != number2;
console.log("your result of logical operator AND is :", logicalOperator);
// 1) OR OERATOR
var logicalOperator = number1 == number2 || number1 != number2;
console.log("your result of logical operator OR is :", logicalOperator);
//-------------------type of----------------------------
console.log("tyhe type of your variable is :", typeof number1);
console.log("tyhe type of your variable is :", typeof result1);
console.log("tyhe type of your variable is :", typeof logicalOperator);
console.log("tyhe type of your variable is :", typeof Name);
