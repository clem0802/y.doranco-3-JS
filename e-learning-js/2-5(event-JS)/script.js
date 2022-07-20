console.log("JS EVENTS");

// EVENT HANDLER
// ----------------------------------------------------
// ----------------------------------------------------


// HTML Attribute
// --------------------------


// EVENT (1) (click)
// --------------------------
function myFunction(element){
    element.style.color = "red"; // NodeList(1)
    console.log("(1) click"); // (1) click
}


// ----------------------------------------------------
// ----------------------------------------------------
// ANONYMOUS FUNCTION (2) (dblclick)
// --------------------------
console.log(document.querySelectorAll("#dblclickMe")); // MouseEvent {isTrusted: true, screenX: 103,...)}
function dblClick(event){ // "event": un SUPER OBJET
    console.log("EVENT", event);
    console.log("X :", event.clientX); // X : 103 (les abscisses)
    console.log("Y :", event.clientY); // Y : 186 (les ordonnés)
    console.log("(2) dblclick - anonymous function") // (2) dblclick - anonymous function
    this.style.color = "#2ecc71";
    console.log(this.innerHTML); // DBLCLICK  =>(content of h2)
}
document.querySelectorAll("#dblclickMe")[0].ondblclick = dblClick;

// (à DÉ-COMMENTER pour voir)
// document.querySelectorAll("#dblclickMe")[0].ondblclick = function(){
//     console.log("(2) dblclick - anonymous function") // (2) dblclick - anonymous function
//     this.style.color = "#2ecc71";
//     console.log(this.innerHTML); // DBLCLICK  =>(content of h2)
// }

// MouseEvent: click, dblclick, mouseup, mousedown



// ----------------------------------------------------
// ----------------------------------------------------
// ADD EVENT LISTENER (3)-(4)-(5)-(6)-(7)

// (3) focus
document.querySelector("#myFocus").addEventListener("focus", function(){
    console.log("(3) FOCUS on");
    this.style.borderColor = "#e74c3c";
    this.style.backgroundColor = "#2ecc71";
});

// (4) change
document.querySelectorAll("input[type='text']")[1].addEventListener("change", function(){
    console.log("(4) CHANGE on");
    this.style.borderColor = "black";
    this.style.borderSize = "10px";
    this.style.backgroundColor = "#f1c40f";
});

// keyup
document.querySelector("input[type='password']").addEventListener("keyup", function(){
    console.log("(5) KEYUP on", this.value); // ça peut HACKER !!
    if(isNaN(this.value)){
        alert("Please insert a numeric value.")
    }
});

// (6) submit
document.querySelector("#myForm").addEventListener("submit", submitFunction);
function submitFunction(event){
    console.log("(6) SUBMIT");
    event.preventDefault(); // empêcher de recharger la page, when SUBMIT
}

// (7) hover
document.querySelector("img").addEventListener("mouseover", function(){
    this.style.width = "450px";
});
document.querySelector("img").addEventListener("mouseout", function(){
    this.style.width = "250px";
});