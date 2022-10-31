function myFunc(){

	//setting variables
let b1, b2, b3, b4, b5, b6, b7, b8, b9;
b1 = document.getElementById("b1").value;
b2 = document.getElementById("b2").value;
b3 = document.getElementById("b3").value;
b4 = document.getElementById("b4").value;
b5 = document.getElementById("b5").value;
b6 = document.getElementById("b6").value;
b7 = document.getElementById("b7").value;
b8 = document.getElementById("b8").value;
b9 = document.getElementById("b9").value;

//checking if player X win

if ((b1 == "x" || b1 == "X") && (b2 == "x" || b2 == "X") && (b3 == "x" || b3 == "X")){
	window.alert ("Player X win");
} 
else if ((b1 == "x" || b1 == "X") && (b4 == "x" || b4 == "X") && (b7 == "x" || b7 == "X")){
	window.alert ("Player X win");
}
else if ((b1 == "x" || b1 == "X") && (b5 == "x" || b5 == "X") && (b9 == "x" || b9 == "X")){
	window.alert("Player X win");
}
else if ((b2 == "x" || b2 == "X") && (b5 == "x" || b5 == "X") && (b8 == "x" || b8 == "X")){
	window.alert("Player X win");
}
else if ((b3 == "x" || b3 == "X") && (b6 == "x" || b6 == "X") && (b9 == "x" || b9 == "X")){
	window.alert("Player X win");
}
else if ((b3 == "x" || b3 == "X") && (b5 == "x" || b5 == "X") && (b7 == "x" || b7 == "X")){
	window.alert("Player X win");
}
else if ((b4 == "x" || b4 == "X") && (b5 == "x" || b5 == "X") && (b6 == "x" || b6 == "X")){
	window.alert("Player X win");
}
else if ((b7 == "x" || b7 == "X") && (b8 == "x" || b8 == "X") && (b9 == "x" || b9 == "X")){
	window.alert ("Player X win");
}


// checking if Player O win

if ((b1 == "o" || b1 == "O") && (b2 == "o" || b2 == "O") && (b3 == "o" || b3 == "O")){
	window.alert ("Player O win");
} 
else if ((b1 == "o" || b1 == "O") && (b4 == "o" || b4 == "O") && (b7 == "o" || b7 == "O")){
	window.alert ("Player O win");
}
else if ((b1 == "o" || b1 == "O") && (b5 == "o" || b5 == "O") && (b9 == "o" || b9 == "O")){
	window.alert("Player O win");
}
else if ((b2 == "o" || b2 == "O") && (b5 == "o" || b5 == "O") && (b8 == "o" || b8 == "O")){
	window.alert("Player O win");
}
else if ((b3 == "o" || b3 == "O") && (b6 == "o" || b6 == "O") && (b9 == "o" || b9 == "O")){
	window.alert("Player O win");
}
else if ((b3 == "o" || b3 == "O") && (b5 == "o" || b5 == "O") && (b7 == "o" || b7 == "O")){
	window.alert("Player O win");
}
else if ((b4 == "o" || b4 == "O") && (b5 == "o" || b5 == "O") && (b6 == "o" || b6 == "O")){
	window.alert("Player O win");
}
else if ((b7 == "o" || b7 == "O") && (b8 == "o" || b8 == "O") && (b9 == "o" || b9 == "O")){
	window.alert ("Player O win");
}
}

// Switch players
let flag = 1;

function myFunc_1(){
	if (flag == 1){
		document.getElementById("b1").value = "X";
		flag = 0;
	} else{
		document.getElementById("b1").value = "O";
		flag = 1;
	}
}

function myFunc_2 () {
	if (flag == 1){
		document.getElementById("b2").value = "X";
		flag = 0;
	} else {
		document.getElementById("b2").value = "O";
		flag = 1;
	}
}

function myFunc_3 (){
	if (flag == 1){
		document.getElementById("b3").value = "X";
		flag = 0;
	} else {
		document.getElementById ("b3").value = "O";
		flag = 1;
	}
}


function myFunc_4 () {
	if (flag == 1){
		document.getElementById("b4").value = "X";
		flag = 0;
	} else {
		document.getElementById("b4").value = "O";
		flag = 1;
	}
}

function myFunc_5 () {
	if (flag == 1){
		document.getElementById("b5").value = "X";
		flag = 0;
	} else {
		document.getElementById("b5").value = "O";
		flag = 1;
	}
}

function myFunc_6 () {
	if (flag == 1) {
		document.getElementById("b6").value = "X";
		flag = 0;
	} else {
		document.getElementById("b6").value = "O";
		flag = 1;
		}
}

function myFunc_7 (){
	if (flag == 1){
		document.getElementById("b7").value = "X";
		flag = 0;
	} else {
		document.getElementById("b7").value = "O";
		flag = 1;
	}
}

function myFunc_8 (){
	if (flag == 1){
		document.getElementById("b8").value = "X";
		flag = 0;
	} else {
		document.getElementById("b8").value = "O";
		flag = 1;  
	}
}

function myFunc_9 (){
	if (flag == 1){
		document.getElementById("b9").value = "X";
		flag = 0;
	} else {
		document.getElementById("b9").value = "O";
		flag = 1;
	}
}


// restart button function
function funReload(){
	location.reload();
	document.getElementById("b1").value="";
	document.getElementById("b2").value="";
	document.getElementById("b3").value="";
	document.getElementById("b4").value="";
	document.getElementById("b5").value="";
	document.getElementById("b6").value="";
	document.getElementById("b7").value="";
	document.getElementById("b8").value="";
	document.getElementById("b9").value="";
}