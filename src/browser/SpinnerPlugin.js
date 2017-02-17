module.exports = {
    activityStart: function (labelText, options, successCallback, failureCallback) {
        if(typeof successCallback == 'function'){
            successCallback();
        }
    },
    activityStop: function(successCallback, failureCallback) {
        if(typeof successCallback == 'function'){
            successCallback();
        }
    }
};

require("cordova/exec/proxy").add("Spinnerplugin", module.exports);