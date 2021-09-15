randomnumber1=Math.floor(Math.random()*6)+1;
randomnumber2=Math.floor(Math.random()*6)+1;
var s1="dice"+(randomnumber1)+".png";
var s2="dice"+(randomnumber2)+".png";
document.getElementById("player1").setAttribute("src",s1);
document.getElementById("player2").setAttribute("src",s2);

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").textContent="🚩️Player1 Wins";
}
if(randomnumber1<randomnumber2)
{
    document.querySelector("h1").textContent="Player2 Wins🚩️";
}
if(randomnumber1==randomnumber2)
{
    document.querySelector("h1").textContent="🚩️Draw🚩️";
}

// if(randomnumber1==1)
// {
//     document.getElementById("player1").setAttribute("src","dice1.png");
// }
// if(randomnumber1==2)
// {
//     document.getElementById("player1").setAttribute("src","dice2.png");
// }
// if(randomnumber1==3)
// {
//     document.getElementById("player1").setAttribute("src","dice3.png");
// }
// if(randomnumber1==4)
// {
//     document.getElementById("player1").setAttribute("src","dice4.png");
// }
// if(randomnumber1==5)
// {
//     document.getElementById("player1").setAttribute("src","dice5.png");
// }
// if(randomnumber1==6)
// {
//     document.getElementById("player1").setAttribute("src","dice6.png");
// }
// if(randomnumber2==1)
// {
//     document.getElementById("player2").setAttribute("src","dice1.png");
// }
// if(randomnumber2==2)
// {
//     document.getElementById("player2").setAttribute("src","dice2.png");
// }
// if(randomnumber2==3)
// {
//     document.getElementById("player2").setAttribute("src","dice3.png");
// }
// if(randomnumber2==4)
// {
//     document.getElementById("player2").setAttribute("src","dice4.png");
// }
// if(randomnumber2==5)
// {
//     document.getElementById("player2").setAttribute("src","dice5.png");
// }
// if(randomnumber2==6)
// {
//     document.getElementById("player2").setAttribute("src","dice6.png");
// }