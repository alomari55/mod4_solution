// STEP 1: Wrap the entire contents of script.js inside of an IIFE
(function () {
  var names = ["Yaakov", "John", "Ronaldo", "Jason", "Paul", "Mike", "Larry", "Paula", "Laura", "Aziz"];

  // STEP 10: Loop over the names array and say either 'Hello' or "Good Bye"
  // using either the helloSpeaker's or byeSpeaker's 'speak' method.
  for (var i = 0; i < names.length; i++) {
    // STEP 11: Retrieve the first letter of the current name in the loop.
    var firstLetter = names[i].charAt(0).toLowerCase();

    // STEP 12: Compare the 'firstLetter' to lower case 'j' and call
    // the appropriate speak method.
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
