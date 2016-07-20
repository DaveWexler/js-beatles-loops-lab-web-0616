function theBeatlesPlay(musicians, instruments) {
  var band = [];
  for (var i = 0; i < musicians.length; i++) {
    band.push(`${musicians[i]} plays ${instruments[i]}`);
  };
  return band;
}

function johnLennonFacts(facts) {
  var newfacts = [];
  var i = 0;
  while (i < facts.length) {
    newfacts.push(facts[i] + "!!!");
    i++;
  }
  return newfacts;
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return array;
}