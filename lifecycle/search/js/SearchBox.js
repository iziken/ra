class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition);
  }

  componentDidMount() {
    this.setPosition = this.setPosition.bind(this);
    window.addEventListener('scroll', this.setPosition);
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed} />
  }

  isFixed() {
    return document.querySelector('.search-box').getBoundingClientRect().top <= 0 && window.pageYOffset >= 164;
  }

  setPosition() {
    this.setState({fixed: this.isFixed()})
  }
}
