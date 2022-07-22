// ----------------------------------
// (1) solution4 (prof Laurent)
// let maDiv = document.getElementsByClassName("cyan")[0];
// console.log("maDiv ok");

// maDiv.addEventListener("click", function(){
//     let classDiv = maDiv.getAttribute("class");
//     console.log("className before click: " + classDiv);

//     if(classDiv == "cyan"){
//         maDiv.setAttribute("class", "yellow");
//     } else if(classDiv == "yellow"){
//         maDiv.setAttribute("class", "cyan");
//     }
// })


// ----------------------------------
// (2) solution4 (prof Laurent)
let maDiv = document.getElementsByClassName("cyan")[0];
console.log("maDiv ok");

function color(){
    let classDiv = maDiv.getAttribute("class");
    console.log("className before click: " + classDiv);
  
    if(classDiv == "cyan"){
      maDiv.setAttribute("class", "yellow");
    }else if(classDiv == "yellow"){
      maDiv.setAttribute("class", "cyan");
    }
  }
  
  maDiv.addEventListener("click", color);