// todolist (EXO)


function addTodo(){
    // console.log('addTodo');

    // récupérer le input "todo-input"
    // le "document" ici est un "object"
    const input = document.querySelector(".todo-input");

    // pour input
    const tacheNom = input.value;
    console.log(input.value);


    // // récupérer le li
    const li = document.createElement('li');
    li.innerText = input.value;
    li.classList.add("liste");

    // // créer const list
    const list = querySelector(".liste");
    list.appendChild(li);
    

}

// récupérer le btn "todo-btn"
const button = document.querySelector(".todo-btn");
button.addEventListener("click", addTodo);



