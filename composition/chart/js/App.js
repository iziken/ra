function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

function Chart(props) {
  let { mode, horizontal, data, colors, labels, series } = props;
  if (!mode) mode = "";
  const max = data.reduce(
    (max, serie) =>
    Math.max(
      max,
      serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)
    ),
    0
  );
  return (
    <div className={horizontal ? "Charts horizontal" : "Charts"}>
      {data.map((serie, serieIndex) => {
        var sortedSerie = serie.slice(0),
            sum;

        sum = serie.reduce((carry, current) => carry + current, 0);
        sortedSerie.sort(compareNumbers);

        return (
          <div
            className={"Charts--serie " + mode}
            key={serieIndex}
            style={horizontal ? { height: "auto" } : { height: 250 }}
            >
            <label>{labels[serieIndex]}</label>
            {serie.map((item, itemIndex) => {
              var color = colors[itemIndex],
                  style;
              const size = {
                "": item / max * 100,
                stacked: item / sum * 100,
                layered: item / max * 100
              };
              const opacity = {
                "": item / max + 0.05,
                stacked: 1,
                layered: item / max + 0.05
              };
              style = {
                backgroundColor: color,
                opacity: opacity[mode],
                zIndex: item
              };
              horizontal ? style.width = size[mode] + "%" : style.height = size[mode] + "%";
              if(mode === 'layered') style.right =  ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%';
              return (
                <div
                  className={"Charts--item " + mode}
                  style={style}
                  key={itemIndex}
                  >
                  <b style={{ color: color }}>{item}</b>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

const Legend = props => {
  const { labels, colors } = props;
  return (
    <div className="Legend">
      {labels.map((label, labelIndex) => {
        return (
          <div>
            <span
              className="Legend--color"
              style={{ backgroundColor: colors[labelIndex % colors.length] }}
              />
            <span className="Legend--label">{label}</span>
          </div>
        );
      })}
    </div>
  );
};

class App extends React.Component {
  componentWillMount() {
    this.setState({
      data: [],
      series: ["France", "Italy", "England", "Sweden", "Germany"],
      labels: ["cats", "dogs", "horses", "ducks", "cows"],
      colors: ["#43A19E", "#7B43A1", "#F2317A", "#FF9824", "#58CF6C"]
    });
  }

  componentDidMount() {
    this.populateArray();
    setInterval(this.populateArray.bind(this), 2000);
  }

  populateArray() {
    const series = 5;
    const serieLength = 5;

    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

    this.setState({ data });
  }

  render() {
    return (
      <section>
        <Chart {...this.state} />
        <Chart mode="stacked" {...this.state} />
        <Chart mode="layered" {...this.state} />
        <Chart horizontal {...this.state} />
        <Legend {...this.state} />
      </section>
    );
  }
}
