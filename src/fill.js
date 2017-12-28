
'use strict';

var $ = require('jquery');

var makeHtml = require('./make_html');
var getLunarDate = require('./util/get_lunar_date');

module.exports = (self) => {

    var year = self.viewDate.getFullYear();
    var month = self.viewDate.getMonth() + 1;

    $(self.picker).find('.day').map(function () {
        var $this = $(this);
        var originText = $this.html();

        // have rendered before
        if (originText.indexOf('<br>') > -1) return;

        var day = parseInt(originText);
        // -1: prev month, 0: current month, 1: next month
        var dayMark = 0;

        if ($this.hasClass('old')) dayMark = -1;
        else if ($this.hasClass('new')) dayMark = 1;

        var lunarInfo = getLunarDate(year, month, day, dayMark);

        $this.addClass('lunar-day').html(makeHtml(originText, lunarInfo.day === 1 ? lunarInfo.monthName : lunarInfo.dayName));
    });
};
