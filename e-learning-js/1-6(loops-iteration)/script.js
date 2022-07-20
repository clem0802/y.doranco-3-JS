
// BOUCLE IMBRIQUÉE

document.write(
    "<ul><li>1</li> <li>2</li> <li>3</li> <li>4</li> <li>5</li></ul>"
);

var myList = "<ul>";
for (var counter = 1; counter <= 5; counter++){
    myList += "<li> " + counter + " </li>";
}
myList += "</ul>";
document.write(myList);


// ************************************
var myTable = "<table border='1'>";
var counter = 1;

for(var i=1; i<=10; i++){
    myTable += "<tr>";
    for(var j=1; j<=5; j++){
        myTable += "<td> " + counter + " </td>";
        counter++;
    }
    myTable += "</tr>";
}
myTable += "</table>";
document.write(myTable);





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