//object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'asd@email.com',
    location: 'Berlin',
    blogs: [{title: 'why mac and cheese rules', likes: 30},
            {title: '10 things to make with marmite', likes: 50}],
    login(){
        console.log('the user logger in');
    },
    logout(){
        console.log('the user logger out');
    },
    logBlogs(){
        console.log('this user has written the following blogs: ');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};

console.log(user);

user.age = 5;

console.log(user.age);

console.log(user['email']);
user['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof(user));

user.login();

user.logout();

user.logBlogs();

//Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));

console.log(Math.floor(area));

console.log(Math.ceil(area));

console.log(Math.trunc(area));

//random numbers

const random = Math.random();

console.log(random);

console.log(Math.round(random) * 100);

//primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);

scoreOne = 100;

console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);

//reference values

userOne = {name: 'ryu', age:30};
userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;
console.log(userOne, userTwo);