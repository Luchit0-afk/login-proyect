const mongoose = require("mongoose");
const url = 'mongodb://127.0.0.1:27017/login'

mongoose.Promise = global.Promise;

mongoose.connect(
    url,
);

mongoose.connection
    .once("open", function () {
        console.log("[MongoDB] Connection succesfull");
    })
    .on("error", function (error) {
        console.log("[MongoDB] Connection error...", error);
    });
