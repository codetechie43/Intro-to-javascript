/* Rule of createing a varible 
 1. the name should be unique.
 2. It should not be a keyword.
 3. It should not start with a number.
 4. It should not start with an identifier.
 5. it can start with only $ and _ */

// We created a new variable using the const variable
const _sujuBhai = "Hello suju, How are you?";

// here we cretaed a new variable using the let variable
let $ajjuBhai = "How are you?";

// here we created a new variable using the var variable
var sunitaDevi = "How are you ajjubhai?";

// here we displayed output using console.log
console.log(_sujuBhai);

//here we displayed output using console.log
console.log(sunitaDevi); 

// here we displayed output using console.log
console.log($ajjuBhai); // console


// Starting data type "string"
 const doubleQuote = "Sunita Devi";
 const singleQuote='tu hai pani pani';
const backTicks = `hello ${doubleQuote}`;

 console.log(doubleQuote); // console
 console.log(singleQuote);
 console.log( backTicks);

 // Starting data type "number"

 const string = 'suju';
 const number1 = 10;
 const number2 = -5;

 const result = string * number2;
 const operation = number1 * number2;

 console.log( typeof result); // console
 console.log( typeof number1); // console
 console.log( typeof number2); // console
 console.log(  operation); // console


 // Here we are starting with Boolean data type

 //  only two values are possible true or false
 // true - yes,correct,1
 // false - no,incorrect,0

 const isCool = true; // true or false type of boolean values

 const agCool =false; // true or false type of boolean values

 if(agCool) {
     console.log('jimme is cool'); // if true
 } else {
     console.log('jimme is not cool'); // if false
 }

 const age = 21;
 console.log(age > 20)


 // here we are starting null and undefined data type

 let rollNo = null;
 console.log( typeof rollNo);


 let x;
  console.log(x);

// sdtaring data type object

 const person = {
     name: 'suju',
     age: 19,
     job: 'Software Engineer'
 };

 //dot notaion
 console.log( typeof person.age);

 // Array 
 const arr = [1, 2, 3, 4, 5];
 console.log(arr);

 const date = new Date();
 console.log(date);


 // Statically types language
 let message ='hello suju'
 console.log(typeof message);

 message =true;
 console.log(typeof  message);
 // dynamically types language 
 // Javascript is dynamically typed language


 // Comaparison operation ==> true/false

 const a = 5;
 const b = 18;

 //greater tham 
 console.log(a > b);

 //less than
 console.log(a < b);

 //equal to
 console.log(a == b);

 //not equal to
 console.log(a!= b);

 //greater than or equal to
 console.log(a >= b);

 //less than or equal to
 console.log(a >= b); 

 //strict equality
 console.log(a === b);

 //strict inequality :compares values and data types
 //return true when both the values are true
 console.log(a!== b);

 console.log(7===7);
 console.log("suju"==="suju");

 // loose equality
 console.log(5 == "5");

 // loose inequality
 console.log(a!== "suju");

 console.log(7===7);
 console.log("suju"==="suju");

 // loose equality
 // the good ones :- ==== !== 
 // the bad ones :- ==  !=

 console.log(0 ==='0');
 console.log(true ==='1');


 // logical operators
 // OR ==> either of the conditions should be true
console.log(true || false);

 //AND && ==> both the conditions should be true
 console.log(true && false);

 //NOT ==> !
 console.log(!false);








 

 

