let el = document.createElement('div')
el.classList.add('loading-indicator')
document.body.appendChild(el)

module.exports = {
    activityStart: function (labelText, options, successCallback, failureCallback) {
        if(!el.classList.contains('loading')) {
            el.classList.add('loading')
        }

        if(typeof successCallback == 'function'){
            successCallback();
        }
    },
    activityStop: function(successCallback, failureCallback) {
        if(el.classList.contains('loading')) {
            el.classList.remove('loading')
        }

        if(typeof successCallback == 'function'){
            successCallback();
        }
    }
};

require("cordova/exec/proxy").add("Spinnerplugin", module.exports);