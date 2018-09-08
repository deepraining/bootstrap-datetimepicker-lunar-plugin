
'use strict';

var LunarCalendar = require('lunar-calendar');

var getRealDate = require('./get_real_date');

/**
 * get lunar year, month, day
 *
 * @param year
 * @param month
 * @param day
 * @param dayMark
 */
module.exports = (year, month, day, dayMark) => {
    var date = getRealDate(year, month, day, dayMark);

    var lunarInfo = LunarCalendar.solarToLunar(date.year, date.month, date.day);

    return {
        year: lunarInfo.lunarYear,
        month: lunarInfo.lunarMonth,
        monthName: lunarInfo.lunarMonthName,
        day: lunarInfo.lunarDay,
        dayName: lunarInfo.lunarDayName
    };
};
