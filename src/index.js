import $ from 'jquery';
import 'bootstrap-datetime-picker';
import './index.less';
import fill from './fill';

// datetimepicker prototype
const proto = $.fn.datetimepicker.prototype.constructor.Constructor.prototype;

// rewrite  datetimepicker.prototype.show
proto.oldFill = proto.fill;
proto.fill = function(e) {
  const self = this;
  self.oldFill(e);

  fill(self);
};
