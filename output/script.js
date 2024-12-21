"use strict";
//Enums
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILURE"] = 1] = "FAILURE";
    RType[RType["AUTHENTCATED"] = 2] = "AUTHENTCATED";
    RType[RType["UNAUTHINTICATE"] = 3] = "UNAUTHINTICATE";
})(RType || (RType = {}));
const response1 = {
    status: 200,
    type: RType.UNAUTHINTICATE,
    data: {
        name: "andis",
    },
};
console.log(response1);
