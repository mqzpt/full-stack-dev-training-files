const fs = require("fs");

// fs.renameSync("./assets/logs", "accounts/logs");

// console.log("moved")

fs.rmdir("./assets", function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("./assets directory removed")
    }
})