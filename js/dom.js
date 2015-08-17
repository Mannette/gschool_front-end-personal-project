$(document).ready(function() {
  console.log('sanity check');

  // append questions to question-box
  function appendQuestion(questionArr) {
    for (i = 0; i < questionArr.length; i++) {
      $('.question-box').append(this.questions);
    }
  }

  var mario = '<img class="image" src="images/Mario.jpg">';
  var luigi = '<img class="image" src="images/Luigi.jpg">';

// --------------------- //
// **SELECT CHARACTERS** //
// --------------------- //
  // select mario
  $('#mario').click(function() {
    console.log('you selected mario!');
    var player = mario;
    var computer = luigi;

    // place mario into playerStart
    $('#playerStart').html(player).addClass('playerCurrent');

    $('#playerPosition').css({
      'background': 'red'
    });

    // place luigi into computerStart
    $('#computerStart').html(computer).addClass('computerCurrent');

    $('#computerPosition').css({
      'background': 'green'
    });


    // hide character images
    $('#mario').hide();
    $('#luigi').hide();

    // play sound
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/mk64/mk64_mario02.wav');
    audioElement.setAttribute('autoplay', 'autoplay');

    $.get();

    audioElement.addEventListener('load', function() {
      audioElement.Play();
    }, true);

    // Begin quiz.
    // Append first question to question box.

    // return player, computer;

  });

  // select luigi
  $('#luigi').click(function() {
    console.log('you selected luigi!');
    var player = luigi;
    var computer = mario;

    // place luigi into playerStart
    $('#playerStart').html(player).addClass('playerCurrent');

    // $('#playerPositionOne').html(player).addClass('playerCurrent');

    $('#playerPosition').css({
      'background': 'green'
    });

    // place mario into computerStart
    $('#computerStart').html(computer).addClass('computerCurrent');

    $('#computerPosition').css({
      'background': 'red'
    });

    // hide character images
    $('#mario').hide();
    $('#luigi').hide();

    // play sound
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/mk64/mk64_luigi03.wav');
    audioElement.setAttribute('autoplay', 'autoplay');

    $.get();

    audioElement.addEventListener('load', function() {
      audioElement.Play();
    }, true);

    // Begin quiz.
    // Append first question to question box.

    // return player, computer;

  });

  // -------------------- //
  // PLAYER MOVE FUNCTION //
  // -------------------- //
  // console.log('advance!');
  function playerMove() {

    player = $('.playerCurrent').html();

    // console.log(player);

    // select index with character
    var playerCurrent = $('.playerCurrent').index('.player');

    // console.log(playerCurrent);
  // debugger;

    // select next position
    var nextPosition = playerCurrent + 1;

    // console.log(nextPosition);
  // debugger;

    // remove character from current position
    // playerCurrent.removeClass('playerCurrent');
    $('.playerCurrent').html('');
    $('#playerPosition').children().removeClass('playerCurrent');

    // move character to next position
    var move = $('#playerPosition').children()[nextPosition];
    $(move).addClass('playerCurrent');
    move.innerHTML = player;
  }

  // ----------------------- //
  // ** TRACK ADVANCEMENT ** //
  // ----------------------- //
  // test advance button.
  $('#advance').click(function() {

    // computer advancing
    cpuOne.computerAdvance();
    // player advancing
    playerMove();

    // ---------------------------------- //
    // SOUND FOR CHARACTER WINNING //
    // ---------------------------------- //
    if (($('#playerFinish').html() === mario) || ($('#computerFinish').html() === mario)) {
      // play sound
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/mk64/mk64_mario07.wav');
      audioElement.setAttribute('autoplay', 'autoplay');

      $.get();

      audioElement.addEventListener('load', function() {
        audioElement.Play();
      }, true);
      // alert("Congratulations you won!");
    }
    else if (($('#playerFinish').html() === luigi) || ($('#computerFinish').html() === luigi)) {
      // play sound
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/mk64/mk64_luigi07.wav');
      audioElement.setAttribute('autoplay', 'autoplay');

      $.get();

      audioElement.addEventListener('load', function() {
        audioElement.Play();
      }, true);
      // alert("Congratulations you won!");

    }

  });

});
