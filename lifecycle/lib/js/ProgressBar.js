'use strict';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = null;
  }

  static get propTypes() {
    return {
      total: PropTypes.number.isRequired,
      completed: PropTypes.number.isRequired
    };
  }

  showChart(completed, total) {
    const canvas = this.canvas;
    const ctx = canvas.getContext('2d');
    const width = getComputedStyle(canvas).width.slice(0, -2) * 1.2;
    const height = getComputedStyle(canvas).height.slice(0, -2) * 1.2;
    canvas.width = width;
    canvas.height = height;
    ctx.lineWidth = 7;
    ctx.font = '32px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
    ctx.strokeStyle = '#4ca89a';
    ctx.arc(width / 2, height / 2, 52, 0, 2 * Math.PI, true);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#96d6f4';
    ctx.arc(width / 2, height / 2, 45, 0, (completed / total) * 2 * Math.PI, false);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillText(`${Math.round( 100 * completed / total )}%`, width / 2, height / 2);
  }

  componentDidMount() {
    this.showChart(this.props.completed, this.props.total);
  }

  componentWillReceiveProps(newProps) {
    this.showChart(newProps.completed, newProps.total);
  }

  render() {
    return (
      <canvas ref={elem => this.canvas = elem} id="progressCanvas" className="progress" />
    );
  }
}
