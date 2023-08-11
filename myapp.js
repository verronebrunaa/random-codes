const express = require('express'); // import express
const app = express(); // create express app
const port = 3000; // here we defined the port and we will use it later

app.get('/route/', (req, res) => { // here we defined the route and the callback function
    res.send('Hello World!'); // here we send the response
}); 

app.listen(port, () => { // here we start the server
    console.log(`Example app listening at http://localhost:${port}`); // here we log the port
});

//execute the command node myapp.js and open the browser at http://localhost:3000/route/ to see the result 