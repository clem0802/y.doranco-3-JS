// ------------------------------------------------------ (1) (OBJECT-METHOD)
// We can include methods in our object literals 
// by creating ordinary, colon-separated key-value pairs
// The key serves as our method’s name, 
// while the value is an anonymous function expression
const alienShip1 = {
    invade: function () { 
      console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
};

// With the new method syntax introduced in ES6 
// we can omit the colon and the function keyword
const alienShip2 = {
    invade () { 
      console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
};

// Object-Methods are invoked by appending the OBJECT name 
// with the DOT operator, followed by the METHOD name and PARENTHESES:
alienShip2.invade(); 


// ------------------------------------------------------ (2) (OBJECT-METHOD)
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
const alienShip3 = {
    retreat(){
        console.log(retreatMessage);
    },
    takeOff(){
        console.log('Spim... Borp... Glix... Blastoff!')
    }
}
alienShip3.retreat();
alienShip3.takeOff();