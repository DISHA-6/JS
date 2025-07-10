'use strict';//use strict mode
/*
So always just put strict mode in the beginning of your scripts and like that 
write more secure code.And when secure, I mean that strict mode makes it easier 
for us developers to avoid accidental errors.So basically it helps us introduce
the bugs into our code and that's because of 2 reasons.First, strict mode forbids 
us to do certain things and second, it will actually create visible errors for us
in certain situations in which without strict mode
JavaScript will simply fail silently without letting us know that we did a mistake.
Okay.So again, first strict mode forbids us to do certain things
and second it creates visible errors
and the developer console, where in other situations
JavaScript would just fail silently.*/

/*let hasDriverLiscense = false;
const passTest = true;
if(passTest) hasDriverLiscense = true;
if(hasDriverLiscense) console.log('I can drive :D');

//const interface = 'Audio';
//const private = 534;*/

/*function logger() {
    console.log('My name is Disha');
}
// calling / running / invoking function
logger();

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice=`Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const applejuice=fruitProcessor(5,0);
console.log(applejuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

const num=Number('23');*/

/*function calcAge(birthYear){
    return 2025 - birthYear;
}

const age=calcAge(2003);
console.log(age);
//anonymous function
//function expression
const calcAge2=function(birthYear){
    return 2025-birthYear;
}
const age2=calcAge2(2003);
console.log(age,age2);

//Arrow Function
const calcAge3 = birthYear =>2025-birthYear;
const age3=calcAge3(2003);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age=2025-birthYear;
    const retirement=65-age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsUntilRetirement(2003, 'Disha'));*/

//Functions Calling Other Functions
function cutFruitPieces(fruit){
    return fruit*4;
}

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const applePieces=cutFruitPieces(apples);
    const orangePieces=cutFruitPieces(oranges);
    const juice=`Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}
//fruitProcessor(2,3);
console.log(fruitProcessor(2,3));
const calcAverage = (scorel, score2, score3)=> (score1+score2+score3)/3;
const scoreDolphins = calcAverage (44,23,71);
const scorekoalas = calcAverage (65,54,49);
function checkWinner(avgDolphins, avgKoalas) {
if(avgDolphins === 2*avgKoalas) console.log(`Dolphins win (${avgDolphins} vs. ${avgkoalas})`);
else if(avgKoalas === 2*avgDolphins) console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
else{
console.log("No team wins...");
}
}
checkWinner (scoreDolphins, scorekoalas);