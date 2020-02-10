'use strict';
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write(' ');
    setTimeout(() => {
        res.end('<!DOCTYPE html><html><head><title>Hello</title></head><body><h1>Hello</h1></body></html>');
    }, 15000);
}).listen(8080);
