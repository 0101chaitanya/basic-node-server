const http = require("http");

const server = http.createServer((req, res) => {
    let path = "./routes/";

    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        case "/contact-me":
            path += "contact-me.html";
            res.statusCode = 200;
            break;
        default:
            path += "404.html";
            res.statusCode = 404;
            setTimeout(() => {
                res.setHeader("Location", "/");
                res.statusCode = 301;
            }, 3000);
    }
    res.end();
});

server.listen(8080, "localhost", (err) => {
    if (err) {
        console.log(err);
    }
});