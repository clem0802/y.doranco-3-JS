let icon = document.getElementsByClassName("fa-solid")[0];

let containerLiens = document.getElementsByClassName("container-liens")[0];
console.log(containerLiens);

// let classContainerLiens = containerLiens.getAttribute("class");
// console.log(classContainerLiens);

icon.addEventListener("click", function(){
  let classContainerLiens = containerLiens.getAttribute("class");
  console.log(classContainerLiens);

  if(classContainerLiens === "container-liens"){
  containerLiens.className += " show";
  }else{
    containerLiens.className = "container-liens";
  }
});