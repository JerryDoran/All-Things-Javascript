let content = document.getElementById('reporter');
let listeners = [];
let listenersEnabled = false;
let printIt = true;
let lastEvent;

// All previous variables that were global are no longer that way.  Wrapping everything
// inside this Immediately Invoked Function Expression.
(function() {
  // Write info to the div.  Includes event object information
  let loadInfo = function(message, eventObj) {
    content.insertAdjacentHTML(
      'afterbegin',
      message +
        ' -- event type: ' +
        eventObj.type +
        ' -- target object: ' +
        eventObj.target.nodeName +
        '<br>'
    );
  };

  // Adds listeners to the document
  let addListeners = function() {
    let keyDownHandler = function(e) {
      loadInfo('A key was pressed:' + e.keyCode + ' -- ' + e.key, e);
      // This if statement checks if 'ctrl + s' was pressed
      if (e.keyCode === 83 && e.ctrlKey) {
        toggleEventListeners();
      }
    };
    document.addEventListener('keydown', keyDownHandler);
    listeners.push(keyDownHandler, 'keydown');

    let mouseMoveHandler = function(e) {
      lastEvent = e;
      if (printIt) {
        printIt = false;
        loadInfo(
          'Mouse move recorded at coordinates: ' + e.pageX + ', ' + e.pageY,
          e
        );
        setTimeout(() => {
          printIt = true;
        }, 500);
      }
    };
    document.addEventListener('mousemove', mouseMoveHandler);
    listeners.push(mouseMoveHandler, 'mousemove');

    // Once listeners are added, sets this to true for toggle function
    listenersEnabled = true;
  };

  // Removes listeners from the document so user can examine data
  let removeListeners = function() {
    while (listeners.length > 0) {
      document.removeEventListener(listeners.pop(), listeners.pop());
    }
  };

  // Called to initialize.  Determines whether to add or remove listeners based on current state.
  let toggleEventListeners = function() {
    if (listenersEnabled) {
      removeListeners();
      console.log('Event listeners removed');
    } else {
      addListeners();
      console.log('Listeners added');
    }
  };

  // Sets up listeners
  toggleEventListeners();
})();
