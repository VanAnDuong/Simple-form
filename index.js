const express = require('express');
const bodyParser = require('body-parser');

const app = express();
var port = normalizePort(process.env.PORT || '3000');

app.set('port', port);

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number 
        return port;
    } return false;
}

// Middlewares
app.use(express.static('public_html'));
app.use(bodyParser.urlencoded({ extended: false })); 

// Routes
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.post('/feedback', (req, res) => {
    let name = req.body.name;
    let password = req.body.password;
    let feedback = req.body.feedback;
    let contact = req.body.contact;
    
    const resp = `
    <html>
    <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossorigin="anonymous">
    </head>
    <body>
    <div class="container">
        <h1>dKin Pizza</h1>
        <h2>We appreciate your feedback</h2>
        <p>Thanks for taking the time to contact us. Our dKin Pizza team will respond to you within 2 business days.</p>
        <p>Just to confirm, the details you entered into the feedback form was:</p>
        <p>Name: <span style="color: blue;">${name}</span></p>
        <p>Password: <span style="color: blue;">${password}</span></p>
        <p>Feedback: <span style="color: blue;">${feedback}</span></p>
        <p>Contact Method: <span style="color: blue;">${contact}</span></p>
        <p> Please click here <button onclick="window.location.href='/'" class="btn btn-primary">here</button> to return the feedback page.</p>
    `;
    res.send(resp);
});

// Tell our application to listen to requests at port 3000 on the localhost
app.listen(port, function () {
    // When the application starts, print to the console that our app is
    // running at http://localhost:3000 (where the port number is 3000 by
    // default). Print another message indicating how to shut the server down.
    console.log(`Web server running at: http://localhost:${port}`);
    console.log("Type Ctrl+C to shut down the web server");
});
