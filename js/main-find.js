$('.img').hide();
$('.inf-1').hide();
$('.card').hide();
$('#start').on('click',function(){
  $('#audio-3')[0].play();
  $(this).remove();
  $('.img').show();
  $('.inf-1').show();
  game.loadQuestion();
  game.select();
  timer = setInterval(game.countdown,1000);
  $('#time').html("<h2 class='waktu'> Time : <span id ='counter'>30</span> Seconds</h2>");
});

$('#reset').on('click',function(){
  location.reload();
 });
 $('#home').on('click',function(){
   window.location.href = "http://spydercode.site";
 });


  var question = ["anjing.png","ayam.png","babi.png","bebek.png","beruang.png","jerapah.png","kelinci.png","koala.png","kucing.png","landak.png","panda.png","rusa.png","sapi.png","serigala.png","singa.png","tikus.png","tupai.png"];

  var game = {
    correct:0,
    inCorrect:0,
    image : Math.floor(Math.random()*17),
    currentQuestion : Math.floor(Math.random()*17),
    no:1,
    counter:30, 

    countdown: function(){
      game.counter --;
      $('#counter').html(game.counter); 
      if(game.counter<=0){
          game.timeUp();
      }
  },

    loadQuestion:function(){
      if (window.matchMedia('(max-width: 600px)').matches) {
        var jumlahImg = 90;
        var t = 80;
      } else {
        var jumlahImg = 110;
        var t = 100;
      }
      $('.gambar').css('background-color','');
      game.no++;
      game.currentQuestion = Math.floor(Math.random()*17);
      var a = Math.floor(Math.random()*t+1);
      for(var i=0;i<jumlahImg;i++){ 
        game.image = Math.floor(Math.random()*17);
        if(game.currentQuestion==game.image){
          game.image = Math.floor(Math.random()*17);
          i--;
        }else{
          if(game.no==2){
            $('.img').append('<img class="gambar" id="'+i+'" data-id="'+game.image+'" src="img/'+question[game.image]+'">');
          }else{
            $('#'+i).attr('src',"img/"+question[game.image]);
            $('#'+i).attr('data-id',game.image);
          }
        }
      }
      
      $('#'+a).attr('src',"img/"+question[game.currentQuestion]);
      $('#'+a).attr('data-id',game.currentQuestion);

      $('#soal').html('<img class="soal" src="img/'+question[game.currentQuestion]+'">')
      
    },

    select:function(){
      $('.gambar').on('click',function(){
        var image = $(this).attr("data-id");
        
        var id = $(this).attr("id");
        console.log(id);
        game.check(image,id);
      });
    },

    check:function(image,id){
      if(image==game.currentQuestion){
        $('#audio-1')[0].play();
        game.correct++;
        $('#score').html(game.correct*10);
        game.loadQuestion();
      }else{
        $('#audio-2')[0].play();
        game.inCorrect++;
        $('#miss').html(game.inCorrect);
        $('#'+id).css('background-color','red');
      }
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
        $('.result').append("<h1 class='hasil'> Your score : "+game.correct*10);
        $('.result').append("<h1 class='benar'>Corrrect   : "+game.correct);
        $('.result').append("<h1 class='salah'>Incorrect  : "+game.inCorrect);
    }
  }
  

    
