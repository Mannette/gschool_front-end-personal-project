function Item (affectedPlayers, turnsInEffect, inFront, item) {
  this.affectedPlayers = affectedPlayers;
  this.turnsInEffect = turnsInEffect;
  this.inFront = inFront;
  this.item = item;
}

var shell = new Item(
  1,
  1,
  true,
  'shell'
);

var blueShell = new Item(
  3,
  1,
  true,
  'blueShell'
);

var banana = new Item(
  1,
  1,
  false,
  'banana'
);

var mushroom = new Item();

var star = new Item();

var cachedItem = '';

var shellPic = '<img class="image" src="images/greenshell.png">';
var bananaPic = '<img class="image" src="images/banana.png">';
var blueShellPic = '<img class="image" src="images/blueshell.jpg">';

Item.prototype.shell = function() {

  // determine if all computer players are ahead of player
  if (($('.computerOneCurrent').attr('value') >= $('.playerCurrent').attr('value')) && ($('.computerTwoCurrent').attr('value') >= $('.playerCurrent').attr('value')) && ($('.computerThreeCurrent').attr('value') >= $('.playerCurrent').attr('value'))) {
    // determine if computer one is closest
    if ($('.computerOneCurrent').attr('value') < $('.computerTwoCurrent').attr('value') && $('.computerOneCurrent').attr('value') < $('.computerThreeCurrent').attr('value')) {
        cpuOne.hit = true;
        $('.computerOneCurrent').addClass('hit');
    }
    // determine if computer two is closest
    else if ($('.computerTwoCurrent').attr('value') < $('.computerOneCurrent').attr('value') && $('.computerTwoCurrent').attr('value') < $('.computerThreeCurrent').attr('value')) {
        cpuTwo.hit = true;
        $('.computerTwoCurrent').addClass('hit');
    }
    // determine if computer three is closest
    else if ($('.computerThreeCurrent').attr('value') < $('.computerTwoCurrent').attr('value') && $('.computerThreeCurrent').attr('value') < $('.computerOneCurrent').attr('value')) {
        cpuThree.hit = true;
        $('.computerThreeCurrent').addClass('hit');
    }
    // if two players are in equal positions
    else if(($('.computerOneCurrent').attr('value') === $('.computerTwoCurrent').attr('value')) && ($('.computerOneCurrent').attr('value') < $('.computerThreeCurrent').attr('value'))) {
      var randomPick = Math.floor(Math.random() * 2);
      switch (randomPick) {
        case 0:
          cpuOne.hit = true;
          $('.computerOneCurrent').addClass('hit');
          break;
        case 1:
          cpuTwo.hit = true;
          $('.computerTwoCurrent').addClass('hit');
          break;
      }
    } else if (($('.computerOneCurrent').attr('value') === $('.computerThreeCurrent').attr('value')) && ($('.computerOneCurrent').attr('value') < $('.computerTwoCurrent').attr('value'))) {
      var randomPick = Math.floor(Math.random() * 2);
      switch (randomPick) {
        case 0:
          cpuOne.hit = true;
          $('.computerOneCurrent').addClass('hit');
          break;
        case 1:
          cpuThree.hit = true;
          $('.computerThreeCurrent').addClass('hit');
          break;
      }
    } else if(($('.computerTwoCurrent').attr('value') === $('.computerThreeCurrent').attr('value')) && ($('.computerTwoCurrent').attr('value') < $('.computerOneCurrent').attr('value'))) {
      var randomPick = Math.floor(Math.random() * 2);
      switch (randomPick) {
        case 0:
          cpuTwo.hit = true;
          $('.computerTwoCurrent').addClass('hit');
          break;
        case 1:
          cpuThree.hit = true;
          $('.computerThreeCurrent').addClass('hit');
          break;
      }
    }
    // if all players are in equal positions pick random player to hit
    else {
      var randomPick = Math.floor(Math.random() * 3);
      switch (randomPick) {
        case 0:
          cpuOne.hit = true;
          $('.computerOneCurrent').addClass('hit');
          break;
        case 1:
          cpuTwo.hit = true;
          $('.computerTwoCurrent').addClass('hit');
          break;
        case 2:
          cpuThree.hit = true;
          $('.computerThreeCurrent').addClass('hit');
          break;
      }
    }
  }
  // determine which computer player is closest if computer one and computer two are ahead of player
  else if ($('.computerOneCurrent').attr('value') >= $('.playerCurrent').attr('value') && $('.computerTwoCurrent').attr('value') >= $('.playerCurrent').attr('value')) {
      if (($('.computerOneCurrent').attr('value') > $('.computerTwoCurrent').attr('value')) && ($('.computerTwoCurrent').attr('value') === $('.playerCurrent').attr('value'))) {
        cpuOne.hit = true;
        $('.computerOneCurrent').addClass('hit');
      } else if (($('.computerTwoCurrent').attr('value') > $('.computerOneCurrent').attr('value')) && ($('.computerOneCurrent').attr('value') === $('.playerCurrent').attr('value'))) {
        cpuTwo.hit = true;
        $('.computerTwoCurrent').addClass('hit');
      } else if (($('.computerOneCurrent').attr('value') > $('.playerCurrent').attr('value')) && ($('.computerTwoCurrent').attr('value') > $('.playerCurrent').attr('value'))) {
        if (($('.computerOneCurrent').attr('value') - $('.playerCurrent').attr('value')) < ($('.computerTwoCurrent').attr('value') - $('.playerCurrent').attr('value'))) {
          cpuOne.hit = true;
          $('.computerOneCurrent').addClass('hit');
        } else {
          cpuTwo.hit = true;
          $('.computerTwoCurrent').addClass('hit');
        }
      } else {
        var randomPick = Math.floor(Math.random() * 2);
        switch (randomPick) {
          case 0:
            cpuOne.hit = true;
            $('.computerOneCurrent').addClass('hit');
            break;
          case 1:
            cpuTwo.hit = true;
            $('.computerTwoCurrent').addClass('hit');
            break;
        }
      }
  }
  // determine which computer player is closest if computer one and computer three are ahead of player
  else if ($('.computerOneCurrent').attr('value') >= $('.playerCurrent').attr('value') && $('.computerThreeCurrent').attr('value') >= $('.playerCurrent').attr('value')) {
      if (($('.computerOneCurrent').attr('value') > $('.computerThreeCurrent').attr('value')) && ($('.computerThreeCurrent').attr('value') === $('.playerCurrent').attr('value'))) {
        cpuOne.hit = true;
        $('.computerOneCurrent').addClass('hit');
      } else if (($('.computerThreeCurrent').attr('value') > $('.computerOneCurrent').attr('value')) && ($('.computerOneCurrent').attr('value') === $('.playerCurrent').attr('value'))) {
        cpuThree.hit = true;
        $('.computerThreeCurrent').addClass('hit');
      } else if (($('.computerThreeCurrent').attr('value') > $('.playerCurrent').attr('value')) && ($('.computerOneCurrent').attr('value') > $('.playerCurrent').attr('value'))) {
        if (($('.computerOneCurrent').attr('value') - $('.playerCurrent').attr('value')) < ($('.computerThreeCurrent').attr('value') - $('.playerCurrent').attr('value'))) {
          cpuOne.hit = true;
          $('.computerOneCurrent').addClass('hit');
        } else {
          cpuThree.hit = true;
          $('.computerThreeCurrent').addClass('hit');
        }
      } else {
        var randomPick = Math.floor(Math.random() * 2);
        switch (randomPick) {
          case 0:
            cpuOne.hit = true;
            $('.computerOneCurrent').addClass('hit');
            break;
          case 1:
            cpuThree.hit = true;
            $('.computerThreeCurrent').addClass('hit');
            break;
        }
      }
  }
  // determine which computer player is closest if computer two and computer three are ahead of player
  else if ($('.computerTwoCurrent').attr('value') >= $('.playerCurrent').attr('value') && $('.computerThreeCurrent').attr('value') >= $('.playerCurrent').attr('value')) {
    if (($('.computerTwoCurrent').attr('value') > $('.computerThreeCurrent').attr('value')) && ($('.computerThreeCurrent').attr('value') === $('.playerCurrent').attr('value'))) {
      cpuTwo.hit = true;
      $('.computerTwoCurrent').addClass('hit');
    } else if (($('.computerThreeCurrent').attr('value') > $('.computerTwoCurrent').attr('value')) && ($('.computerTwoCurrent').attr('value') === $('.playerCurrent').attr('value'))) {
      cpuThree.hit = true;
      $('.computerThreeCurrent').addClass('hit');
    } else if (($('.computerTwoCurrent').attr('value') > $('.playerCurrent').attr('value')) && ($('.computerThreeCurrent').attr('value') > $('.playerCurrent').attr('value'))) {
      if (($('.computerTwoCurrent').attr('value') - $('.playerCurrent').attr('value')) < ($('.computerThreeCurrent').attr('value') - $('.playerCurrent').attr('value'))) {
        cpuTwo.hit = true;
        $('.computerTwoCurrent').addClass('hit');
      } else {
        cpuThree.hit = true;
        $('.computerThreeCurrent').addClass('hit');
      }
    } else {
      var randomPick = Math.floor(Math.random() * 2);
      switch (randomPick) {
        case 0:
          cpuTwo.hit = true;
          $('.computerTwoCurrent').addClass('hit');
          break;
        case 1:
          cpuThree.hit = true;
          $('.computerThreeCurrent').addClass('hit');
          break;
      }
    }
  }
  // determine if individual computer players are ahead of player
  else if ($('.computerOneCurrent').attr('value') >= $('.playerCurrent').attr('value')) {
    cpuOne.hit = true;
    $('.computerOneCurrent').addClass('hit');
  } else if ($('.computerTwoCurrent').attr('value') >= $('.playerCurrent').attr('value')) {
    cpuTwo.hit = true;
    $('.computerTwoCurrent').addClass('hit');
  } else if ($('.computerThreeCurrent').attr('value') >= $('.playerCurrent').attr('value')) {
    cpuThree.hit = true;
    $('.computerThreeCurrent').addClass('hit');
  } else {
    alert('You Missed!');
  }
};

Item.prototype.blueShell = function() {

  if (($('.computerOneCurrent').attr('value') >= $('.playerCurrent').attr('value')) && ($('.computerTwoCurrent').attr('value') >= $('.playerCurrent').attr('value')) && ($('.computerThreeCurrent').attr('value') >= $('.playerCurrent').attr('value'))) {
    cpuOne.hit = true;
    $('.computerOneCurrent').addClass('hit');
    cpuTwo.hit = true;
    $('.computerTwoCurrent').addClass('hit');
    cpuThree.hit = true;
    $('.computerThreeCurrent').addClass('hit');
  } else if (($('.computerOneCurrent').attr('value') >= $('.playerCurrent').attr('value')) && ($('.computerTwoCurrent').attr('value') >= $('.playerCurrent').attr('value'))) {
    cpuOne.hit = true;
    $('.computerOneCurrent').addClass('hit');
    cpuTwo.hit = true;
    $('.computerTwoCurrent').addClass('hit');
  } else if (($('.computerOneCurrent').attr('value') >= $('.playerCurrent').attr('value')) && ($('.computerThreeCurrent').attr('value') >= $('.playerCurrent').attr('value'))) {
    cpuOne.hit = true;
    $('.computerOneCurrent').addClass('hit');
    cpuThree.hit = true;
    $('.computerThreeCurrent').addClass('hit');
  } else if (($('.computerTwoCurrent').attr('value') >= $('.playerCurrent').attr('value')) && ($('.computerThreeCurrent').attr('value') >= $('.playerCurrent').attr('value'))) {
    cpuTwo.hit = true;
    $('.computerTwoCurrent').addClass('hit');
    cpuThree.hit = true;
    $('.computerThreeCurrent').addClass('hit');
  } else if ($('.computerOneCurrent').attr('value') >= $('.playerCurrent').attr('value')) {
    cpuOne.hit = true;
    $('.computerOneCurrent').addClass('hit');
  } else if ($('.computerTwoCurrent').attr('value') >= $('.playerCurrent').attr('value')) {
    cpuTwo.hit = true;
    $('.computerTwoCurrent').addClass('hit');
  } else if ($('.computerThreeCurrent').attr('value') >= $('.playerCurrent').attr('value')) {
    cpuThree.hit = true;
    $('.computerThreeCurrent').addClass('hit');
  } else {
    alert('You missed!');
  }
};

Item.prototype.banana = function() {

  // determine if all computer players are behind player
  if (($('.computerOneCurrent').attr('value') <= $('.playerCurrent').attr('value')) && ($('.computerTwoCurrent').attr('value') <= $('.playerCurrent').attr('value')) && ($('.computerThreeCurrent').attr('value') <= $('.playerCurrent').attr('value'))) {
    // determine if computer one is closest
    if (($('.computerOneCurrent').attr('value') > $('.computerTwoCurrent').attr('value')) && ($('.computerOneCurrent').attr('value') > $('.computerThreeCurrent').attr('value'))) {
      cpuOne.hit = true;
      $('.computerOneCurrent').addClass('hit');
    }
    // determine if computer two is closest
    else if (($('.computerTwoCurrent').attr('value') > $('.computerOneCurrent').attr('value')) && ($('.computerTwoCurrent').attr('value') > $('.computerThreeCurrent').attr('value'))) {
      cpuTwo.hit = true;
      $('.computerTwoCurrent').addClass('hit');
    }
    // determine if computer three is closest
    else if (($('.computerThreeCurrent').attr('value') > $('.computerOneCurrent').attr('value')) && ($('.computerThreeCurrent').attr('value') > $('.computerTwoCurrent').attr('value'))) {
      cpuThree.hit = true;
      $('.computerThreeCurrent').addClass('hit');
    }
    // randomly pick which computer player will be hit if two are in equal positions but all are still behind player
    else if (($('.computerOneCurrent').attr('value') === $('.computerTwoCurrent').attr('value')) && ($('.computerOneCurrent').attr('value') > $('.computerThreeCurrent').attr('value'))) {
      var randomPick = Math.floor(Math.random() * 2);
      switch (randomPick) {
        case 0:
          cpuOne.hit = true;
          $('.computerOneCurrent').addClass('hit');
          break;
        case 1:
          cpuTwo.hit = true;
          $('.computerTwoCurrent').addClass('hit');
          break;
      }
    } else if (($('.computerOneCurrent').attr('value') === $('.computerThreeCurrent').attr('value')) && ($('.computerOneCurrent').attr('value') > $('.computerTwoCurrent').attr('value'))) {
      var randomPick = Math.floor(Math.random() * 2);
      switch (randomPick) {
        case 0:
          cpuOne.hit = true;
          $('.computerOneCurrent').addClass('hit');
          break;
        case 1:
          cpuThree.hit = true;
          $('.computerThreeCurrent').addClass('hit');
          break;
      }
    } else if (($('.computerTwoCurrent').attr('value') === $('.computerThreeCurrent').attr('value')) && ($('.computerTwoCurrent').attr('value') > $('.computerOneCurrent').attr('value'))) {
      var randomPick = Math.floor(Math.random() * 2);
      switch (randomPick) {
        case 0:
          cpuTwo.hit = true;
          $('.computerTwoCurrent').addClass('hit');
          break;
        case 1:
          cpuThree.hit = true;
          $('.computerThreeCurrent').addClass('hit');
          break;
      }
    } else {
      var randomPick = Math.floor(Math.random() * 3);
      switch (randomPick) {
        case 0:
          cpuOne.hit = true;
          $('.computerOneCurrent').addClass('hit');
          break;
        case 1:
          cpuTwo.hit = true;
          $('.computerTwoCurrent').addClass('hit');
          break;
        case 2:
          cpuThree.hit = true;
          $('.computerThreeCurrent').addClass('hit');
          break;
      }
    }
  }
  // determine which computer player is closest if computer one and computer two are behind player
  else if ($('.computerOneCurrent').attr('value') <= $('.playerCurrent').attr('value') && $('.computerTwoCurrent').attr('value') <= $('.playerCurrent').attr('value')) {
    if ($('.computerOneCurrent').attr('value') > $('.computerTwoCurrent').attr('value')) {
      cpuOne.hit = true;
      $('.computerOneCurrent').addClass('hit');
    } else if ($('.computerTwoCurrent').attr('value') > $('.computerOneCurrent').attr('value')) {
      cpuTwo.hit = true;
      $('.computerTwoCurrent').addClass('hit');
    } else {
      var randomPick = Math.floor(Math.random() * 2);
      switch (randomPick) {
        case 0:
          cpuOne.hit = true;
          $('.computerOneCurrent').addClass('hit');
          break;
        case 1:
          cpuTwo.hit = true;
          $('.computerTwoCurrent').addClass('hit');
          break;
      }
    }
  }
  // determine which computer player is closest if computer one and computer three are behind player
  else if ($('.computerOneCurrent').attr('value') <= $('.playerCurrent').attr('value') && $('.computerThreeCurrent').attr('value') <= $('.playerCurrent').attr('value')) {
    if ($('.computerOneCurrent').attr('value') > $('.computerThreeCurrent').attr('value')) {
      cpuOne.hit = true;
      $('.computerOneCurrent').addClass('hit');
    } else if ($('.computerThreeCurrent').attr('value') > $('.computerOneCurrent').attr('value')) {
      cpuThree.hit = true;
      $('.computerThreeCurrent').addClass('hit');
    } else {
      var randomPick = Math.floor(Math.random() * 2);
      switch (randomPick) {
        case 0:
          cpuOne.hit = true;
          $('.computerOneCurrent').addClass('hit');
          break;
        case 1:
          cpuThree.hit = true;
          $('.computerThreeCurrent').addClass('hit');
          break;
      }
    }
  }
  // determine which computer player is closest if computer two and computer three are behind player
  else if ($('.computerTwoCurrent').attr('value') <= $('.playerCurrent').attr('value') && $('.computerThreeCurrent').attr('value') <= $('.playerCurrent').attr('value')) {
    if ($('.computerTwoCurrent').attr('value') > $('.computerThreeCurrent').attr('value')) {
      cpuTwo.hit = true;
      $('.computerTwoCurrent').addClass('hit');
    } else if ($('.computerThreeCurrent').attr('value') > $('.computerTwoCurrent').attr('value')) {
      cpuThree.hit = true;
      $('.computerThreeCurrent').addClass('hit');
    } else {
      var randomPick = Math.floor(Math.random() * 2);
      switch (randomPick) {
        case 0:
          cpuTwo.hit = true;
          $('.computerTwoCurrent').addClass('hit');
          break;
        case 1:
          cpuThree.hit = true;
          $('.computerThreeCurrent').addClass('hit');
          break;
      }
    }
  }
  // determine if individual computer players are behind player
  else if ($('.computerOneCurrent').attr('value') <= $('.playerCurrent').attr('value')) {
    cpuOne.hit = true;
    $('.computerOneCurrent').addClass('hit');
  } else if ($('.computerTwoCurrent').attr('value') <= $('.playerCurrent').attr('value')) {
    cpuTwo.hit = true;
    $('.computerTwoCurrent').addClass('hit');
  } else if ($('.computerThreeCurrent').attr('value') <= $('.playerCurrent').attr('value')) {
    cpuThree.hit = true;
    $('.computerThreeCurrent').addClass('hit');
  } else {
    alert('You Missed!');
  }
};

// Item.prototype.mushroom = function() {
//   // speeds up progression for 1 turn
//   // possible to finish without answering all questions
// };
//
// Item.prototype.star = function() {
//   // speeds up progression for 2 turns
//   // possible to finish without answering all questions
//   // negates effects of all other items for 2 turns
// };

Item.prototype.getItem = function() {
  var selected = Math.floor(Math.random() * 3);
  switch (selected) {
    case 0:
      $('.itemBox').html(shellPic);
      cachedItem = shell;
      break;
    case 1:
      $('.itemBox').html(bananaPic);
      cachedItem = banana;
      break;
    case 2:
      $('.itemBox').html(blueShellPic);
      cachedItem = blueShell;
      break;
  }
};
