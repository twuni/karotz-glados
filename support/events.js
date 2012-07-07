( function( cache ) {

  /**
   * `karotz.on("foo")` triggers the "foo" event.
   * `karotz.on("foo",onFoo)` registers the `onFoo` function as a listener for the "foo" event.
   * `karotz.on("foo",123,"abc")` triggers the "foo" event, passing `123` and `"abc"` to listeners as arguments.
   * `karotz.on("foo",onFoo,bar)` registers the `onFoo` function as a listener for the "foo" event. `onFoo` will be called on the `bar` object.
   */
  karotz.on = function( event, callback, data ) {

    if( !data ) { data = {}; }

    cache[event] = cache[event] || [];

    if( typeof(callback) === "function" ) {

      // Register the event listener.
      cache[event].push( { callback: callback, data: data } );

    } else {

      // Trigger the event, notifying each listener.
      var parameters = Array.prototype.slice.call( arguments, 1 );
      cache[event].map( function(a) { a.callback.apply( data, parameters ); } );

    }

  };

  /**
   * `karotz.off("foo")` removes all listeners from the "foo" event.
   * `karotz.off("foo",onFoo)` removes the `onFoo` listener from the "foo" event.
   */
  karotz.off = function( event, callback ) {

    cache[event] = cache[event] || [];

    if( typeof(callback) === "function" ) {

      // Remove a specific listener for this event.
      cache[event] = cache[event].reduce( function(a,b) {
        if( b.callback !== callback ) { a.push(b); }
        return a;
      }, [] );

    } else {

      // Remove all listeners for this event.
      cache[event] = undefined;
      delete cache[event];

    }

  };

} )( {} );
