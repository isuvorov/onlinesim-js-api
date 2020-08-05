"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetNumbers_1 = require("./Apis/GetNumbers");
var GetRent_1 = require("./Apis/GetRent");
var GetProxy_1 = require("./Apis/GetProxy");
var GetUser_1 = require("./Apis/GetUser");
var GetFree_1 = require("./Apis/GetFree");
var GetForward_1 = require("./Apis/GetForward");
var OnlineSimDriver = (function () {
    function OnlineSimDriver(apiToken, dev_id, lang) {
        if (dev_id === void 0) { dev_id = null; }
        if (lang === void 0) { lang = 'en'; }
        this.token = apiToken;
        this.dev_id = dev_id;
        this.lang = lang;
    }
    OnlineSimDriver.prototype.numbers = function () {
        return new GetNumbers_1.default(this.token, this.dev_id, this.lang);
    };
    OnlineSimDriver.prototype.rent = function () {
        return new GetRent_1.default(this.token, this.dev_id, this.lang);
    };
    OnlineSimDriver.prototype.proxy = function () {
        return new GetProxy_1.default(this.token, this.dev_id, this.lang);
    };
    OnlineSimDriver.prototype.user = function () {
        return new GetUser_1.default(this.token, this.dev_id, this.lang);
    };
    OnlineSimDriver.prototype.free = function () {
        return new GetFree_1.default(this.token, this.dev_id, this.lang);
    };
    OnlineSimDriver.prototype.forward = function () {
        return new GetForward_1.default(this.token, this.dev_id, this.lang);
    };
    return OnlineSimDriver;
}());
exports.default = OnlineSimDriver;
try {
    window.OnlineSimDriver = OnlineSimDriver;
}
catch (err) { }
//# sourceMappingURL=index.js.map