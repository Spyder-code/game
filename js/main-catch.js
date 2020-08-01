$('.img').hide();
$('.inf-1').hide();
$('.card').hide();
$('.area').hide();
$('#start').on('click',function(){
  $('#sound').append('<audio src="audio/bg.mp3" id="audio-2"></audio>');
  $('#audio-2')[0].play();
  $('.area').show();
  $(this).remove();
  $('.tips').remove();
  $('.img').show();
  $('.inf-1').show();
  game.loadQuestion();
  timer = setInterval(game.countdown,1000);
  $('#time').html("<h2 class='waktu'> Time : <span id ='counter'>30</span> Seconds</h2>");
});

$('#reset').on('click',function(){
  location.reload();
 });
 $('#home').on('click',function(){
   window.location.href = "http://spydercode.site";
 });

  var pos = [{
    left:50,
    top:150
  },{
    left:200,
    top:150
  },{
    left:350,
    top:150
  },{
    left:500,
    top:150
  },{
    left:650,
    top:150
  },{
    left:800,
    top:150
  },{
    left:50,
    top:290
  },{
    left:200,
    top:290
  },{
    left:350,
    top:290
  },{
    left:500,
    top:290
  },{
    left:650,
    top:290
  },{
    left:800,
    top:290
  },{
    left:50,
    top:420
  },{
    left:200,
    top:420
  },{
    left:350,
    top:420
  },{
    left:500,
    top:420
  },{
    left:650,
    top:420
  },{
    left:800,
    top:420
  }
]
  var pos2 = [{
    left:20,
    top:120
  },{
    left:120,
    top:120
  },{
    left:210,
    top:120
  },{
    left:310,
    top:120
  },{
    left:20,
    top:220
  },{
    left:120,
    top:220
  },{
    left:210,
    top:220
  },{
    left:310,
    top:220
  },{
    left:20,
    top:320
  },{
    left:120,
    top:320
  },{
    left:210,
    top:320
  },{
    left:310,
    top:320
  },{
    left:20,
    top:420
  },{
    left:120,
    top:420
  },{
    left:210,
    top:420
  },{
    left:310,
    top:420
  },
]

  var game = {
    correct:0,
    image : Math.floor(Math.random()*17),
    currentQuestion : Math.floor(Math.random()*17),
    counter:30, 
    time:1500, 

    countdown: function(){
      game.counter --;
      $('#counter').html(game.counter); 
      $('#score').html(game.correct*10); 
      if(game.counter<=0){
          game.timeUp();
      }
  },

    loadQuestion:function(){
      game.countdownItem();
      if (window.matchMedia('(max-width: 600px)').matches) {
        var posRan = Math.floor(Math.random()*16);
          $('#item').html('<img class="item" src="img/serigala.png" style="position:absolute;top:'+pos2[posRan].top+'px;left:'+pos2[posRan].left+'px">');
      } else {
        var posRan = Math.floor(Math.random()*18);
        $('#item').html('<img class="item" src="img/serigala.png" style="position:absolute;top:'+pos[posRan].top+'px;left:'+pos[posRan].left+'px">');
      }
        game.select();
    },

    countdownItem: function () {  
      if(game.counter<=25 && game.counter>20){
        game.time = 900;
      }else if(game.counter<=20 && game.counter>15){
        game.time = 800;
      }else if(game.counter<=15 && game.counter>10){
        game.time = 700;
      }else if(game.counter<=10 && game.counter>5){
        game.time = 600;
      }else if(game.counter<=5 && game.counter>0){
        game.time = 500;
      }
      timeout = setTimeout(function () {
        game.loadQuestion();
        },game.time);
    },

    select:function(){
      $('.item').on('click',function(){
        $('#sound').append('<audio src="audio/click.mp3" id="audio-1"></audio>');
        $('#audio-1')[0].play();
        var nilai = game.correct++;
        clearTimeout(timeout);
        game.loadQuestion();
        console.log(nilai);
      });
    },

    timeUp:function(){
      clearInterval(timer);
      game.results();
    },

    results:function(){
        $('.inf-1').hide();
        $('.card').show();
        $('.img').remove();
        $('#soal').remove();
        $('#score').remove();
        $('#time').remove();
        $('.area').remove();
        $('.result').append("<h1 class='hasil mt-3'> Your score : "+game.correct*10);
        $('.result').append("<h1 class='benar'>Corrrect   : "+game.correct);
    }
  }
  

    
