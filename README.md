# Track satelites with API's!

This project uses webpack to transpile and bundle ES6 React code. To use, consider these steps:

Fork this repo
Rename your repo according to the app you're building



* `git clone https://github.com/[your-account]/[your-app].git `
* `cd [your-app] && npm install`



To start the development server with a watcher that rebuilds your code, run npm run dev. The assets built by webpack are placed in server/public. This folder is defined as a static folder in an Express.js server that can be started with: `npm run dev`


Additional components should be placed in client/components.


> I have added a script that makes multiple requests to the ISS API. Once it has receieved 69 coordinates it writes the coords to a JSON file. To run the script use the command: `npm run reqs`.