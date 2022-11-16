
function deactivateToolTips(){
    const spans = document.getElementsByTagName("span");
    const spansLength = spans.length;

    for (let i=0; i<spansLength; i++){
        if (spans[i].className == "tooltip"){
            spans[i].style.display = "none";
        }
    }
}

function getToolTip(elemHTML){
    while (elemHTML = elemHTML.nextSibling){
        if (elemHTML.className = "tooltip"){
            return elemHTML;
        }
    }
    return false;
}


// --------------------------
let check = {};

// sex
check["sex"] = function(){
    console.log("user sex checked");

    let sex = document.getElementsByName("sex"),
    tooltip = getToolTip(sex[1].parentNode);

    // if(sex[0].checked || sex[1].checked || sex[2].checked){
    if(sex[0].checked || sex[1].checked){
        tooltip.style.display = "none";
        return true;
    } else{
        tooltip.style.display = "inline-block";
        return false;
    }
};

// lastName
check["lastName"] = function(id){
    console.log("user lastName checked");

    let elemHTML = document.getElementById(id),
    tooltip = getToolTip(elemHTML);

    if(elemHTML.value.length >= 2){
        elemHTML.className = "correct";
        tooltip.style.display = "none";
        return true;
    } else{
        elemHTML.className = "incorrect";
        tooltip.style.display = "inline-block";
        return false;
    }
};

// firstName
check["firstName"] = check["lastName"];

// login
check["login"] = function(){
    console.log("user login checked");
    let login = document.getElementById("login");
    tooltip = getToolTip(login);

    if(login.value.length >= 4){
        login.className = "correct";
        tooltip.style.display = "none";
        return true;
    } else{
        login.className = "incorrect";
        tooltip.style.display = "inline-block";
        return false;
    }
};

// age
check["age"] = function(){
    console.log("user age checked");

    let age = document.getElementById("age"),
    tooltip = getToolTip(age),
    ageValue = parseInt(age.value);

    if(ageValue >= 13 && ageValue <= 120){
        age.className = "correct";
        tooltip.style.display = "none";
        return true;
    } else{
        age.calssName = "incorrect";
        tooltip.style.display = "incorrect";
        return false;
    }
};

// pwd1
check["pwd1"] = function(){
    console.log("user password checked");

    let pwd1 = document.getElementById("pwd1"),
    tooltip = getToolTip(pwd1);

    if(pwd1.value.length >= 6){
        pwd1.className = "correct";
        tooltip.style.display = "none";
        return true;
    } else{
        pwd1.className = "incorrect";
        tooltip.style.display = "inline-block";
        return false;
    }
};

// pwd2
check["pwd2"] = function(){
    console.log("user password confirmation checked");
    let pwd1 = document.getElementById("pwd1");
        pwd2 = document.getElementById("pwd2");
        tooltip = getToolTip(pwd2);

        if(pwd1.value == pwd2.value && pwd2.value != ""){
            pwd2.className = "correct";
            tooltip.style.display = "none";
            return true;
        } else{
            pwd2.className = "incorrect";
            tooltip.style.display = "inline-block";
            return false;
        }
};

// country
check["country"] = function(){
    console.log("user country checked");

    let country = document.getElementById("country"),
    tooltip = getToolTip(country);

    if(country.value !== "none"){
        tooltip.style.display = "none";
        return true;
    } else{
        tooltip.style.display = "inline-block";
        return false;
    }
}


// --------------------------
// IIFE
(function(){

    // form
    const myForm = document.getElementById("myForm");
    const listInputs = document.getElementsByTagName("input");
    const listInputsLength = listInputs.length;

    // onKeyUp
    for(let i=0; i<listInputsLength; i++){
        if(listInputs[i].type == "text" || listInputs[i].type == "password"){
            listInputs[i].onkeyup = function(){
                check[this.id](this.id); // check.country("country")
            }
        }
    }

    // submit
    myForm.onsubmit = function(e){
        e.preventDefault();
        let result = true;

        for(let i in check){
            result = check[i](i) && result;
        }

        if(result){
            alert("Data OK");
        } else{
            alert("Wrong Data!!");
        }
    }

    // reset
    myForm.onreset = function(e){
        for(let i=0; i<listInputs.length; i++){
            listInputs[i].className = "";
        }
        deactivateToolTips();
    }

    deactivateToolTips();
}());