// "Property Value Shorthand"

function robotFactory(model, mobile){
    return {
        model: model, // can write: model,
        mobile: mobile, // can write: mobile,
        beep(){
            console.log('Beep Boop');
        }
    }
}

const newRobot = robotFactory('P-501', false);
console.log(newRobot.model);
console.log(newRobot.mobile);

// ----------------------------(shorhand example, TAKE OFF the "keys")
const testFactory = (name, age) => {
    return {
        name,
        age
    }
}