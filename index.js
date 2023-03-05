
var player1 = Math.floor(Math.random()*6)+1;;
var player2 = Math.floor(Math.random()*6)+1;;
var image1 = "images/dice"+player1+".png";
var image2 = "images/dice"+player2+".png";

if(player1 > player2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
    document.querySelector(".img1").setAttribute("src",image1);
    document.querySelector(".img2").setAttribute("src",image2);
}

else if(player2 > player1){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
    document.querySelector(".img1").setAttribute("src",image1);
    document.querySelector(".img2").setAttribute("src",image2);
}

else if(player1 === player2){
    document.querySelector("h1").innerHTML = "Draw";
    document.querySelector(".img1").setAttribute("src",image1);
    document.querySelector(".img2").setAttribute("src",image2);
}