include("support/events.js");
include("support/voice.js");
include("support/karotz.js");
include("messages.js");

// Initialize the imperfect AI voice.
var voice = new Voice( "en", new DelegatingFilter( [
  new PitchRandomizer( 225, 250 ),
  new SpeechRate( "x-slow" )
] ) );

// Say a random phrase on start.
karotz.on( "start", function() { voice.say( messages.random(), exit ); } );

// Connect to Karotz.
karotz.connectAndStart("localhost");
