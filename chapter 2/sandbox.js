//string
console.log('hello world');

let email = "asd@email.com"

console.log(email);

//string concatenation

let firstName = "Name";

let lastName = "Lastname";

let fullName = firstName + ' ' + lastName;

console.log(fullName);

//getting characters

console.log(fullName[0]);

//string length

console.log(fullName.length);

//string methods

console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');

console.log(index);

//common string methods

let lastIndex = email.lastIndexOf('.');

console.log(lastIndex);

let stringSlice = email.slice(0,3);

console.log(stringSlice);

let substringTest = email.substring(4, 9);

console.log(substringTest);

let replaceTest = email.replace('a', '1');

console.log(replaceTest);

//Numbers

let radius = 10;

let pi = 3.14;

console.log(radius, pi);

//math operators +,-,*,/,**,%

console.log(10/2);

//let resultMath = radius % 3;

let resultMath = pi * radius**2;

console.log(resultMath);

//Order of operation BIDMAS

let resultBidmas = 5 * (10 - 3)**2;

console.log(resultBidmas);

let likes = 10;

likes = likes + 1;

console.log(likes);

likes++;

console.log(likes);

likes--;

console.log(likes);

likes += 10;

console.log(likes);


likes -= 10;

console.log(likes);

likes *= 2;

console.log(likes);

likes /= 2;

console.log(likes);

//NaN - not a number

console.log(5 / 'hello');

let example = 'the blog has ' + likes + ' likes';

console.log(example);

//template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likesExample = 30;

//concatenation way

let concat = 'the blog called ' + title + ' by ' + author + ' has ' + likesExample + ' likes';

console.log(concat);

//template string way

let template = `The blog called ${title} by ${author} has ${likesExample} likes`;

console.log(template);

//creating html templates

let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likesExample} likes</span>
`;

console.log(html);

//Arrays

let ninjas = ['shaun','ryu','chun-li'];

ninjas[1] = 'ken';

console.log(ninjas[1]);

let ages = [20, 25, 30, 35];

console.log(ages[2]);

let random = ['shaun', 'crystal', 30, 20];

console.log(random);

console.log(ninjas.length);

//Array methods

let resultNinjas = ninjas.join(',');

console.log(resultNinjas);

let resultIndexOf = ninjas.indexOf('chun-li');
console.log(resultIndexOf);

let resultConcat = ninjas.concat(['ken','crystal']);

console.log(resultConcat);

let resultPush = ninjas.push('ken');

console.log(resultPush);
console.log(ninjas);

let resultPop = ninjas.pop()

console.log(resultPop);
console.log(ninjas);

//NULL and Undefined

let age;

console.log(age, age +3, `the age is ${age}`);

let ageNull = null;

console.log(ageNull, ageNull +3, `the age is ${ageNull}`);

//Booleans and comparisons
console.log(true, false, 'true', 'false');

//methods can return booleans
let emailExample = 'luigi@thenetninja.co.uk';
let names = ['mario', 'luigi', 'toad'];

let resultExample = email.includes('@');
let resultNames = names.includes('bowser');

console.log(resultExample);
console.log(resultNames);

//comparison operators
let ageExample = 25;

console.log(ageExample == 25);
console.log(ageExample == 30);
console.log(ageExample != 30);
console.log(ageExample > 20);
console.log(ageExample < 20);
console.log(ageExample <= 25);

let nameExample = 'shaun';

console.log(nameExample == 'shaun');
console.log(nameExample == 'Shaun');
console.log(nameExample > 'crystal');
console.log(nameExample > 'Shaun');
console.log(nameExample > 'Crystal');

//Comparisons

let ageTest =  25;

//loose comparison (different types can still be equal)

console.log(ageTest == 25);
console.log(ageTest == '25');
console.log(ageTest != 25);
console.log(ageTest != '25');

//strict comparison (different types cannot be equal)

console.log(ageTest === 25);
console.log(ageTest === '25');
console.log(ageTest !== 25);
console.log(ageTest !== '25');

//type conversion

let score = '100';

//score = Number(score);

console.log(score + 1);
console.log(typeof(score));

let resultHello = Number('hello');

console.log(resultHello);

let resultString = String(50);

console.log(resultString);
console.log(typeof(resultString));

let resultBool = Boolean(0);
let resultBoolString = Boolean('');

console.log(resultBool, typeof(resultBool));
console.log(resultBoolString, typeof(resultBoolString));




