$(document).ready(function() {
  // console.log('sanity check');
  // hides anything that isnt meant for startup screen
  $('#raceElements').hide();

  // ------------ //
  // READY BUTTON //
  // ------------ //
  $('.ready').click(function() {
    // console.log('this is a test.');
    $('#raceElements').show();
    $('#startScreen').hide();
    $('#replay').hide();

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/mk64/mk64_mario_a09.wav');
    audioElement.setAttribute('autoplay', 'autoplay');

    $.get();

    audioElement.addEventListener('load', function() {
      audioElement.Play();
    }, true);


    // ---------------- //
    // SETTING DEFAULTS //
    // ---------------- //

    // question area
    $('#questions').html('The question will go here!');
    $('.firstOption').html('These');
    $('.secondOption').html('are the');
    $('.thirdOption').html('possible');
    $('.fourthOption').html('answers!');

    // track area
    $('.position').html("");
    $('#playerStart').html('Start!');
    $('#computerStart').html('Start!');
    $('#playerFinish').html('Finish!');
    $('#computerFinish').html('Finish!');
  });


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
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionTwo.question) {
      if (questionTwo.check() === true) {
        appendThird();
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionThree.question) {
      if (questionThree.check() === true) {
        appendFourth();
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionFour.question) {
      if (questionFour.check() === true) {
        appendFifth();
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionFive.question) {
      if (questionFive.check() === true) {
        appendSixth();
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionSix.question) {
      if (questionSix.check() === true) {
        appendSeventh();
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionSeven.question) {
      if (questionSeven.check() === true) {
        appendEighth();
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionEight.question) {
      if (questionEight.check() === true) {
        appendNinth();
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionNine.question) {
      if (questionNine.check() === true) {
        appendTenth();
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionTen.question) {
      if (questionTen.check() === true) {
        $('input[name = answers]').attr('checked', false);

        $('#clear').hide();
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
    console.log('replay');

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
    $('#clear').show();

  });

});
