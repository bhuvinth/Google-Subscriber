const fs = require('fs');

module.exports = class fileUtil {
    async writeToFileAsync(content, fullFilePath) {
        return new Promise(function (resolve, reject) {
            fs.writeFile(fullFilePath, JSON.stringify(request), function (err) {
                if (err) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }

    async readFileAsync(fileName) {
        return new Promise(function (resolve, reject) {
            fs.readFileAsync(path, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }
}