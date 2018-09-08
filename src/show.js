import $ from 'jquery';
import makeHtml from './make_html';
import getLunarDate from './util/get_lunar_date';

export default self => {
  /* eslint-disable array-callback-return */
  $(self.picker)
    .find('.day')
    .map(function() {
      const $this = $(this);
      const originText = $this.html();

      // Have rendered before.
      if (originText.indexOf('<br>') > -1) return;

      // time(timestamp)
      const date = parseInt($this.attr('data-date'), 10);

      const lunarInfo = getLunarDate(date);

      $this
        .addClass('lunar-day')
        .html(makeHtml(originText, lunarInfo.day === 1 ? lunarInfo.monthName : lunarInfo.dayName));
    });
};
