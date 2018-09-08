import LunarCalendar from 'lunar-calendar';
import getRealDate from './get_real_date';

/**
 * Get lunar year, month, day.
 *
 * @param year
 * @param month
 * @param day
 * @param dayMark
 */
export default (year, month, day, dayMark) => {
  const date = getRealDate(year, month, day, dayMark);

  const lunarInfo = LunarCalendar.solarToLunar(date.year, date.month, date.day);

  return {
    year: lunarInfo.lunarYear,
    month: lunarInfo.lunarMonth,
    monthName: lunarInfo.lunarMonthName,
    day: lunarInfo.lunarDay,
    dayName: lunarInfo.lunarDayName,
  };
};
