'use strict';


module.exports = function (server) {

    server.get('/coinbasecallback', function (req, res) {

        res.send("Hello coinbase");

    });

};
