/* Bronze
Write two variables. One will store your name and another will store a 
friend's name. Find out what property you can use to check 
how long the names are. Console log how many letters are in each name.
*/

//let myName = "Jake";
//let myFriendsName = "Logan";
//console.log(myName.length);
//console.log(myFriendsName.length);
//console.log(myName.length + " " + myFriendsName.length);

/* Silver
Expand on what you have already done and write a conditional to see 
who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/

if  (myName.len > myFriendsName.len){
    console.log(`${myName}'s name is longer than ${myFriendsName}'s`);
}else {
    (myName.len < myFriendsName.len)
    console.log(`${myFriendsName} is longer than ${myName}`);
}

/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that 
has not been mentioned so far. See if you can add that to your conditional!
*/
let myName = "Jake"
let myFriendsName = "Logan"
function numberDifference() {
    if(myName.len - myFriendsName.len >= 0){
        console.log(myName.len - myFriendsName.len)
    }else {
        (myName.len - myFriendsName.len < 0);
        console.log(myFriendsName.len - myName.len)
    }
}

numberDifference(myName, myFriendsName);


