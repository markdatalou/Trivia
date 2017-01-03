$("#start").on("click", function(){
	console.log("start button pressed");
	game.start();
})




// Create an array of ojects
questions = [{
	question: "what was the first full length CGI movie",
	answers: ["A Bugs life", "Monsters Inc", "Toy Story", "The Lion King"],
	correctAnswer: "Toy Story"
 }, 
{
	question: "Which of these is not the same as Spice Girls",
	answers: ["sporty spice", "don spice", "cool spice", "sweet spice"],
	correctAnswer: "sporty spice"
 },
{
	question: "Which NBA team won the most cities in the 90s?",
	answers: ["Portland Trailblazers", "San Antonio Spurs", "LA Lakers", "Chicago Bulls"],
	correctAnswer: "LA Lakers"
 },
 {
	question: "Which group rleased the hit song, Keep Your Head To The Sky",
	answers: ["Bone Thugs and Harmony", "Donny Hathaway", "Teddy P", "Earth Wind and Fire"],
	correctAnswer: "Earth Wind and Fire"
 },
 {
	question: "Which popular book by John Grisham became a movie set in Tennessee, starring Tom Cruise?",
	answers: ["Switch Blade", "Lost", "Game of Thrones", "The Firm", "Lion King"],
	correctAnswer: "The Firm"
 },
{
	question: "Provide the last word of Prince s 1984 hit song, When Doves ....",
	answers: ["A Bugs life", "Monsters Inc", "Toy Story", "The Lion King"],
	correctAnswer: "Toy Story"
 }];

var game = {
	correct: 0,
	incorrect: 0,
	counter:3,
	// begin countdown function
	countdown: function(){  
		console.log("entered countdown");
		game.counter--;
		$("#counter").html(game.counter);
		if (game.counter<=0){
			console.log("Time is up");
			game.done();
		}
	},  
	// end countdown function

	// begin start function
	start: function(){      
		timer = setInterval(game.countdown,1000);
		
		$("#subwrapper").prepend('<h2> Time Remaining: <span id="counter">120</span>seconds </h2>');
		$("#start").remove();
		//$("#start").on("click", function(){ 
		// console.log("button clicked"); 	
		// begin for i loop		
		/********************************************************/
		/* This for loop writes all 6 of the trivia             */
		/* questions to the subwrapper element of the           */
		/********************************************************/
		for (var i=0; i<questions.length; i++){
			// Debug logging
			console.log("entered the question for-loop");
			$("#subwrapper").append("<h2>" + questions[i].question+"</h2>")
			// begin for j loop
			for (var j=0; j<questions[i].answers.length; j++){
				// Debug logging
				console.log("entered the answers for-loop");
				$("#subwrapper").append("<input type='radio' name='question-"+i+"'value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]);
				}  
			// end for j loop
			}	
		// end for i loop	
		},	
	// end start function

	/*********************************************************/
	/* the done function checks the answer to each question  */
	/* for each correct answer, it increments correct by 1   */
	/* for eah incorrect answer,it increaments incorrect by 1*/
	/*********************************************************/

	done: function(){
		// look for each element that has name question and currently checked 
		console.log("entering done function");
		$.each($('input[name="question-0]":checked'),function(){
			console.log("checking answer 0");
			if($(this).val()==questions[0].correctAnswer){
				game.correct++;  // right answer bumps correct by 1
				} else {
					game.incorrect++;
				}				 // wrong answer bumps incorrect by 1
		});

		$.each($('input[name="question-1]":checked'),function(){
			console.log("checking answer 1");
			if($(this).val()==questions[1].correctAnswer){
				game.correct++;  // right answer bumps correct by 1
				} else {
					game.incorrect++;
				}				 // wrong answer bumps incorrect by 1
		});
		$.each($('input[name="question-2]":checked'),function(){
			console.log("checking answer 2");
			if($(this).val()==questions[2].correctAnswer){
				game.correct++;  // right answer bumps correct by 1
				} else {
					game.incorrect++;
				}				 // wrong answer bumps incorrect by 1
		});
		$.each($('input[name="question-3]":checked'),function(){
			console.log("checking answer 3");
			if($(this).val()==questions[3].correctAnswer){
				game.correct++;  // right answer bumps correct by 1
				} else {
					game.incorrect++;
				}				 // wrong answer bumps incorrect by 1
		});

		$.each($('input[name="question-4]":checked'),function(){
			console.log("checking answer 4");
			if($(this).val()==questions[4].correctAnswer){
				game.correct++;  // right answer bumps correct by 1
				} else {
					game.incorrect++;
				}				 // wrong answer bumps incorrect by 1
		});
		$.each($('input[name="question-5]":checked'),function(){
			console.log("checking answer 5");
			if($(this).val()==questions[5].correctAnswer){
				game.correct++;  // right answer bumps correct by 1
				} else {
					game.incorrect++;
				}				 // wrong answer bumps incorrect by 1
		});

		

		this.result();
		},
		result: function(){
			// Debug code
			console.log("entering result");
			clearInterval(timer);
			$("#subwrapper h2").remove();
			$("#subwrapper").html("<h2>All Done</h2");
			$("#subwrapper").append("<h3>Correct Answers: "+this.correct+"</h3>");
			$("#subwrapper").append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
	 		$("#subwrapper").append("<h3>Unanswered  :"+(questions.length-(this.incorrect+this.correct))+"</h3>");
		}

	// end of done function
	} 
	// end of game object
	

