
// BOUCLE IMBRIQUÉE
// ---------------------------------------- générer un TABLE
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