$(document).ready(function() {
  // console.log('sanity check');

  // ------------ //
  // READY BUTTON //
  // ------------ //
  $('.ready').click(function() {
    // console.log('this is a test.');
    $('#raceElements').show();
    $('#startScreen').hide();
  });

  $('#raceElements').hide();
  $('#replay').hide();

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
    $('#characters').hide();
    // $('#luigi').hide();

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
    appendFirst();
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
    $('#characters').hide();
    // $('#luigi').hide();

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
    appendFirst();
    // return player, computer;

  });

  // ----------------------- //
  // ** TRACK ADVANCEMENT ** //
  // ----------------------- //
  // advance button.
  $('#advance').click(function() {

    var currentQuestion = $('#questions').html();

    // computer advancing
    cpuOne.computerAdvance();

    // player advancing
    // playerMove();
    if (currentQuestion === questionOne.question) {
      if (questionOne.check() === true) {
        appendSecond();
      }
    }
    if (currentQuestion === questionTwo.question) {
      if (questionTwo.check() === true) {
        appendThird();
      }
    }
    if (currentQuestion === questionThree.question) {
      if (questionThree.check() === true) {
        appendFourth();
      }
    }
    if (currentQuestion === questionFour.question) {
      if (questionFour.check() === true) {
        appendFifth();
      }
    }
    if (currentQuestion === questionFive.question) {
      if (questionFive.check() === true) {
        appendSixth();
      }
    }
    if (currentQuestion === questionSix.question) {
      if (questionSix.check() === true) {
        appendSeventh();
      }
    }
    if (currentQuestion === questionSeven.question) {
      if (questionSeven.check() === true) {
        appendEighth();
      }
    }
    if (currentQuestion === questionEight.question) {
      if (questionEight.check() === true) {
        appendNinth();
      }
    }
    if (currentQuestion === questionNine.question) {
      if (questionNine.check() === true) {
        appendTenth();
      }
    }
    if (currentQuestion === questionTen.question) {
      if (questionTen.check() === true) {

        $('#replay').show();

      }
    }

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

  // ------------- //
  // REPLAY BUTTON //
  // ------------- //
  $('#replay').click(function() {
    // console.log('replay');

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_thank_you.wav');
    audioElement.setAttribute('autoplay', 'autoplay');

    $.get();

    audioElement.addEventListener('load', function() {
      audioElement.Play();
    }, true);

    $('#raceElements').hide();
    $('#startScreen').show();
    $('#characters').show();

  });

});
