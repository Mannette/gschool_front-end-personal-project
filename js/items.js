function Item(affectedPlayers, turnsInEffect, inFront, item) {
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

Item.prototype.shell = function() {
  console.log('shells!');

  // determine if all computer players are ahead of player
  if (($('.computerOneCurrent').attr('value') >= $('.playerCurrent').attr('value')) && ($('.computerTwoCurrent').attr('value') >= $('.playerCurrent').attr('value')) && ($('.computerThreeCurrent').attr('value') >= $('.playerCurrent').attr('value'))) {
    // determine if computer one is closest
    if ($('.computerOneCurrent').attr('value') - $('.playerCurrent').attr('value') < ($('.computerTwoCurrent').attr('value') - $('.playerCurrent').attr('value')) && ($('.computerThreeCurrent').attr('value') - $('.playerCurrent').attr('value'))) {
      cpuOne.hit = true;
    }
    // determine if computer two is closest
    else if ($('.computerTwoCurrent').attr('value') - $('.playerCurrent').attr('value') < ($('.computerOneCurrent').attr('value') - $('.playerCurrent').attr('value')) && ($('.computerThreeCurrent').attr('value') - $('.playerCurrent').attr('value'))) {
      cpuTwo.hit = true;
    }
    // determine if computer three is closest
    else if ($('.computerThreeCurrent').attr('value') - $('.playerCurrent').attr('value') < ($('.computerTwoCurrent').attr('value') - $('.playerCurrent').attr('value')) && ($('.computerOneCurrent').attr('value') - $('.playerCurrent').attr('value'))) {
      cpuThree.hit = true;
    }
  }
  // determine which computer player is closest if computer one and computer two are ahead of player
  else if (($('.computerOneCurrent').attr('value') >= $('.playerCurrent').attr('value')) && ($('.computerTwoCurrent').attr('value') >= $('.playerCurrent').attr('value'))) {
    if (($('.computerOneCurrent').attr('value') - $('.playerCurrent').attr('value')) < ($('.computerTwoCurrent').attr('value') - $('.playerCurrent').attr('value'))) {
      cpuOne.hit = true;
    } else {
      cpuTwo.hit = true;
    }
  }
  // determine which computer player is closest if computer one and computer three are ahead of player
  else if (($('.computerOneCurrent').attr('value') >= $('.playerCurrent').attr('value')) && ($('.computerThreeCurrent').attr('value') >= $('.playerCurrent').attr('value'))) {
    if (($('.computerOneCurrent').attr('value') - $('.playerCurrent').attr('value')) < ($('.computerThreeCurrent').attr('value') - $('.playerCurrent').attr('value'))) {
      cpuOne.hit = true;
    } else {
      cpuThree.hit = true;
    }
  }
  // determine which computer player is closest if computer two and computer three are ahead of player
  else if (($('.computerTwoCurrent').attr('value') >= $('.playerCurrent').attr('value')) && ($('.computerThreeCurrent').attr('value') >= $('.playerCurrent').attr('value'))) {
    if (($('.computerTwoCurrent').attr('value') - $('.playerCurrent').attr('value')) < ($('.computerThreeCurrent').attr('value') - $('.playerCurrent').attr('value'))) {
      cpuTwo.hit = true;
    } else {
      cpuThree.hit = true;
    }
  }
  // determine if individual computer players are ahead of player
  else if ($('.computerOneCurrent').attr('value') >= $('.playerCurrent').attr('value')) {
    cpuOne.hit = true;
  } else if ($('.computerTwoCurrent').attr('value') >= $('.playerCurrent').attr('value')) {
    cpuTwo.hit = true;
  } else if ($('.computerThreeCurrent').attr('value') >= $('.playerCurrent').attr('value')) {
    cpuThree.hit = true;
  } else {
    alert('You Missed!');
  }
};

Item.prototype.blueShell = function() {
  console.log('blue shells!');

  if ($('.computerOneCurrent').attr('value') && $('.computerTwoCurrent').attr('value') && $('.computerThreeCurrent').attr('value') >= $('.playerCurrent').attr('value')) {
    cpuOne.hit = true;
    cpuTwo.hit = true;
    cpuThree.hit = true;
  } else if ($('.computerOneCurrent').attr('value') && $('.computerTwoCurrent').attr('value') >= $('.playerCurrent').attr('value')) {
    cpuOne.hit = true;
    cpuTwo.hit = true;
  } else if ($('.computerOneCurrent').attr('value') && $('.computerThreeCurrent').attr('value') >= $('.playerCurrent').attr('value')) {
    cpuOne.hit = true;
    cpuThree.hit = true;
  } else if ($('.computerTwoCurrent').attr('value') && $('.computerThreeCurrent').attr('value') >= $('.playerCurrent').attr('value')) {
    cpuTwo.hit = true;
    cpuThree.hit = true;
  } else if ($('.computerOneCurrent').attr('value') >= $('.playerCurrent').attr('value')) {
    cpuOne.hit = true;
  } else if ($('.computerTwoCurrent').attr('value') >= $('.playerCurrent').attr('value')) {
    cpuTwo.hit = true;
  } else if ($('.computerThreeCurrent').attr('value') >= $('.playerCurrent').attr('value')) {
    cpuThree.hit = true;
  } else {
    alert('You missed!');
  }
};

Item.prototype.banana = function() {
  console.log('bananas!');

  // determine if all computer players are behind player
  if (($('.computerOneCurrent').attr('value') <= $('.playerCurrent').attr('value')) && ($('.computerTwoCurrent').attr('value') <= $('.playerCurrent').attr('value')) && ($('.computerThreeCurrent').attr('value') <= $('.playerCurrent').attr('value'))) {
    // determine if computer one is closest
    if ($('.computerOneCurrent').attr('value') - $('.playerCurrent').attr('value') > ($('.computerTwoCurrent').attr('value') - $('.playerCurrent').attr('value')) && ($('.computerThreeCurrent').attr('value') - $('.playerCurrent').attr('value'))) {
      cpuOne.hit = true;
    }
    // determine if computer two is closest
    else if ($('.computerTwoCurrent').attr('value') - $('.playerCurrent').attr('value') > ($('.computerOneCurrent').attr('value') - $('.playerCurrent').attr('value')) && ($('.computerThreeCurrent').attr('value') - $('.playerCurrent').attr('value'))) {
      cpuTwo.hit = true;
    }
    // determine if computer three is closest
    else if ($('.computerThreeCurrent').attr('value') - $('.playerCurrent').attr('value') > ($('.computerTwoCurrent').attr('value') - $('.playerCurrent').attr('value')) && ($('.computerOneCurrent').attr('value') - $('.playerCurrent').attr('value'))) {
      cpuThree.hit = true;
    }
  }
  // determine which computer player is closest if computer one and computer two are behind player
  else if (($('.computerOneCurrent').attr('value') <= $('.playerCurrent').attr('value')) && ($('.computerTwoCurrent').attr('value') <= $('.playerCurrent').attr('value'))) {
    if (($('.computerOneCurrent').attr('value') - $('.playerCurrent').attr('value')) > ($('.computerTwoCurrent').attr('value') - $('.playerCurrent').attr('value'))) {
      cpuOne.hit = true;
    } else {
      cpuTwo.hit = true;
    }
  }
  // determine which computer player is closest if computer one and computer three are behind player
  else if (($('.computerOneCurrent').attr('value') <= $('.playerCurrent').attr('value')) && ($('.computerThreeCurrent').attr('value') <= $('.playerCurrent').attr('value'))) {
    if (($('.computerOneCurrent').attr('value') - $('.playerCurrent').attr('value')) > ($('.computerThreeCurrent').attr('value') - $('.playerCurrent').attr('value'))) {
      cpuOne.hit = true;
    } else {
      cpuThree.hit = true;
    }
  }
  // determine which computer player is closest if computer two and computer three are behind player
  else if (($('.computerTwoCurrent').attr('value') <= $('.playerCurrent').attr('value')) && ($('.computerThreeCurrent').attr('value') <= $('.playerCurrent').attr('value'))) {
    if (($('.computerTwoCurrent').attr('value') - $('.playerCurrent').attr('value')) > ($('.computerThreeCurrent').attr('value') - $('.playerCurrent').attr('value'))) {
      cpuTwo.hit = true;
    } else {
      cpuThree.hit = true;
    }
  }
  // determine if individual computer players are behind player
  else if ($('.computerOneCurrent').attr('value') <= $('.playerCurrent').attr('value')) {
    cpuOne.hit = true;
  } else if ($('.computerTwoCurrent').attr('value') <= $('.playerCurrent').attr('value')) {
    cpuTwo.hit = true;
  } else if ($('.computerThreeCurrent').attr('value') <= $('.playerCurrent').attr('value')) {
    cpuThree.hit = true;
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
  console.log(selected);
  switch (selected) {
    case 0:
      cachedItem = shell;
      break;
    case 1:
      cachedItem = banana;
      break;
    case 2:
      cachedItem = blueShell;
      break;
  }
};
