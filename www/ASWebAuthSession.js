var PLUGIN_NAME = 'ASWebAuthSession';
function ASWebAuthSession() {}

ASWebAuthSession.prototype.start = function(redirectScheme, requestURL, callback, errorCallback) {
  cordova.exec(callback, errorCallback, PLUGIN_NAME, 'start', [redirectScheme, requestURL]);
};

ASWebAuthSession.prototype.cancel = function(){
  cordova.exec('cancel');
};

ASWebAuthSession.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.ASWebAuthSession = new ASWebAuthSession();
  return window.plugins.ASWebAuthSession;
};
cordova.addConstructor(ASWebAuthSession.install);
