
'use strict';

/**
 * get real year, month, day
 *
 * @param year
 * @param month
 * @param day
 * @param dayMark
 * @returns {{year: number, month: number, day: number}}
 */
module.exports = (year, month, day, dayMark) => {

    var realYear = year;
    var realMonth = month;
    var realDay = day;

    // prev month
    if (dayMark === -1) {
        realMonth -= 1;
        if (realMonth < 1) {
            realMonth = 12;
            realYear -= 1;
        }
    }
    // next month
    else if (dayMark === 1) {
        realMonth += 1;
        if (realMonth > 12) {
            realMonth = 1;
            realYear += 1;
        }
    }

    return {
        year: realYear,
        month: realMonth,
        day: realDay
    };
};
