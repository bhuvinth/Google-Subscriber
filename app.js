const port = process.ListenPort || 8088; 
const express = require('express');
const app = express();
const bodyParser     =        require("body-parser");
const views = app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

//#endregion
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("./routeHandlers.js")(app);
app.listen(port);

process.on('unhandledRejection', error => {
    // Won't execute
    console.log('unhandledRejection');
    console.error(error);
});

process.on('unhandledError', error => {
    // Won't execute
    console.log('unhandledRejection');
    console.error(error);
});