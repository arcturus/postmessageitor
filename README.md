postmessageitor
===============

Express app that will redirect all the get paramters to the opener window via postMessage

Why?
----

Imagine yourself in the scenario of where you have to authenticate using Oauth 1.0 and don't
want to loose the window context, open a new window (not an iframe ;P) and receive the result
of the callback function in the window opener

Example
-------

    var MY_REDIRECTOR_URL=<here is where you deploy postmessageitor>;
    var windowHandler;
  
    // Registir a callback to listen to the messages from postmessageitor
    window.addEventListener('message', function(evt) {
      console.log(JSON.stringify(evt.data));
      windowHandler.close();
    });

    // Open the window
    windowHandler = window.open('http://<my site that needs Oauth 1.0>?callbackurl=' + MY_REDIRECTOR_URL);



Modify and deploy
-----------------

Modify the file _postmessage.html_ to present any kind of UI to the user meanwhile you decide what to do with the window.
