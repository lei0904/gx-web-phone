import JSBridge from '../core/ces.jsbridge.js';

let SignName = (function () {

  let _signName = function (callback,params) {
    params = [];
    JSBridge.callHandler('signName', params, callback);
  };

  return {
    name: "Ces.Plugins.signName",
    take: _signName
  }
})();

export default SignName;
