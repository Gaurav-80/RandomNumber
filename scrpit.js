
 let computerGuess;
 let userGuess = [];
 let userGuessUpdate = document.getElementById("textoutput");
 let userNumberUpdate= document.getElementById("input-box");
let audio = new Audio();

 const init = () => {
 	computerGuess = Math.floor(Math.random()*50);
 // console.log(computerGuess);//
 document.getElementById("gamebutton").style.display="none";
document.getElementById("game").style.display="none";
 };
 
 const startGame = () => {
 	document.getElementById("welcome").style.display="none";
 document.getElementById("game").style.display="block";
};


// reload page

const newGameBegin= () => {

    audio.play();
    window.location.reload();
};


 // startNewGame

 const  startNewGame = () => {
document.getElementById("gamebutton").style.display="inline";
userNumberUpdate.setAttribute("disabled",true);
};

// main logic of app

 const compareGuess = () => {
    audio.play();
 const userNumber = Number(document.getElementById("input-box").value);
userGuess = [ ...userGuess,userNumber];
document.getElementById("guesses").innerHTML= userGuess;

//check the value low or high
if(userGuess.length < maxGuess)
{
if(userNumber > computerGuess) {
 userGuessUpdate.innerHTML ="Your guess is high 😲";
 userNumberUpdate.value = ""; }
 else if(userNumber < computerGuess){
 userGuessUpdate.innerHTML ="Your guess is Low 😦";
 userNumberUpdate.value = ""; }
 else {
 userGuessUpdate.innerHTML ="Correct 😃";	
 userNumberUpdate.value = "";
  startNewGame();
 } }
 else
 {
    if(userNumber > computerGuess) {
 userGuessUpdate.innerHTML = `you Loose!! Correct Number was ${computerGuess}`;
 userNumberUpdate.value = ""; 
 startNewGame();}
 else if(userNumber < computerGuess){
 userGuessUpdate.innerHTML = `you Loose!! Correct Number was ${computerGuess}`;
 userNumberUpdate.value = ""; 
  startNewGame();}
 else {
 userGuessUpdate.innerHTML ="Correct 😃";    
 userNumberUpdate.value = "";
  startNewGame();
 } }
document.getElementById("attempts").innerHTML = userGuess.length;
};
 
const easyMode = () => {
    audio.play();
	maxGuess = 10;
	startGame();
};

const hardMode = () => {
    audio.play();
    maxGuess = 5;
	startGame();
};


