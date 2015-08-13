$(document).ready(function() {
  console.log('sanity check');

  // append questions to question-box
  function appendQuestion(questionArr) {
    for (i = 0; i < questionArr.length; i++) {
      $('.question-box').append(this.questions);
    }
  }

  var mario = '<img class="image" src="images/Mario.jpg">';
  var luigi =

  // select mario
  $('#mario').click(function() {
    console.log('you selected mario!');
    // place mario into playerStart
    $('#playerStart').html('<img class="image" src="images/Mario.jpg">');
    // place luigi into computerStart
    $('#computerStart').html('<img class="image" src="images/Luigi.jpg">');

    $('#mario').hide();
    $('#luigi').hide();

  });

  // select luigi
  $('#luigi').click(function() {
    console.log('you selected luigi!');
    // place mario into playerStart
    $('#playerStart').html('<img class="image" src="images/Luigi.jpg">');
    // place luigi into computerStart
    $('#computerStart').html('<img class="image" src="images/Mario.jpg">');

    $('#mario').hide();
    $('#luigi').hide();

  });

});
