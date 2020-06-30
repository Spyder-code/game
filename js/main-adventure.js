var soal = ["1+2","B+1","A+0","A++","A+1","C-A","Hindari Hantu!","Anda mendapatkan kunci","hindari Hantu!"];
var gambar = [{
    img:"dor-a.jpg",
    answer:"a"
},{
    img:"dor-b.jpg",
    answer:"b"
},{
    img:"dor-c.jpg",
    answer:"c"
},{
    img:"dor.jpg",
    answer:"dor"
},{
    img:"dor-ghost.jpg",
    answer:"ghost"
},{
    img:"dor-back.jpg",
    answer:"back"
},{
    img:"dor-lock.jpg",
    answer:"lock"
},
];

var stage=[{
    question: soal[0],
    a: gambar[0],
    b: gambar[1],
    c: gambar[2],
    answerA:1,
    answerB:2,
    answerC:4,
},{
    question: soal[1],
    a: gambar[0],
    b: gambar[1],
    c: gambar[2],
    answerA:0,
    answerB:"dead",
    answerC:3,
},{
    question: soal[2],
    a: gambar[0],
    b: gambar[1],
    c: gambar[2],
    answerA:3,
    answerB:"dead",
    answerC:4,
},{
    question: soal[3],
    a: gambar[0],
    b: gambar[1],
    c: gambar[2],
    answerA:1,
    answerB:6,
    answerC:"dead",
},{
    question: soal[4],
    a: gambar[0],
    b: gambar[1],
    c: gambar[2],
    answerA:1,
    answerB:5,
    answerC:"dead",
},{
    question: soal[5],
    a: gambar[0],
    b: gambar[6],
    c: gambar[2],
    answerA:8,
    answerB:"win",
    answerC:8,
},{
    question: soal[6],
    a: gambar[4],
    b: gambar[4],
    c: gambar[3],
    answerA:"dead",
    answerB:"dead",
    answerC:0,
},{
    question: soal[7],
    a: gambar[5],
    b: gambar[4],
    c: gambar[4],
    answerA:0,
    answerB:"dead",
    answerC:"dead",
},{
    question: soal[8],
    a: gambar[4],
    b: gambar[4],
    c: gambar[5],
    answerA:"dead",
    answerB:"dead",
    answerC:0,
},
];


$('.container').hide();
$('.card').hide();
$('#reset').hide();
$('#home').hide();
$('#reset').on('click',function(){
    location.reload();
   });
   $('#home').on('click',function(){
     window.location.href = "http://spydercode.site";
   });
$('#start').on('click',function(){
    $('body').append(' <audio src="audio/adventure/bg.mp3" id="audio"></audio>');
    $(this).hide();
    $('#audio')[0].play();
    $('.card').show();
    $('.info').hide();
    $('.container').show();
    game.loadQuestion();
});

var game={
    currentStage:0,
    key:0,
    loadQuestion:function(){
        $('.soal').html(stage[game.currentStage].question);
        $('#a').html('<img class="gambar" data-id="'+stage[game.currentStage].a.answer+'" src="img/adventure/'+stage[game.currentStage].a.img+'">');
        $('#b').html('<img class="gambar" data-id="'+stage[game.currentStage].b.answer+'" src="img/adventure/'+stage[game.currentStage].b.img+'">');
        $('#c').html('<img class="gambar" data-id="'+stage[game.currentStage].c.answer+'" src="img/adventure/'+stage[game.currentStage].c.img+'">');
        game.selectDor();
    },

    selectDor:function(){
        $('.gambar').on('click',function(){
            var id = $(this).attr('data-id');
            if(id=="a"){
                game.currentStage = stage[game.currentStage].answerA;
                if(game.currentStage=="dead"){
                    game.dead();
                }else{
                game.loadQuestion();}
            }else if(id=="b"){
                game.currentStage = stage[game.currentStage].answerB;
                if(game.currentStage=="dead"){
                    game.dead();
                }else{
                game.loadQuestion();}
            }else if(id=="c"){
                game.currentStage = stage[game.currentStage].answerC;
                if(game.currentStage=="dead"){
                    game.dead();
                }else{
                game.loadQuestion();}
            }else if(id=="ghost"){
                game.ghost();
            }else if(id=="dor"){
                game.currentStage = 7;
                $('.key').html('<img class="kunci" src="img/adventure/kunci.png">');
                game.key=1;
                if(game.currentStage=="dead"){
                    game.dead();
                }else{
                game.loadQuestion();}
            }else if(id=="back"){
                game.currentStage = 0;
                if(game.currentStage=="dead"){
                    game.dead();
                }else{
                game.loadQuestion();}
            }else if(id=="lock"){
                if(game.key==0){
                    $('.soal').html("Pintu terkunci");
                }else{
                    game.win();
                }
            }
        });
    },

    dead:function(){
        $('#audio')[0].pause();
        $('.container').hide();
        $('.card').hide();
        $('.result').append('<img class="harta" src="img/adventure/tertawa.gif">');
        $('body').append(' <audio src="audio/adventure/dead.mp3" id="audio-1"></audio>');
        $('#audio-1')[0].play();
        setTimeout(function(){
            $('#deadVideo').hide();
            $('.result').append("<h1 class='text-center text-light loose'>You Loose</h1>");
            $('#reset').show();
            $('#home').show();
        },3000);
    },

    win:function(){
        $('#audio')[0].pause();
        $('.container').hide();
        $('.card').hide();
        $('.result').append('<img class="harta" src="img/adventure/harta.png">');
        $('.result').append("<h1 class='win text-center text-light'>You win</h1>");
        $('#reset').show();
        $('#home').show();
    },
    ghost:function(){
        $('#audio')[0].pause();
        $('.container').hide();
        $('.card').hide();
        $('body').append('<video id="myVideo"><source src="ghost.mp4" type="video/mp4"></video>');
        $('#myVideo')[0].play();
        setTimeout(function(){
            $('#myVideo').hide();
            $('.result').append("<h1 class='text-center text-light loose'>You Loose</h1>");
            $('#reset').show();
            $('#home').show();
        },7000);
    }
}

