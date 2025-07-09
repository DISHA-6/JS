/**let js="amazing";
//if(js === 'amazing') alert('Javascript is FUN!');
//40+8+23-10;
console.log(40+8+23-10);
console.log("Disha");
console.log(23);
let firstName="Disha";
console.log(firstName);
let PI=3.1415;//constant value thats why its written in caps**/
//true;
/**let javascriptIsFun=true;
console.log(javascriptIsFun);
console.log(typeof true);// will show the datatype
console.log(typeof javascriptIsFun );
console.log(typeof 'Disha');
console.log(typeof 23);
let year;
console.log(year);
console.log(typeof year);
year=1991;
console.log(typeof year);
console.log(typeof null);**/
/*const firstName='Disha';
const job= 'intern';
const birthYear=2003;
const year=2025;
const disha="I'm " + firstName + ', a ' + (year - birthYear)
 + ' years old ' + job +'!';
 console.log(disha);
const dishaNew= `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(dishaNew);
console.log(`Just a regular string...`);*/
//const age=10;
//const isOldEnough=age >=18;
/*if(age >= 18){
    console.log('Sarah can have driving license !');
} else {
    const yearsLeft = 18 - 10;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}
const birthYear = 2003;
let century;
if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log(century);*/

// type conversion
/*const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Disha'));
console.log(typeof NaN);
console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;//'11'
n=n-1;
console.log(n);*/

// 5 falsy values: 0, '', undefined, null, NaN
/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Disha'));
console.log(Boolean({}));
console.log(Boolean(''));

const money=1000;
if(money){
    console.log("Don't spend it all ;)");
} else{
    console.log("You should get a job!");
}

let height;
if(height){
    console.log('YAY! Height is defined');
} else{
    console.log('Height is UNDEFINED');
}*/

/*const age = '18';
if(age=== 18) console.log('You just became an adult :D (strict)');
if(age== 18) console.log('You just became an adult :D (loose)');

const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if(favourite === 30) { 
    console.log('Cool! 30 is an amazing number!');
}*/
const age = 22;
age >= 18 && age<=30 ? console.log('I like to drink wine !!') : console.log('I like to drink water !!')

const bill = 400;
const tip = bill >= 50 && bill <=300 ? 0.15*bill : 0.2*bill;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}.`);
