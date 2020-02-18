var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

//if we click on the start/reset button
document.getElementById("startreset").onclick = 
function(){

    //if we are playing
    if(playing == true){

        location.reload();//reload page

    }else{ //if we are not playing

        //change mode to playing
        playing = true;

        //set score to 0
        score = 1;

        document.getElementById("scorevalue").innerHTML = 
        score;

        //show countdown box
        show("timeremaining");

            timeremaining = 60;

            document.getElementById("timeremainingvalue").innerHTML = timeremaining;

            //hide game over box
            hide("gameover");

        //change button to reset
        document.getElementById("startreset").innerHTML = 
        "Reset Game";

            //start countdown
            startCountdown();


            //generate a new question and multiple answers

           
        }
}
        



        //reduce time by 1 sec in loops
            //if there is time left?
                //yes->continue
                //no->gameover

        //generate new Q&A


//if we click on answer box
    //if we are playing
        //correct?
            //yes
                //increase score
                //show corrrect box or a sec
                
                //generate new Q&A
            //no
                //show try again box for a sec


//functions


        //start counter
                function startCountdown(){

            action = setInterval(function(){
                timeremaining -= 1;

            document.getElementById("timeremainingvalue").innerHTML = timeremaining;

                if(timeremaining == 0){//game over
                    stopCountdown();
                show("gameover");

                document.getElementById("gameover").innerHTML = "<p>Game Over!</p><p>Your score is " + score + ".</p.";

                    hide("timeremaining");
                    hide("correct");
                    hide("wrong");
                    playing = false;

                    document.getElementById("startreset").innerHTML = "Start Game";
                }
            }, 1000);
        }

        //stop counter
        function stopCountdown(){
            clearInterval(action);
        }

        //hide element
        function hide(Id){
            document.getElementById(Id).style.display = "none";
        }

        //show an element
        function show(Id){
            document.getElementById(Id).style.display = "block";
        }

        //generate question and multiple answers
        function generateQA(){

            var x = 1+ Math.round(9*Math.random());
            var y = 1+ Math.round(9*Math.random());
            correctAnswer = x*y;

            document.getElementById("question").innerHTML = x + "x" + y;

                var correctPosition = 1+
                Math.round(3*Math.random());

                document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //fill one box with the correct answer

                //fill other boxes with wrong answers
                for (i=1; i<5; i++){
                    if(i !== correctPosition){

                        var wrongAnswer = (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random())); //a wrong answer

                            document.getElementById("box"+i).innerHTML = wrongAnswer;
                    }
                }

        }