chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('window.html', {
        'bounds': {
            'width': Math.round(window.screen.availWidth*0.95),
            'height': Math.round(window.screen.availHeight*0.8)
        }
    });
});

/*chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'state': "fullscreen"
  });
});
*/