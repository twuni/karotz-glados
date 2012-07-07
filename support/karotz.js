// Do some basic logging.
karotz.on( "exit", function() { log( "exiting" ); } );
karotz.on( "connect", function() { log( "connected" ); } );
karotz.on( "start", function() { log( "started" ); } );
karotz.on( "error", function() { log( "[error] " + Array.prototype.join.call( arguments, ", " ) ); } );

// Update the exit() function to trigger the "exit" event before it runs.
exit = ( function(f,event) { return function() { karotz.on(event); f(); }; } )( exit, "exit" );

karotz.connectAndStart = function( host, port, callback, data ) {

  if( !host ) { karotz.on( "error", "host is required" ); return; }
  if( !port ) { port = 9123; }
  if( !callback ) { callback = function() {}; }
  if( !data ) { data = {}; }

  try {

    karotz.connect( host, port );
    karotz.on("connect");
    karotz.start( function() { karotz.on("start"); callback(); }, data );

    // Exit on double-tap.
    karotz.button.addListener( function(event) {
      if( /^(DOUBLE)$/.test(event) ) {
        exit();
      }
      return true;
    } );

  } catch(error) {
    // Report the error and quit.
    karotz.on( "error", error );
    exit();
  }

};
