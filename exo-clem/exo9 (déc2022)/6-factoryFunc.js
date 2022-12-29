const geistFactory = (name, age, energySource, catchPhrase) => {
    return {
        name: name,
        age: age,
        energySource: energySource,
        scare(){
            console.log(catchPhrase);
        }
    }
}
const spirit = geistFactory('Geister', 777, 'holyspirit', 'PEACE!');
spirit.scare(); // PEACE!

console.log(spirit);
// {
//     name: 'Geister',
//     age: 777,
//     energySource: 'holyspirit',
//     scare: [Function: scare]
// }

// ---------------------------------
const robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep(){
        console.log("Beep Boop");
      }
    }
}
const robotta = robotFactory('Samsoong', true);
robotta.beep(); // Beep Boop
console.log(robotta.model); // Samsoong
console.log(robotta); // { model: 'Samsoong', mobile: true, beep: [Function: beep] }

