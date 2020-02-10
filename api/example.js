'use strict';

module.exports = function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write(' ');
    setTimeout(() => {
        res.end('<!DOCTYPE html><html><head><title>Hello</title></head><body><h1>Hello</h1></body></html>');
    }, 5000);
};
