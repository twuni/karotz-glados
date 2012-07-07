/**
 * Varies the pitch or individual words in a phrase between the given range in Hz.
 **/
var PitchRandomizer = function( fromHz, toHz ) {
  this.fromHz = fromHz;
  this.toHz = toHz;
};

PitchRandomizer.prototype = {
  generatePitch: function() { return this.fromHz + Math.floor( Math.random() * ( this.toHz - this.fromHz ) ) + " Hz"; },
  filter: function( message ) {
    var randomizer = this;
    return message.split(" ").map( function(fragment) {
      return '<prosody pitch="' + randomizer.generatePitch() + '">' + fragment + '</prosody>';
    } ).join(" ");
  }
};

/**
 * Adjusts the speech rate for an entire phrase.
 **/
var SpeechRate = function( rate ) {
  if( !rate ) { rate = "x-slow"; }
  this.rate = rate;
};

SpeechRate.prototype = {
  filter: function( message ) {
    return '<prosody rate="' + this.rate + '">' + message + '</prosody>';
  }
};

/**
 * Performs a series of transformations on a phrase, executing its filters sequentially.
 **/
var DelegatingFilter = function( filters ) {
  this.filters = filters;
}

DelegatingFilter.prototype = {
  filter: function( message ) {
    return this.filters.reduce( function(a,b) { return b.filter(a); }, message );
  }
};

/**
 * Tells Karotz to speak in the given language, applying the filter to each phrase.
 **/
var Voice = function( language, filter ) {
  if( !language ) { language = "en"; }
  if( !filter ) { filter = { filter: function(message) { return message; } }; }
  this.language = language;
  this.filter = filter;
};

Voice.prototype = {
  say: function( message, onComplete ) {
    if( !onComplete ) { onComplete = function() {}; }
    karotz.tts.start( this.filter.filter(message), this.language, function(event) { if( /^(TERMINATED|CANCELLED)$/.test(event) ) { onComplete(); } return true; } );
  }
};
