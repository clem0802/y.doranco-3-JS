for (let i = 1; i <= 3; i++) {
    console.log(i); // 1 2 3 
}


// ------------------------------------------(iterate)
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
};

const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
isTwoPlusTwo();
console.log(isTwoPlusTwo.name); // checkThatTwoPlusTwoEqualsFourAMillionTimes


// ------------------------------------------(iterate)
// functions can accept other functions as parameters
// A higher-order function is a function that 
// either accepts functions as parameters, returns a function, 
// or both

// functions that get passed in as parameters are "CALLBACK functions"
const higherOrderFunc = param => {
    param();
    return `I just invoked ${param.name} as a callback function!`
}
const anotherFunc = () => {
    return 'I\'m being invoked by the higher-order function!';
}
higherOrderFunc(anotherFunc);
higherOrderFunc(() => {
    for (let i = 0; i <= 10; i++){
      console.log(i);
    }
});
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10


// ------------------------------------------(iterate)(Functions as Parameters)
const addTwo = num => {
    return num + 2;
}
// below is a higher-order function
const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);
    return checkA === checkB ? func(val) : console.log('inconsistent results')
}
console.log(checkConsistentOutput(addTwo, 8));


