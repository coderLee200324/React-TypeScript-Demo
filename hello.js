"use strict";
var a = "Hello TypeScript";
var sex;
(function (sex) {
    sex["BOY"] = "\u7537";
    sex["GIRL"] = "\u5973";
})(sex || (sex = {}));
console.log(sex);
console.log("He is a " + sex.BOY);
