(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
    // Function to greet with "Hello"
    function helloSpeaker(name) {
      console.log("Hello " + name);
    }
  
    // Function to greet with "Good Bye"
    function byeSpeaker(name) {
      console.log("Good Bye " + name);
    }
  
    // Loop through names array
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
  
      if (firstLetter === 'j') {
        byeSpeaker(names[i]);
      } else {
        helloSpeaker(names[i]);
      }
    }
  
  })();
  