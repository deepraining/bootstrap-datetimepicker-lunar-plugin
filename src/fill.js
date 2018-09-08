import $ from 'jquery';
import makeHtml from './make_html';
import getLunarDate from './util/get_lunar_date';

export default self => {
  const year = self.viewDate.getFullYear();
  const month = self.viewDate.getMonth() + 1;

  /* eslint-disable array-callback-return */
  $(self.picker)
    .find('.day')
    .map(function() {
      const $this = $(this);
      const originText = $this.html();

      // Have rendered before.
      if (originText.indexOf('<br>') > -1) return;

      const day = parseInt(originText, 10);
      // -1: prev month, 0: current month, 1: next month
      let dayMark = 0;

      if ($this.hasClass('old')) dayMark = -1;
      else if ($this.hasClass('new')) dayMark = 1;

      const lunarInfo = getLunarDate(year, month, day, dayMark);

      $this
        .addClass('lunar-day')
        .html(makeHtml(originText, lunarInfo.day === 1 ? lunarInfo.monthName : lunarInfo.dayName));
    });
};
