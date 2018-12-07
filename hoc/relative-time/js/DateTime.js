'use strict';

const DateTime = props => {
    return (
        <p className="date">{props.date}</p>
    )
};

function DateParse(Component) {
  return class extends React.Component {
    componentWillMount() {
      this.calculationDate();
    }
    calculationDate() {
      const min = 1000 * 60;
      const hours = min * 60;
      const days = hours * 24;
      const timeDiff = new Date().getTime() - new Date(this.props.date).getTime();

      if (Math.floor(timeDiff/days)) {
        return this.props.date = Math.floor(timeDiff/days) + ' дней назад';
      }
      if (Math.floor(timeDiff/hours)) {
        return this.props.date = '5 часов назад';
      } else {
        return this.props.date = '12 минут назад';
      }
    }
    render() {
      return <Component {...this.props} />;
    }
  }
}
const DateTimePretty = DateParse(DateTime);
