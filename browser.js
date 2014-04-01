'use strict';

var __slice, colors, serialize, createLogger, enabled;
__slice = Array.prototype.slice;

colors = {
  'reset':      'colors: black',
  'bold':       'font-weight: bold',
  'italic':     'font-style: italic',
  'underline':  'text-decoration: underline',
  'blink':      '',
  'black':      'color: #000',
  'red':        'color: red',
  'green':      'color: green',
  'yellow':     'color: yellow',
  'blue':       'color: blue',
  'magenta':    'color: magenta',
  'cyan':       'color: cyan',
  'white':      'color: white'
};

enabled = true;

serialize = function (args) {
  var string = '';
  args.forEach(function (value) {
    string += ' ';
    if (typeof value === 'string') {
      string += value;
    } else {
      string += JSON.stringify(value, null, 4);
    }
  });
  return string;
};

createLogger = function (name, color) {
  var prefix, style, log;

  prefix = '%c' + '[' + name + ']' + '%c';
  style = colors[color];

  log = function () {
    if (! enabled) return;
    var args = __slice.call(arguments, 0);
    var contents = serialize(args);
    console.log(prefix + contents, style, colors.reset);
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

