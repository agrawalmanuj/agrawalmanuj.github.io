var scores, roundScore, activePlayer, gamePlaying;

scores=[0,0];
roundScore=0;
activePlayer=0;
//dice=Math.floor(Math.random()*6) + 1;
//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice;


//document.querySelector('.dice').style.display = 'none';

document.querySelector('#score-0').textContent = '0';

document.querySelector('#score-1').textContent = '0';

document.querySelector('#current-0').textContent = '0';

document.querySelector('#current-1').textContent = '0';



document.querySelector('#btn1').addEventListener('click',function(){

var dice=Math.floor(Math.random()*6) + 1;

var diceDOM = document.querySelector('.dice');
	
	diceDOM.style.display = 'block';

	diceDOM.src = 'dice-' + dice +'.png';


	if(dice!==1){

		roundScore += dice;


		document.querySelector('#current-' + activePlayer).textContent = roundScore;


	}

	else{

		win();


	}








});


document.querySelector('#btn2').addEventListener('click',function(){

scores[activePlayer] += roundScore;

document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
var p=activePlayer+1;

if(scores[activePlayer] >= 100){

	alert('PLAYER-' + p + ' '+ 'WIN');
	//document.querySelector('#m-' + activePlayer).innerHTML = 'WINNER!!';
}

if(scores[activePlayer] < 100){
	win();
}






});



function win(){


activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

		roundScore = 0;

		document.querySelector('#current-0').textContent = '0';
		document.querySelector('#current-1').textContent = '0';
		if(activePlayer==1){
		document.querySelector('.p1').classList.remove('change1');
		document.querySelector('.p2').classList.add('change1');
	}
	else if(activePlayer==0){
		document.querySelector('.p2').classList.remove('change1');
		document.querySelector('.p1').classList.add('change1');
	}


}