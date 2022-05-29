Example presented at: the complete web development bootcamp on Udemy


# Call EXTERNAL API from a web server in Node.js/Express.

Basic HTML page to insert to your city
The web server (in JS) makes an API call to an external service to get the weather info and returns it to the web client.
The web-server is built with Express (Node.js)

## getting started
To get Node server running locally:
- clone this repo
- `npm install` to install the required dependecies (as in package.json)

## dependencies
- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [body-parser](https://github.com/expressjs/body-parser) - The module for parsing incoming HTTP requests

#### main steps of the excercise:

1. create a new file called app.js
2. create a new file index.html (static) to get the city
3. Set up a new NPM package (setting app.js as the entry point)
4. Using NPM install the express module and body-parser
5. Require express in your app.js
6. Setup express
7. Call the external API and return the result

Spin up our server on port 3000 with app.listen and run server with nodemon.
