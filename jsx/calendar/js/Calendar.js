'use strict';

function changeLetter(date) {
  if (date.getMonth() === 2 || date.getMonth() === 7) {
    let genitive = date.toLocaleString('ru-RU', {month: 'long'});
    genitive += 'а';
    return genitive;
  } else {
    let genitive = date.toLocaleString('ru-RU', {month: 'long'});
    genitive = genitive.substr(0, genitive.length - 1) + 'я';
    return genitive;
  }
}
function changeForm(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const weekdays = [
  { long: 'Понедельник', short: 'Пн' },
  { long: 'Вторник', short: 'Вт' },
  { long: 'Среда', short: 'Ср' },
  { long: 'Четверг', short: 'Чт' },
  { long: 'Пятница', short: 'Пт' },
  { long: 'Суббота', short: 'Сб' },
  { long: 'Воскресенье', short: 'Вс' }
];

const Calendar = ({date}) => {
  const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const currentDate = date.getDate();

  const cols = weekdays.map(day => <th scope="col" title={day.long}>{day.short}</th>);

  const days = () => {
    let dateNum = 2 - firstDay;
    let weeks = new Array(5);

    for (let week of weeks) {
      week = new Array(7);

      for (let day of week) {
        let cell = new Date(date.getFullYear(), date.getMonth(), dateNum++).getDate();

        if (dateNum <= 1 || dateNum - 1 > lastDate) {
          day = <td className="ui-datepicker-other-month">{ cell }</td>;
        } else {
          if (cell === currentDate) {
            day = <td className="ui-datepicker-today">{ cell }</td>;
          } else {
            day = <td>{ cell }</td>;
          }
        }
        week.shift();
        week.push(day);
      }
      weeks.shift();
      weeks.push(week);
    }

    return weeks;
  }

  const weeks = days().map(week => {
    return <tr>{week.map(day => day)}</tr>;
  });

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{changeForm(date.toLocaleString('ru-RU', {weekday: 'long'}))}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
          <div className="ui-datepicker-material-month">{changeLetter(date)}</div>
          <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{changeForm(date.toLocaleString('ru-RU', {month: 'long'}))}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col/>
          <col/>
          <col/>
          <col/>
          <col/>
          <col className="ui-datepicker-week-end"/>
          <col className="ui-datepicker-week-end"/>
        </colgroup>
        <thead>
          <tr>
            {cols}
          </tr>
        </thead>
        <tbody>
        {weeks}
        </tbody>
      </table>
    </div>
  );
};
