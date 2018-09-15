// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');

// creating a server using http module:
var server = http.createServer(function (request, response) {
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);


    // this is how we do routing:
    if (request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    } else if (request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    } else if (request.url === '/cars/new') {
        fs.readFile('views/newCar.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    } else if (request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    } else if (request.url === '/images/1(1).jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/1(1).jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/1(2).jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/1(2).jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/1(3).jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/1(3).jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/1(4).jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/1(4).jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/1(5).jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/1(5).jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/1(6).jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/1(6).jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/1(7).jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/1(7).jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/1(8).jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/1(8).jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/1(9).jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/1(9).jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/styles/style.css') {
        fs.readFile('./styles/style.css', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'text/css' });
            response.write(contents);
            response.end();
        });
    } else {   // request didn't match anything:
        response.writeHead(404);
        response.end('File not found!');
    }
});

// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log('Running in localhost at port 6789');
