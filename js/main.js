
// set a variable for random dice value and the score
var die1 = Math.floor(Math.random() * 6) + 1
var die2 = Math.floor(Math.random() * 6) + 1
var score

// now, we use if else statement where if die1 or die2 is less than 1 then the score should be zero
if((die1 <= 1)||(die2 <= 1)){
	score = 0
}
// another if else statement stating if die1 and die2 value are equal then the score should be doubled or else score value will be the addition of die1 and die2
else{
	if(die1 = die2){
		score = 2 * (die1 + die2)
	}
	else{
		score = die1 + die2
	}
}

// finally we console.log the result. 
console.log("You rolled a "+die1+" and a "+die2+" for a score of "+score);