// JavaScript source code
module.exports = {
    XmlHttpRequest: function (success, fail, args) {
        var param1 = args.shift();
        var param2 = args.shift();
        var res = AppspaceXHRProxy.XHR.XmlHttpRequest(param1,param2);
        if (res != undefined) {
            success(res);
        } else {
            fail();
        }
    };
};
require("cordova/exec/proxy").add("AppspaceXHRProxy", module.exports);