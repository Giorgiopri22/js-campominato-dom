function generateGrid() {
    let difficolta = document.getElementById("difficoltà").value;
    let numCells, numCols;
    switch (difficolta) {
      case "1":
        numCells = 100;
        numCols = 10;
        break;
      case "2":
        numCells = 81;
        numCols = 9;
        break;
      case "3":
        numCells = 49;
        numCols = 7;
        break;
    }
    document.documentElement.style.setProperty('--num-cells', numCells);
    document.documentElement.style.setProperty('--num-cols', numCols);
  
    
    
    
    // Genera numeri casuali unici per le bombe
    let bombe = [];
    while (bombe.length < 16) {
        let numeroCasuale = Math.floor(Math.random() * numCells);
        if (!bombe.includes(numeroCasuale)) {
        bombe.push(numeroCasuale);
        }
    }
    // genera numeri casuali unici
    let numeriUnici = [];
    while (numeriUnici.length < numCells) {

      let numeroCasuale = Math.floor(Math.random() * numCells) + 1;
      if (!numeriUnici.includes(numeroCasuale)) {
        numeriUnici.push(numeroCasuale);
      }
    }
    let gridHtml = "";
    for (let i = 0; i < numCells; i++) {
      gridHtml += "<div class='cell' id='cell-" + i + "'>" + numeriUnici[i] + "</div>";
    }
    document.getElementById("grid").innerHTML = gridHtml;
  
    let cells = document.getElementsByClassName("cell");
    let punteggio = 0;
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function() {
        if (bombe.includes(i)) {
            this.style.backgroundColor = "red";
            alert("Hai perso! Il tuo punteggio è " + punteggio);
        } else {
            this.style.backgroundColor = "lightblue";
            punteggio++;
            if (punteggio === numCells - bombe.length) {
            alert("Hai vinto! Il tuo punteggio è " + punteggio);
            }
        }
        });
    } 
  }
  