/*require('./add.js');*/
// const addFn = require('./add.js');
//require('./super-hero.js');


// console.log("Hello from index.js");
// const sum = addFn(1, 2);
// console.log(sum)
// const superHero = require('./super-hero');
// console.log(superHero.getName());
// superHero.setName("superman");
// console.log(superHero.getName());

// const newSuperHero = require('./super-hero');
// console.log(newSuperHero.getName());

const superHero = require('./super-hero');

const batman = new superHero("Batman");
console.log(batman.getName());
batman.setName("Bruce Wayne");
console.log(batman.getName());

const superman = new superHero("Superman");
console.log(superman.getName());

