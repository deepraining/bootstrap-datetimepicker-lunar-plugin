import LunarCalendar from 'lunar-calendar';
import getDate from './get_date';

/**
 * Get lunar year, month, day, week according to input time(timestamp).
 *
 * @param time
 */
export default time => {
  const date = getDate(time);

  const lunarInfo = LunarCalendar.solarToLunar(date.year, date.month, date.day);

  return {
    year: lunarInfo.lunarYear,
    month: lunarInfo.lunarMonth,
    monthName: lunarInfo.lunarMonthName,
    day: lunarInfo.lunarDay,
    dayName: lunarInfo.lunarDayName,
  };
};
