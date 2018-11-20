'use strict'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'All'
    }
  }
  render() {
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.state.selected}
          onSelectFilter={(filter) => this.setState({selected: filter})} />
        <Portfolio projects={(this.state.selected !== 'All') ? this.props.projects.filter(item => item.category === this.state.selected) : this.props.projects} />
      </div>
    );
  }
}
