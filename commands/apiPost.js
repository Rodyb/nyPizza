var util = require('util');
var events = require('events');

function apiPost () {}
util.inherits(apiPost, events.EventEmitter);

apiPost.prototype.command = function (success, foo) {
    var request = require("request");

    // var options = {
    //     uri: apiUrl,
    //     method: "POST",
    //     json: postBody
    // };
    //
    // if (postHeaders !== undefined) {
    //     options.headers = postHeaders;
    // }
    // if (postAuth !== undefined) {
    //     options.auth = postAuth;
    // }
    //
    // request(options, function (error, response) {
    //     if (error) {
    //         console.log(error);
    //         return;
    //     }
    //
    //     success(response);
    //     this.emit('complete');
    // }.bind(this));
    var options = { method: 'POST',
        url: 'https://main-api.env-dev3.vivantehealth.org/dev/epistle',
        headers:{
        Authorization: 'Basic bm9ocG9uZXgrZGFlbW9uQGdtYWlsLmNvbToxMjM0NTY3OHhY',
                       'Content-Type': 'application/json' },
        body:
            { data:
                    { type: 'epistle',
                        attributes:
                            { subject: 'hello',
                                body:  foo ,
                                type: 'USER_MESSAGE',
                                content_type: 'text/plain',
                                method: 'WEB' },
                        relationships:
                            { sender: { data: { type: 'user', id: '1315a3b6-1136-4f31-9c15-f3172066b1ab' } },
                                receiver: { data: { type: 'user', id: 'a1b937ea-4a9b-4767-bd7f-5039a2d668fa' } } } } },
        json: true };

        request(options, function (error, response, body) {
        if (error) {
            throw new Error(error);
        }

        success(response);
        //console.log(body);

        return this;
    });

};

module.exports = apiPost;