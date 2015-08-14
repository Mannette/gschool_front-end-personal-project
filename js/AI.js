var ComputerPlayer = function (name) {
  this.name = name;
};

var cpuOne = new ComputerPlayer('cpu1');
var cpuTwo = new ComputerPlayer('cpu2');
var cpuThree = new ComputerPlayer('cpu3');

// determine if computer player advances
// function computerAdvance () {
//   var advance = Math.round(Math.random() * 3);
//   if (advance !== 2) {
//     // advance one block;
//     // if (special === num) {
//     //   // give computer player item
//     // }
//   }
// }

ComputerPlayer.prototype.computerAdvance = function () {
  var advance = Math.round(Math.random() * 3);
  if (advance !== 2) {

    // advance one block;
    computer = $('.computerCurrent').html();

    console.log(computer);

    // select index with character
    var computerCurrent = $('.computerCurrent').index('.computer');

    console.log(computerCurrent);
// debugger;

    // select next position
    var nextPosition = computerCurrent + 1;

    console.log(nextPosition);
// debugger;

    // remove character from current position
    // playerCurrent.removeClass('playerCurrent');
    $('.computerCurrent').html('');
    $('#computerPosition').children().removeClass('computerCurrent');

    // move character to next position
    var test = $('#computerPosition').children()[nextPosition];
    $(test).addClass('computerCurrent');
    test.innerHTML = computer;
  }
  console.log(advance);
};
