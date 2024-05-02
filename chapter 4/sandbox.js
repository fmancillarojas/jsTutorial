//function declaration

function greet(){
    console.log('hello there');
}

//function expression

const speak = function(){
  console.log('good day');  
};

greet();
speak();

//arguments and parameters

const speakExample = function(name = 'luigi', time = 'night'){
    console.log(`good ${time} ${name}`);  
  };
  
  speakExample('Mario', 'morning');

//returning values

//regular function
/*
const calcArea = function(radius){
    return 3.14 * radius**2;
};*/


//arrow function

/*
const calcArea = (radius) => {
    return 3.14 * radius**2;
}*/

const calcArea = radius => 3.14 * radius**2;

const area = calcArea(5);

console.log(area);

/*
const bill = function(products, tax){
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}*/

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([10,15,30], 0.2));

//functions vs methods

const name = 'shaun';

//functions

const greetFunction = () => 'hello';

let resultOne = greetFunction();

console.log(resultOne);

//methods

let resultTwo = name.toUpperCase();
console.log(resultTwo);

//callbacks and foreach

const myFunc = (callbackFunc) => {
    //Do something
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    //Do something
    console.log(value);
});

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson= (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);

//get a reference to the 'ul'

const ul = document.querySelector('.people');

let html = ``;

people.forEach(function(person){
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;