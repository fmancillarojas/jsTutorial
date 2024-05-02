//for loops

for(let i = 0; i < 5; i++){
    console.log('in loop:', i);
}

console.log('loop finished');

const names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i ++){
    console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

//while loops

const namesWhile = ['shaun', 'mario', 'luigi'];

let i = 0;

while(i < namesWhile.length){
    console.log('val of i: ', i);
    i++;
}


let j = 0;

do{
    console.log('val of j: ', j);
    j++;
}while(j < 5);

//if statements

const age = 20;

if(age < 20){
    console.log('you are over 20 years old');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if(ninjas.length >= 4){
    console.log("that's a lot of ninjas")
}

const password = 'p@ss12';

if(password.length >= 12 && password.includes('@')){
    console.log('password is mighty strong')
} else if(password.length >= 8 || password.includes('@') && password.length > 5){
    console.log('password is strong enough')
} else {
    console.log('password is not strong enough')
}

//logical NOT (!)

let user = false;

if(!user){
    console.log('you must be logged to continue');
}

console.log(!true);
console.log(!false);

//break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){
    
    if(scores[i] === 0){
        continue;
    }

    console.log('your score: ', scores[i]);

    if(scores[i] === 100){
        console.log('congrats, you got the top score!');
        break;
    }
}

//Switch statements

const grade = 'D';

switch(grade){
    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got an B!');
        break;
    case 'C':
        console.log('you got an C!');
        break;
    case 'D':
        console.log('you got an D!');
        break;
    case 'E':
        console.log('you got an E!');
        break;
    default:
        console.log('not a valid grade');
}

//Variables and block scope

let anotherAge = 30;

if(true){
    let anotherAge = 40;
    let name = 'shaun';
    console.log('inside 1st code block ', anotherAge, name);

    if(true){
        let anotherAge = 50;
        console.log('inside 2nd code block ', anotherAge);
    }
}

console.log('outside block: ', anotherAge, name);