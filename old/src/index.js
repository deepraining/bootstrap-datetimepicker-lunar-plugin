
'use strict';

require('bootstrap-datetime-picker');
require('./css/index.css');

var $ = require('jquery');

var fill = require('./fill');

/**
 * datetimepicker prototype
 */
var proto = $.fn.datetimepicker.prototype.constructor.Constructor.prototype;

/**
 * rewrite  datetimepicker.prototype.show
 * @type {$.fn.datetimepicker.prototype.constructor.Constructor.show|*}
 */
proto.oldFill = proto.fill;
proto.fill = function(e){
    var self = this;
    self.oldFill(e);

    fill(self);
};


module.exports = void 0;