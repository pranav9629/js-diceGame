var all_dice_choices = ["dice-six-faces-one.png","dice-six-faces-two.png","dice-six-faces-three.png","dice-six-faces-four.png","dice-six-faces-five.png","dice-six-faces-six.png"];

var player1_output = Math.floor(Math.random() * 6);
var player2_output = Math.floor(Math.random() * 6);

document.querySelector(".dice-image1").setAttribute("src",all_dice_choices[player1_output]);
document.querySelector(".dice-image2").setAttribute("src",all_dice_choices[player2_output]);

if (player1_output > player2_output) {
	document.querySelector(".result").innerText = "****Player1 wins****";
}else if (player1_output < player2_output){
	document.querySelector(".result").innerText = "****Player2 wins****";
}else{
	document.querySelector(".result").innerText = "****DRAW****";
}
