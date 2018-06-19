const fileUtils = require("../utils/fileUtil.js")

module.exports = class SubscriberController {


    async handleReviewNotification(request, response) {
        if (!global.requestDump)
            global.requestDump = [];

        global.requestDump.push(request.body)
        //response.statusCode = 200;
        response.send('DONE!');
    }

    async getRequests(request, response) {
         console.log(global.requestDump);
        let fileFullPath = '../files/logFile.json';
        response.send(global.requestDump);
    }
}