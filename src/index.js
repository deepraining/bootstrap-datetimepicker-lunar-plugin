import $ from 'jquery';
import 'bootstrap-datepicker';
import './index.less';
import show from './show';

// datepicker prototype
const proto = $.fn.datepicker.prototype.constructor.Constructor.prototype;

// rewrite datepicker.prototype.show
proto.oldShow = proto.show;
proto.show = function(...args) {
  const self = this;
  self.oldShow(args);

  show(self);
};
