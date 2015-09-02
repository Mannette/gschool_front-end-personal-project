$(document).ready(function () {
  // hides anything that isnt meant for startup screen
  setDefault();

  // ------------ //
  // READY BUTTON //
  // ------------ //
  $('.ready').click(function () {
    $('#raceElements').show();
    $('#startScreen').hide();
    $('#replay').hide();

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/mk64/mk64_mario_a09.wav');
    audioElement.setAttribute('autoplay', 'autoplay');

    $.get();

    audioElement.addEventListener('load', function () {
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
    $('.position').html('');
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
  $('#mario').click(function () {
    var player = mario;
    var computer = luigi;

    // place mario into playerStart
    $('#playerStart').html(player).addClass('playerCurrent');

    $('#playerPosition').css({
      'background': 'red'
    });

    // place luigi into computerStart
    $('#computerOneStart').html(computer).addClass('computerOneCurrent');

    $('#computerOnePosition').css({
      'background': 'green'
    });

    // hide character images
    $('#characters').hide();

    // play sound
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/mk64/mk64_mario02.wav');
    audioElement.setAttribute('autoplay', 'autoplay');

    $.get();

    audioElement.addEventListener('load', function () {
      audioElement.Play();
    }, true);

    // Begin quiz.
    // Append first question to question box.
    appendFirst();

  });

  // select luigi
  $('#luigi').click(function () {
    var player = luigi;
    var computer = mario;

    // place luigi into playerStart
    $('#playerStart').html(player).addClass('playerCurrent');

    // $('#playerPositionOne').html(player).addClass('playerCurrent');

    $('#playerPosition').css({
      'background': 'green'
    });

    // place mario into computerStart
    $('#computerOneStart').html(computer).addClass('computerOneCurrent');

    $('#computerOnePosition').css({
      'background': 'red'
    });

    // hide character images
    $('#characters').hide();

    // play sound
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/mk64/mk64_luigi03.wav');
    audioElement.setAttribute('autoplay', 'autoplay');

    $.get();

    audioElement.addEventListener('load', function () {
      audioElement.Play();
    }, true);

    // Begin quiz.
    // Append first question to question box.
    appendFirst();

  });

  // ----------------------- //
  // ** TRACK ADVANCEMENT ** //
  // ----------------------- //
  // advance button.
  $('#advance').click(function () {

    var currentQuestion = $('#questions').html();
    // computer advancing
    cpuOne.computerOneAdvance();

    // player advancing
    // multiple conditions to determine question and answer
    if (currentQuestion === questionOne.question) {
      // if right answer
      if (questionOne.check() === true) {
        // append next question
        appendSecond();
        // clear checked buttons
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionTwo.question) {
      // if right answer
      if (questionTwo.check() === true) {
        // append next question
        appendThird();
        // clear checked buttons
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionThree.question) {
      // if right answer
      if (questionThree.check() === true) {
        // append next question
        appendFourth();
        // clear checked buttons
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionFour.question) {
      // if right answer
      if (questionFour.check() === true) {
        // append next question
        appendFifth();
        // clear checked buttons
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionFive.question) {
      // if right answer
      if (questionFive.check() === true) {
        // append next question
        appendSixth();
        // clear checked buttons
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionSix.question) {
      // if right answer
      if (questionSix.check() === true) {
        // append next question
        appendSeventh();
        // clear checked buttons
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionSeven.question) {
      // if right answer
      if (questionSeven.check() === true) {
        // append next question
        appendEighth();
        // clear checked buttons
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionEight.question) {
      // if right answer
      if (questionEight.check() === true) {
        // append next question
        appendNinth();
        // clear checked buttons
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionNine.question) {
      // if right answer
      if (questionNine.check() === true) {
        // append next question
        appendTenth();
        // clear checked buttons
        $('input[name = answers]').attr('checked', false);
      }
    }
    if (currentQuestion === questionTen.question) {
      // if right answer
      if (questionTen.check() === true) {
        // clear checked buttons
        $('input[name = answers]').attr('checked', false);

        // hide questions and answers
        $('#clear').hide();
        // show replay button
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

      audioElement.addEventListener('load', function () {
        audioElement.Play();
      }, true);

    } else if (($('#playerFinish').html() === luigi) || ($('#computerFinish').html() === luigi)) {
      // play sound
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/mk64/mk64_luigi07.wav');
      audioElement.setAttribute('autoplay', 'autoplay');

      $.get();

      audioElement.addEventListener('load', function () {
        audioElement.Play();
      }, true);

    }

  });

  // ------------- //
  // REPLAY BUTTON //
  // ------------- //
  $('#replay').click(function () {

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_thank_you.wav');
    audioElement.setAttribute('autoplay', 'autoplay');

    $.get();

    audioElement.addEventListener('load', function () {
      audioElement.Play();
    }, true);

    // set defaults
    setDefault();
    $('audio').remove();
  });

});
