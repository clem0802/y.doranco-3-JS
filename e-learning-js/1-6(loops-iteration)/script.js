
// BOUCLE IMBRIQUÉE

// ---------------------------------------- (générer des listes)
document.write(
    "<ul><li>1</li> <li>2</li> <li>3</li> <li>4</li> <li>5</li></ul>"
);

var myList = "<ul>";
for (var counter = 1; counter <= 5; counter++){
    myList += "<li> " + counter + " </li>";
}
myList += "</ul>";
document.write(myList);





// <table border="1">
//     <tr>
//         <th>Fristname</th>
//         <th>Lastname</th>
//         <th>Age</th>
//     </tr>
//     <tr>
//         <td>Jill</td>
//         <td>Smith</td>
//         <td>50</td>
//     </tr>
//     <tr>
//         <td>Eve</td>
//         <td>Jackson</td>
//         <td>94</td>
//     </tr>
// </table> 