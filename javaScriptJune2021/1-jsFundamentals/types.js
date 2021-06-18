let phrase = "Hello";
//let myName = "Donovan";

//console.log(`${phrase} ${myName}`);

//Booleans
let on = true;
let off = false;

//Null
//Intetional empty variable
let empty = null;

//Undefined
//Starts empty but we intend to fill it
let undef;


//Numbers
let degrees = 90;
let precise = 999999999999999;
console.log(precise);

//Strings
let stringOne = "double quotes";
let stringTwo = 'single quotes';
let stringThree = `backticks`;

let first = 1050 + 100;
let second = "1050" + "100";
let third = 1050 + "100";
console.log(first, second, third);

//Objects
let frodo = {
    race: "Hobbit",
    rings: 1,
    cloak: true
}

console.log(frodo);

//Arrays
let list = ["item1", "item2", "item3"];

console.log(typeof list);

/*
DataType literals are fixed values that we as developers insert into the code, not data that is coming from a third party source.
*/

let myName = "Donovan";
console.log(myName.length);

console.log(myName.toUpperCase());

let home = "My home is in greenwood";
console.log(home.includes("greenwood"));

let sent = "This sentence will be split into individual parts";
console.log(sent.split(" "))





/* BRONZE
​
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
 
*/
​
​
/* SILVER
​
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
​
*/

let Tekken = {
    officialName    :   "Tekken7",
    yearReleased    :   2016,
    fightingGame    :   true

       
};
console.log(Tekken);


