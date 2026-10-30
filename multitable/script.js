let table = "<table border='1'>";

for (let i = 1; i <= 9; i++){
    table += "<tr>";
    for (let j = 1; j <= 9; j++){
        table += "<td>" + i + "x" + j + "=" + (i*j) + "</td>";
    }
    table += "</tr>";
}

table += "</table>";

document.getElementById("demo").innerHTML = table;