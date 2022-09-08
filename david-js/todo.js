
// Ce fichier contient l'application de notre task list

// Récupérer les éléments HTML qui possèdent de l'intéraction
const input = document.querySelector(".task-input");
const button = document.querySelector(".add-task");
const taskList = document.querySelector(".task-list");

// Cette fonction est appelée lorsque je clique sur un bouton supprimer
function deleteTask(task) {
  return () => {
    taskList.removeChild(task);
  };
}

// Cette fonction crée un élément dans la liste des choses à faire
function createTask(taskName) {
  // Création d'une balise LI
  const li = document.createElement("li");

  // On crée un bouton de suppression de notre tâche
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Supprimer";

  // Lors du clic sur le bouton nous supprimons la tâche
  deleteButton.addEventListener("click", deleteTask(li));

  // On crée un label pour notre tâche
  const label = document.createElement("span");
  label.innerText = taskName;

  // On ajoute le bouton et le label à l'intérieur de notre tâche
  li.appendChild(label).appendChild(deleteButton);

  // On retourne la balise LI
  return li;
}

// Cette fonction rajoute une nouvelle tâche dans la liste
function addTaskToList() {
  // On récupére ce que contient notre input de tâche
  const taskName = input.value;

  // Si la tâche est vide
  if (!taskName) {
    // on arrête tout
    return;
  }

  // On crée la balise LI de notre tâche
  const li = createTask(taskName);

  // On ajout la balise LI dans notre liste
  taskList.appendChild(li);

  // On vide notre input
  input.value = "";
}