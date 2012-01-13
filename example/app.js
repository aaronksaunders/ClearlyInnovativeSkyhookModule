// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.

// open a single window
var window = Ti.UI.createWindow({
    backgroundColor: 'white'
});
var label = Ti.UI.createLabel();
window.add(label);
window.open();

// TODO: write your module tests here
var skyhook = require('clearlyinnovative.skyhook');
Ti.API.info("module is => " + skyhook);


if (Ti.Platform.name == "android") {
    var proxy = skyhook.createSkyhookManager({});
    
    Ti.API.info("module is => " + proxy);

    proxy.skyhookLocation({
        success: function(d) {
            Ti.API.info("response is => " + JSON.stringify(d));
        },
        error: function(d) {
            Ti.API.info("error is => " + JSON.stringify(d));
        }
    });
}

