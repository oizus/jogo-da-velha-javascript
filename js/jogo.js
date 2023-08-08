
var matriz;
var xo = true;
var jogadas = 0;

//Indicar qua é jogador que está jogando 
var o = document.getElementById("o");
var x = document.getElementById("x");
o.style.color = "greenyellow";
o.style.textShadow = "0 0 7px white,0 0 10px white,0 0 21px white,0 0 42px greenyellow,0 0 82px greenyellow,0 0 92px greenyellow,0 0 102px greenyellow,0 0 151px greenyellow";

window.onload = criarTabuleiro();

window.onload = getTextHome();


function criarMatriz() {
    matriz = new Array(3);
    for (var i = 0; i < 3; i++) {
        matriz[i] = new Array(3);
    }
}


function getTextHome() {
    jogador1 = localStorage.getItem("jogador1");
    document.getElementById("jogador1").innerHTML = jogador1;
    jogador2 = localStorage.getItem("jogador2");
    document.getElementById("jogador2").innerHTML = jogador2;
}


function criarTabuleiro() {
    criarMatriz();
    for (var l = 0; l < 3; l++) {
        for (var c = 0; c < 3; c++) {
            var div = document.createElement("div");
            div.setAttribute("class", "boxTabuleiro");
            div.setAttribute("id", `${l}_${c}`);
            div.addEventListener("click", inserirX_O);
            document.getElementById("tabuleiro").appendChild(div);
            matriz[l][c] = "";
        }
    }
}


function inserirX_O(evento) {

    vetIndices = evento.currentTarget.id.split("_");

    if (matriz[parseInt(vetIndices[0])][parseInt(vetIndices[1])] == "" && xo == true) {
        matriz[parseInt(vetIndices[0])][parseInt(vetIndices[1])] = 'O';
        document.getElementById(`${vetIndices[0]}_${vetIndices[1]}`).innerHTML = 'O';
        //document.getElementById(`${vetIndices[0]}_${vetIndices[1]}`).style.boxShadow = 
        x.style.color = "greenyellow";
        o.style.color = "white";
        jogadas++;
        xo = false;
    } else if (matriz[parseInt(vetIndices[0])][parseInt(vetIndices[1])] == "" && xo == false) {
        matriz[parseInt(vetIndices[0])][parseInt(vetIndices[1])] = 'X';
        document.getElementById(`${vetIndices[0]}_${vetIndices[1]}`).innerHTML = 'X';
        o.style.color = "greenyellow";
        x.style.color = "white";
        jogadas++;
        xo = true;
    } else {
        alertWifi("Jogada inválida!!!", false, 0, "img/velha.png", 30);
    }
    /*
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            document.getElementById(`${i}_${j}`).innerHTML = matriz[i][j];           
            
        }
    }    
    */
    checkGanhador();
}


function checkGanhador() {
    var check = false;

    var pos = new Array(8);


    //linhas
    pos[0] = matriz[0][0] + matriz[0][1] + matriz[0][2];
    pos[1] = matriz[1][0] + matriz[1][1] + matriz[1][2];
    pos[2] = matriz[2][0] + matriz[2][1] + matriz[2][2];
    // Colunas
    pos[3] = matriz[0][0] + matriz[1][0] + matriz[2][0];
    pos[4] = matriz[0][1] + matriz[1][1] + matriz[2][1];
    pos[5] = matriz[0][2] + matriz[1][2] + matriz[2][2];
    // Diagonal
    pos[6] = matriz[0][0] + matriz[1][1] + matriz[2][2];
    pos[7] = matriz[0][2] + matriz[1][1] + matriz[2][0];

    console.log(matriz);
    console.log(pos);

    for (i = 0; i < pos.length; i++) {
        if (pos[i] == "OOO") {
            alertWifi(`${jogador1} vencedor!!!`, false, 0, "img/velha.png", 30);
            document.getElementById("player1Score").innerHTML++;
            check = true;
        } else if (pos[i] == "XXX") {
            alertWifi(`${jogador2} vencedor!!!`, false, 0, "img/velha.png", 30);
            document.getElementById("player2Score").innerHTML++;
            check = true;
        }
    }
    if (check == true) {
        reset();
    }

    if (jogadas == 9 && check == false) {
        reset();
        alertWifi("Velha!!!", false, 0, "img/velha.png", 30);
    }

}


function reset() {
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            matriz[i][j] = '';
            document.getElementById(`${i}_${j}`).innerHTML = '';
        }
    }
    jogadas = 0;
}


