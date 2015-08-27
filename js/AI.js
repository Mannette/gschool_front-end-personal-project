var ComputerPlayer = function (name) {
  this.name = name;
};

var cpuOne = new ComputerPlayer('cpu1');
var cpuTwo = new ComputerPlayer('cpu2');
var cpuThree = new ComputerPlayer('cpu3');

// ------------------------------- //
// ** COMPUTER ADVANCE FUNCTION ** //
// ------------------------------- //
ComputerPlayer.prototype.computerAdvance = function () {
  var advance = Math.round(Math.random() * 5);
  if (advance !== 2) {

    // advance one block;
    computer = $('.computerCurrent').html();

    // select index with character
    var computerCurrent = $('.computerCurrent').index('.computer');

    // select next position
    var nextPosition = computerCurrent + 1;

    // remove character from current position
    $('.computerCurrent').html('');
    $('#computerPosition').children().removeClass('computerCurrent');

    // move character to next position
    var move = $('#computerPosition').children()[nextPosition];
    $(move).addClass('computerCurrent');
    move.innerHTML = computer;
  }
};
