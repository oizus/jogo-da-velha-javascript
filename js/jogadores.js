function jogadores() {
    var jogador1 = document.getElementById("jogador1").value;
    var jogador2 = document.getElementById("jogador2").value;
    if (jogador1  == "" && jogador2  == "") {
        jogador1 = "Jogador 1";   
        jogador2 = "Jogador 2"; 
        document.getElementById("jogador1").value = jogador1;
        document.getElementById("jogador2").value = jogador2;
        localStorage.setItem("jogador1",jogador1);
        localStorage.setItem("jogador2",jogador2);
        window.open('jogo.html', '_self');
    } else if (jogador1  == ""){
        jogador1 = "Jogador 1"; 
        document.getElementById("jogador1").value = jogador1;
        localStorage.setItem("jogador1",jogador1);
        localStorage.setItem("jogador2",jogador2);
        window.open('jogo.html', '_self');                
    } else if (jogador2 == ""){
        jogador2 = "Jogador 2"; 
        document.getElementById("jogador2").value = jogador2; 
        localStorage.setItem("jogador1",jogador1);
        localStorage.setItem("jogador2",jogador2);
        window.open('jogo.html', '_self');    
    } else {
        localStorage.setItem("jogador1",jogador1);
        localStorage.setItem("jogador2",jogador2);
        window.open('jogo.html', '_self');
    }
} 