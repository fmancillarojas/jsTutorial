//const para = document.querySelector('body > h1');

//console.log(para);


//const paras = document.querySelectorAll('p');

//const errors = document.querySelectorAll('.error');

//console.log(errors);

/*paras.forEach(para => {
    console.log(para);
});*/

//get element by id

const title = document.getElementById('page-title');
console.log(title);

//get element by their class name

const errors = document.getElementsByClassName('error');
console.log(errors);

//get elements by tag name

//const paras = document.getElementsByTagName('p');
//console.log(paras);


const para = document.querySelector('p');

console.log(para.innerText);

para.innerText = 'ninjas are awesome';

const paras = document.querySelectorAll('p');

/*
paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' new text';
})*/

const content = document.querySelector('.content');

console.log(content.innerHTML);
content.innerHTML = '<h2>THIS IS A NEW H2</h2>';

const people = ['Mario', 'Luigi', 'Yoshi'];

people.forEach(person =>{
    content.innerHTML += `<p>${person}</p>`
});

const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.amazon.ca');
link.innerText = 'Amazon.ca';

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: green;')

/*const titleSecondExample = document.querySelector('h1');

titleSecondExample.setAttribute('style', 'margin: 50px;');

console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';

title.style.fontSize = '60px';
title.style.margin = '';*/

const contentClasses = document.querySelector('p');

console.log(content.classList);
content.classList.add('error');
content.classList.remove('error');
content.classList.add('success');

const parasExample = document.querySelectorAll('p');
paras.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error');
    } 
    if ((p.textContent.includes('success'))){
        p.classList.add('success');
    }
    console.log(p.textContent);
})

