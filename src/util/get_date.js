/**
 * Get year, month, day, week according to input time(timestamp).
 *
 * @param time
 * @returns {{year: number, month: number, week: number, day: number}}
 */
export default time => {
  const date = new Date();
  date.setTime(time);

  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    week: date.getDay(),
    day: date.getDate(),
  };
};
