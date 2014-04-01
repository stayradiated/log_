'use strict';

var __slice, colors, createLogger, enabled;
__slice = Array.prototype.slice;

colors = {
  'reset':      '\u001b[0m',
  'bold':       '\u001b[1m',
  'italic':     '\u001b[3m',
  'underline':  '\u001b[4m',
  'blink':      '\u001b[5m',
  'black':      '\u001b[30m',
  'red':        '\u001b[31m',
  'green':      '\u001b[32m',
  'yellow':     '\u001b[33m',
  'blue':       '\u001b[34m',
  'magenta':    '\u001b[35m',
  'cyan':       '\u001b[36m',
  'white':      '\u001b[37m'
};

enabled = true;

createLogger = function (name, color) {
  var prefix, log;

  if (! color) color = 'reset';

  prefix = colors[color] + '[' + name + ']' + colors.reset;

  log = function () {
    if (! enabled) return;
    var args = __slice.call(arguments, 0);
    args.unshift(prefix);
    console.log.apply(console, args);
  };

  log.warn = color === 'red' ? log : createLogger(name, 'red');

  return log;

};

createLogger.enable = function() {
  enabled = true;
};

createLogger.disable = function () {
  enabled = false;
};

createLogger.colors = colors;

module.exports = createLogger;
