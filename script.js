$(document).ready(function () {
    var turn = "comp",
        num = 1,
        seq = [],
        userSeq = [];
    var audio1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
    var audio2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
    var audio3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
    var audio4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
    var audio = [audio1, audio2, audio3, audio4];
    
    function randomNumber() {
    return Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    }   

    $("#1").on("click", function () {
        if (turn == "user") {
            userSeq.push(1);
            audio1.play();
            $("#1").fadeTo(60, 0.4); 
            $("#1").fadeTo(60, 1); 

            if (userSeq[userSeq.length - 1] == seq[userSeq.length - 1] && userSeq.length == seq.length) {
                if (userSeq.length == 20) {
                    //win
                    $("h1").html("You Win");
                    turn = "comp";
                } else {
                    turn = "comp";
                    num++;
                    setTimeout(function () { compPlay(); }, 1500);
                }
            } else if (userSeq[userSeq.length - 1] != seq[userSeq.length - 1]) {
                turn = "comp";
                 if ($('#check').prop('checked') == true) {
                    //wrong
                    $("h1").html("Wrong");
                    setTimeout(function () { $("button").trigger("click"); }, 2000);
                } else {
                    //wrong
                    $("h1").html("Wrong");
                    setTimeout(function () { compPlay(); }, 1500);
                }
                
            }
        }
    }); 
    $("#2").on("click", function () {
        if (turn == "user") {
            userSeq.push(2);
            audio2.play();
            $("#2").fadeTo(60, 0.4); 
            $("#2").fadeTo(60, 1); 

            if (userSeq[userSeq.length - 1] == seq[userSeq.length - 1] && userSeq.length == seq.length) {
                if (userSeq.length == 20) {
                    //win
                    $("h1").html("You Win");
                    turn = "comp";
                } else {
                    turn = "comp";
                    num++;
                    setTimeout(function () { compPlay(); }, 1500);
                }
            } else if (userSeq[userSeq.length - 1] != seq[userSeq.length - 1]) {
                turn = "comp";
                 if ($('#check').prop('checked') == true) {
                    //wrong
                    $("h1").html("Wrong");
                    setTimeout(function () { $("button").trigger("click"); }, 1500);
                } else {
                    //wrong
                    $("h1").html("Wrong");
                    setTimeout(function () { compPlay(); }, 1500);
                }
                
            }
        }
        
    }); 
    $("#3").on("click", function () {
        if (turn == "user") {
            userSeq.push(3);
            audio3.play();
            $("#3").fadeTo(60, 0.4); 
            $("#3").fadeTo(60, 1); 

            if (userSeq[userSeq.length - 1] == seq[userSeq.length - 1] && userSeq.length == seq.length) {
                if (userSeq.length == 20) {
                    //win
                    $("h1").html("You Win");
                    turn = "comp";
                } else {
                    turn = "comp";
                    num++;
                    setTimeout(function () { compPlay(); }, 1500);
                }
            } else if (userSeq[userSeq.length - 1] != seq[userSeq.length - 1]) {
                turn = "comp";
                 if ($('#check').prop('checked') == true) {
                    //wrong
                    $("h1").html("Wrong");
                    setTimeout(function () { $("button").trigger("click"); }, 1500);
                } else {
                    //wrong
                    $("h1").html("Wrong");
                    setTimeout(function () { compPlay(); }, 1500);
                }
                
            }
        }
              
    }); 
    $("#4").on("click", function () {
        if (turn == "user") {
            userSeq.push(4);
            audio4.play();
            $("#4").fadeTo(60, 0.4); 
            $("#4").fadeTo(60, 1);
            if (userSeq[userSeq.length - 1] == seq[userSeq.length - 1] && userSeq.length == seq.length) {
                if (userSeq.length == 20) {
                    //win
                    $("h1").html("You Win");
                    turn = "comp";
                } else {
                    turn = "comp";
                    num++;
                    setTimeout(function () { compPlay(); }, 1500);
                }
            } else if (userSeq[userSeq.length - 1] != seq[userSeq.length - 1]) {
                turn = "comp";
                 if ($('#check').prop('checked') == true) {
                    //wrong
                    $("h1").html("Wrong");
                    setTimeout(function () { $("button").trigger("click"); }, 1500);   
                } else {
                    //wrong
                    $("h1").html("Wrong");
                    setTimeout(function () { compPlay(); }, 1500);
                }
     
                
            }
        }
    }); 





    $("button").on("click", function () {
        $("#score").val("1");
        $("h1").html("");
        num = 1;
        seq = [];
        userSeq = [];
        var rnd = randomNumber();
        seq.push(rnd);
        audio[rnd - 1].play();
        $("#" + rnd + "").fadeTo(450, 0.4);
        $("#" + rnd + "").fadeTo(450, 1);
        turn = "user";
    });
    function original(k){
        setTimeout(function() {
                audio[seq[k] - 1].play();
                $("#" + seq[k] + "").fadeTo(450, 0.4);
                $("#" + seq[k] + "").fadeTo(450, 1); 
            }, k*900);
    }

    function compPlay() {
        $("h1").html("");
        turn = "comp"
        $("#score").val(""+num+"");
        for (var k = 0; k < seq.length; k++){
            original(k);
        }
        for (var i = seq.length; i < num; i++){
            setTimeout(function(i) {
                var rnd = randomNumber();
                seq.push(rnd);
                audio[rnd - 1].play();
                $("#" + rnd + "").fadeTo(450, 0.4);
                $("#" + rnd + "").fadeTo(450, 1); 
            }, i*900); 
        }
        userSeq = [];
        setTimeout(function () {turn = "user"; }, (seq.length + 1)*900);
        
    }



});