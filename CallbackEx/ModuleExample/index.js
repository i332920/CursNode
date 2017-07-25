console.log("module example started");

var myModule = require("./modules/mymodule.js");

myModule.start();

console.log("Config.conf1 = " + myModule.config.conf1);