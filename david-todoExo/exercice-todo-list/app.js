// todolist (EXO)

// fonction addTodo (1)(2)(3)(4)(5)
function addTodo(){
    // "console" est un "object"
    // console.log('addTodo');

    // (4) récupérer le input "todo-input"
    // le "document" ici est un "object"
    const input = document.querySelector(".todo-input");
    console.log(input.value);

    // (5) création et récupération de balise LI
    const li = document.createElement('li');
    // mettre le contenu de l'input dans le texte de la balise li
    li.innerText = input.value;

    // (5) créer const ul (label) 
    // récupérer de la list "ul" des todo
    const ul = document.querySelector(".todo-list");
    ul.appendChild(li); // 


    // (6) création du bouton "deleteButton"
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Supprimer";
    // (8) lancer-attacher event "click" sur le btn Supprimer
    deleteButton.addEventListener("click", deleteTodo(li));

    // ajouter ce bouton "Supprimer" dans balise LI (6.3)
    li.appendChild(deleteButton);

}


// ------------------------------------
// fonction deleteTdo (6) / Suppression de todos
function deleteTodo(li){
    // return () => {
    //     tacheList.removeChild(todo);
    // }

    return function (){
        // sélectionner la liste des todos
        const ul = document.querySelector('.todo-list');
        // enlevver de la liste la balise li donnée dans paramètre
        ul.removeChild(li);
    }
}

// récupérer le btn "todo-btn" (3.3)
const button = document.querySelector(".todo-btn");
button.addEventListener("click", addTodo);



