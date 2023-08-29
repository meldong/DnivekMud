var logger = function () {};

logger.prototype.info = function (logText) {
  console.log(new Date() + "info:::::" + logText);
};

logger.prototype.debug = function (logText) {
  console.log(new Date() + "debug:::::" + logText);
};

logger.prototype.error = function (logText) {
  console.log(new Date() + "error:::::" + logText);
};

module.exports = new logger();
