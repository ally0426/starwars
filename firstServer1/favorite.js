
// Home
// Favorite Food
// Favorite Movies
// Favorite CSS Frameworks

var http = require("http");

var PORT = 8080;

var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function () {
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:" + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;

    // Depending on the URL, display a different HTML file.
    switch (path) {

        case "/":
            return displayRoot(path, req, res);

        case "/food":
            return displayFood(path, req, res);

        case "/movies":
            return displayMovies(path, req, res);

        case "/cssFrames":
            return displayCssFrames(path, req, res);

        default:
            return display404(path, req, res);
    }
}

// When someone visits the "http://localhost:8080/" path, this function is run.
function displayRoot(url, req, res) {
    var myHTML = "<html>" +
        "<body><h1>Home Page</h1>" +
        "<a href='/food'>Food</a>" + " " +
        "<a href='/movies'>Movies</a>" + " " +
        "<a href='/cssFrames'>CSS Frames</a>" +
        "</body></html>";

    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { "Content-Type": "text/html" });

    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
}

// When someone visits the "http://localhost:8080/portfolio" path, this function is run.
function displayFood(url, req, res) {
    var myHTML = "<html>" +
        "<body><h1>Favorite Food</h1>" +
        "<ul><li>Sushi</li><li>Pizza</li><li>Chicken Soup</li></ul>" +
        "<a href='/'>Go Home</a>" +
        "</body></html>";

    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { "Content-Type": "text/html" });

    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
}

function displayMovies(url, req, res) {
    var myHTML = "<html>" +
        "<body><h1>Favorite Movies</h1>" +
        "<ul><li>Life is beautiful</li><li>Amelie</li><li>Indiana Jones</li></ul>" +
        "<a href='/'>Go Home</a>" +
        "</body></html>";

    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { "Content-Type": "text/html" });

    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
}

function displayCssFrames(url, req, res) {
    var myHTML = "<html>" +
        "<body><h1>Favorite CSS frames</h1>" +
        "<ul><li>Bootstrap</li><li>LESS</li><li>Materialize</li></ul>" +
        "<a href='/'>Go Home</a>" +
        "</body></html>";

    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { "Content-Type": "text/html" });

    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
}

// When someone visits any path that is not specifically defined, this function is run.
function display404(url, req, res) {
    var myHTML = "<html>" +
        "<body><h1>404 Not Found </h1>" +
        "<p>The page you were looking for: " + url + " can not be found</p>" +
        "</body></html>";

    // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
    res.writeHead(404, { "Content-Type": "text/html" });

    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
}