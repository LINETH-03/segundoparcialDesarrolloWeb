document.addEventListener("DOMContentLoaded", function () {

//JSON TABLAS
    var tablasLink = document.querySelector("#tablasLink");
    var contenido = document.querySelector(".contenido");
    var footer = document.querySelector(".footer");
    var clockLink = document.querySelector("#clockLink"); 
  
    tablasLink.addEventListener("click", function (event) {
      event.preventDefault();
  
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  
      xhr.onload = function () {
        if (xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);
          displayTable(data);
        }
      };
  
      xhr.send();
    });
  
    function displayTable(data) {
      var table = document.createElement("table");
      table.classList.add("table-container");
  
      var tableBody = document.createElement("tbody");
  
      var headerRow = tableBody.insertRow();
      for (var key in data[0]) {
        var headerCell = document.createElement("th");
        headerCell.textContent = key;
        headerRow.appendChild(headerCell);
      }
      headerRow.insertCell();
  
      data.forEach(function (item) {
        var row = tableBody.insertRow();
        for (var key in item) {
          var cell = row.insertCell();
          cell.textContent = item[key];
        }
  
        var deleteCell = row.insertCell();
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", function () {
          tableBody.deleteRow(row.rowIndex);
        });
        deleteCell.appendChild(deleteButton);
      });
  
      table.appendChild(tableBody);
      contenido.innerHTML = "";
      contenido.appendChild(table);
    }









    //RELOJ 
    var clockLink = document.querySelector("#clockLink");
    clockLink.addEventListener("click", function (event) {
      event.preventDefault();
      startClock();
    });
  
    function startClock() {
      var seconds = 0;
      var intervalId = setInterval(function () {
        seconds++;
        footer.textContent = "Has presionado el botón RELOJ hace " + seconds + " segundos";
      }, 1000);
    }
  });
