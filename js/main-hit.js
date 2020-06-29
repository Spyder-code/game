// remove the start button when clicked
$('#time').hide();
$('#reset').hide();
$('#home').hide();
$('#notif').hide();
$('#phone').hide();
$('#start').on('click', function(){
  $('#audio-2')[0].play();
  if (window.matchMedia('(max-width: 600px)').matches) {
} else {
  $('#phone').remove();
}
  $('#stage-1').css({'top':'1000px'});
  $('#start').remove();
  $('#notif').show();
  $('#phone').show();
  $('#time').show();
  $('.button').css({ 'margin-top' : '', 'opacity' : '' });
  $('#notif').css({ 'margin-top' : '', 'opacity' : '' });
  $('#phone').css({'margin-top':'310px'});
  timer = setInterval(game.countdown,1000);
  game.loadQuestion();

})
$('#up').on('click',function(){
  game.answer = "up";
  game.check();
});
$('#down').on('click',function(){
  game.answer = "down";
  game.check();
});
$('#left').on('click',function(){
  game.answer = "left";
  game.check();
});
$('#right').on('click',function(){
  game.answer = "right";
  game.check();
});

$('#reset').on('click',function(){
 location.reload();
});
$('#home').on('click',function(){
  window.location.href = "http://spydercode.site";
});

$('#time').html("<h1 id='timess'><span id ='counter'>30</span> Seconds</h1>");
// click event when you click the answer

$('#form').submit(function(){
  game.check();
})



// Variable for questions, an array of objects 

var questions = [{
  question: "Who?",
  correctAnswer: "right",
  image: "img/right.png",
  false: "img/right-false.png",
  true: "img/right-true.png",
}, {
  question: "Who?",
  correctAnswer: "left",
  image: "img/left.png",
  false: "img/left-false.png",
  true: "img/left-true.png",
}, {
  question: "Who?",
  correctAnswer: "down",
  image: "img/down.png",
  false: "img/down-false.png",
  true: "img/down-true.png",
},{
  question: "Who?",
  correctAnswer: "up",
  image: "img/up.png",
  false: "img/up-false.png",
  true: "img/up-true.png",
},
];

var soal=[1,2,3,4,5];


key = function(){
  resetKey();
  game.answer="";
  $('body').keyup(function(e){
    if(e.keyCode==37){
      game.answer = "left";
      game.check();
    }
    else if(e.keyCode==38){
      game.answer = "up";
      game.check();
    }
    else if(e.keyCode==39){
      game.answer = "right";
      game.check();
    }
    else if(e.keyCode==40){
      game.answer = "down";
      game.check();
    }
  })
}

resetKey = function(){
  $('body').off('keyup');
};

var game = {
  i:0,
  answer:"",
  questions:questions,
  currentQuestion1:Math.floor(Math.random() * 4), 
  currentQuestion2:Math.floor(Math.random() * 4), 
  currentQuestion3:Math.floor(Math.random() * 4), 
  currentQuestion4:Math.floor(Math.random() * 4), 
  currentQuestion5:Math.floor(Math.random() * 4), 
  counter:30, 
  correct:0,
  incorrect:0,
  unanswered:0,
  
  countdown: function(){
      game.counter --;
      $('#counter').html(game.counter); 
      if(game.counter<=0){
          game.timeUp();
      }
  },
  // loadQuestion: function (){
  //     timer = setInterval(game.countdown,1000);
  //     $('#subwrapper').html("<h2> Time to Guess: <span id ='counter'>30</span> Seconds</h2>");
  //     $('#subwrapper').append('<h2>'+questions[game.currentQuestion].question+'</h2>');
  //     for(var i=0;i<questions[game.currentQuestion].answers.length;i++){
  //         $('#subwrapper').append('<button class="answer-button id="button- '+i+'" data-name="'+questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>');
  //     }
  // },

  loadQuestion: function (){
    key();
      
      // $('#subwrapper').append('<h1>'+questions[game.currentQuestion].question+'</h1>');
      $('#score').html('<h1 class="score">Score '+game.correct*10+'</h1>');
      $('#image1').html('<img class="gambar" src="'+questions[game.currentQuestion1].image+'">');
      $('#image2').html('<img class="gambar" src="'+questions[game.currentQuestion2].image+'">');
      $('#image3').html('<img class="gambar" src="'+questions[game.currentQuestion3].image+'">');
      $('#image4').html('<img class="gambar" src="'+questions[game.currentQuestion4].image+'">');
      $('#image5').html('<img class="gambar" src="'+questions[game.currentQuestion5].image+'">');
  },
  nextQuestion: function(){
      // game.counter = 10;
      // $('#counter').html(game.counter);
      game.currentQuestion1 =Math.floor(Math.random() * 4);
      game.currentQuestion2 =Math.floor(Math.random() * 4);
      game.currentQuestion3 =Math.floor(Math.random() * 4);
      game.currentQuestion4 =Math.floor(Math.random() * 4);
      game.currentQuestion5 =Math.floor(Math.random() * 4);
      game.loadQuestion();

  },
  timeUp: function(){
      clearInterval(timer);
      game.results();
      // game.nextQuestion();
      // game.unanswered++;
      // // $('#subwrapper').html('<h2>Out of time!<h2>');
      // // $('#subwrapper').append('<h3>The correct answer was: '+questions[game.currentQuestion].correctAnswer+'</h3>');
      // if(game.currentQuestion==questions.length-1){
      //     setTimeout(game.results,3*1000);
      // } else{
      //     game.nextQuestion;
      // }

  },
  results: function(){
      clearInterval(timer);
      $('#time').remove();
      $('#image1').remove();
      $('#image2').remove();
      $('#image3').remove();
      $('#image4').remove();
      $('#image5').remove();
      $('#score').remove();
      $('#phone').remove();
      $('#notif').remove();
      $('#reset').show();
      $('#home').show();
      $('#subwrapper').html('<h1 class="complete">Complete!</h1>')
      $('#subwrapper').append(" Your Score " +game.correct*10+ '<br/>');
      $('#subwrapper').append(" Correct = " +game.correct+ '<br/>');
      $('#subwrapper').append(" Incorrect = " +game.incorrect+ '<br/>');
      $( "body" ).off( "keyup" );
  },

  // clicked: function(e){
  //     clearInterval(timer);
  //     if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
  //         game.answeredCorrectly();
  // } else {
  //     game.answeredIncorrectly();
  // }

  // },

  check: function(){

    
      // clearInterval(timer);
      if(soal[game.i]==1){
        game.i++;
        if(game.answer==questions[game.currentQuestion1].correctAnswer){
          game.correct++;
          $('#image1').html('<img class="gambar" src="'+questions[game.currentQuestion1].true+'">');
          setTimeout(function(){  key(); }, 100);
        }else {
          $('#audio-5')[0].play();
          game.incorrect++;
          $('#image1').html('<img class="gambar" src="'+questions[game.currentQuestion1].false+'">');
          setTimeout(function(){ key(); }, 100);
            // game.answeredIncorrectly();
        }
      }
      else if(soal[game.i]==2){
        game.i++;
        if(game.answer==questions[game.currentQuestion2].correctAnswer){
          game.correct++;
          $('#image2').html('<img class="gambar" src="'+questions[game.currentQuestion2].true+'">');
          setTimeout(function(){  key(); }, 100);
        }else {
          $('#audio-5')[0].play();
          game.incorrect++;
          $('#image2').html('<img class="gambar" src="'+questions[game.currentQuestion2].false+'">');
          setTimeout(function(){ key(); }, 100);
            // game.answeredIncorrectly();
        }
      }
      else if(soal[game.i]==3){
        game.i++;
        if(game.answer==questions[game.currentQuestion3].correctAnswer){
          game.correct++;
          $('#image3').html('<img class="gambar" src="'+questions[game.currentQuestion3].true+'">');
          setTimeout(function(){  key();;
           }, 100);
        }else {
          $('#audio-5')[0].play();
          game.incorrect++;
          $('#image3').html('<img class="gambar" src="'+questions[game.currentQuestion3].false+'">');
          setTimeout(function(){ key();; }, 100);
            // game.answeredIncorrectly();
        }
      }
      else if(soal[game.i]==4){
        game.i++;
        if(game.answer==questions[game.currentQuestion4].correctAnswer){
          game.correct++;
          $('#image4').html('<img class="gambar" src="'+questions[game.currentQuestion4].true+'">');
          setTimeout(function(){  key();;
           }, 100);
        }else {
          $('#audio-5')[0].play();
          game.incorrect++;
          $('#image4').html('<img class="gambar" src="'+questions[game.currentQuestion4].false+'">');
          setTimeout(function(){ key();; }, 100);
            // game.answeredIncorrectly();
        }
      }
      else if(soal[game.i]==5){
        game.i = 0;
        if(game.answer==questions[game.currentQuestion5].correctAnswer){
          game.correct++;
          $('#image5').html('<img class="gambar" src="'+questions[game.currentQuestion5].true+'">');
          setTimeout(function(){  game.nextQuestion();
           }, 100);
        }else {
          $('#audio-5')[0].play();
          game.incorrect++;
          $('#image5').html('<img class="gambar" src="'+questions[game.currentQuestion5].false+'">');
          setTimeout(function(){ game.nextQuestion(); }, 100);
            // game.answeredIncorrectly();
        }
      }

          
  },

  answeredCorrectly: function(){
      clearInterval(timer);
      game.correct++;
      if(game.currentQuestion==questions.length-1){
          setTimeout(game.results,1*1000);
      } else{
          setTimeout(game.nextQuestion,1*1000);
      }

  },

  answeredIncorrectly: function(){
      console.log("wrong")
      clearInterval(timer);
      game.incorrect++;
      if(game.currentQuestion==questions.length-1){
          setTimeout(game.results,1*1000);
      } else{
          setTimeout(game.nextQuestion,1*1000);
      }

  },
  reset: function(){
      game.currentQuestion = 0;
      game.counter = 0;
      game.correct = 0;
      game.incorrect = 0;
      game.unanswered = 0;
      game.loadQuestion();

  }

}