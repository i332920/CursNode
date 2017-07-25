//console.log("unit test example started");

var myValidator = required("./modules/passwordValidator");

var password = "testBauBau2017";
var valid = myValidator.validPassword("testBauBau2017");

console.log("Your password '" + password + "' is : " + valid);