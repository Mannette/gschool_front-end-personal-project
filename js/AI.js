var ComputerPlayer = function (name) {
  this.name = name;
  this.hit = false;
  this.counter = 0;
};

var cpuOne = new ComputerPlayer('cpu1');
var cpuTwo = new ComputerPlayer('cpu2');
var cpuThree = new ComputerPlayer('cpu3');
// var cpuOneCounter = 0;
// var cpuTwoCounter = 0;
// var cpuThreeCounter = 0;

// ------------------------------- //
// ** COMPUTER ADVANCE FUNCTION ** //
// ------------------------------- //
ComputerPlayer.prototype.computerOneAdvance = function () {
  var advance = Math.round(Math.random() * 5);
  if (this.hit) {
    console.log('cpu1 hit!');
    return this.hit = false;
  } else if (!this.hit) {
    console.log('cpu1 go!');
    if (advance !== 2) {

      // advance one block;
      computer = $('.computerOneCurrent').html();

      // select index with character
      var computerOneCurrent = $('.computerOneCurrent').index('.computerOne');

      // select next position
      var nextPosition = computerOneCurrent + 1;

      // remove character from current position
      $('.computerOneCurrent').html('');
      $('#computerOnePosition').children().removeClass('computerOneCurrent');

      // move character to next position
      var move = $('#computerOnePosition').children()[nextPosition];
      $(move).addClass('computerOneCurrent');
      move.innerHTML = computer;
    }
  }
};

ComputerPlayer.prototype.computerTwoAdvance = function () {
  var advance = Math.round(Math.random() * 4);
  if (this.hit) {
    console.log('cpu2 hit!');
    return this.hit = false;
  } else if (!this.hit) {
    console.log('cpu2 go!');
    if (advance !== 2) {

      // advance one block;
      computer = $('.computerTwoCurrent').html();

      // select index with character
      var computerTwoCurrent = $('.computerTwoCurrent').index('.computerTwo');

      // select next position
      var nextPosition = computerTwoCurrent + 1;

      // remove character from current position
      $('.computerTwoCurrent').html('');
      $('#computerTwoPosition').children().removeClass('computerTwoCurrent');

      // move character to next position
      var move = $('#computerTwoPosition').children()[nextPosition];
      $(move).addClass('computerTwoCurrent');
      move.innerHTML = computer;
    }
  }
};

ComputerPlayer.prototype.computerThreeAdvance = function () {
  var advance = Math.round(Math.random() * 6);
  if (this.hit) {
    console.log('cpu3 hit!');
    return this.hit = false;
  } else if (!this.hit) {
    console.log('cpu3 go!');
    if (advance !== 2) {

      // advance one block;
      computer = $('.computerThreeCurrent').html();

      // select index with character
      var computerCurrent = $('.computerThreeCurrent').index('.computerThree');

      // select next position
      var nextPosition = computerCurrent + 1;

      // remove character from current position
      $('.computerThreeCurrent').html('');
      $('#computerThreePosition').children().removeClass('computerThreeCurrent');

      // move character to next position
      var move = $('#computerThreePosition').children()[nextPosition];
      $(move).addClass('computerThreeCurrent');
      move.innerHTML = computer;
    }
  }
};
