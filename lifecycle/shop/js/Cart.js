class Cart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      update: false,
    }
  }

  componentWillReceiveProps ({items, isOpen}) {
    this.setState({
      update: this.props.isOpen !== isOpen || isOpen && this.props.items.length !== items.length
    })
  }

  shouldComponentUpdate (nextProps, nextState) {
    return this.props.isOpen || nextState.update
  }

  render () {
    return (
      <CartView {...this.props} />
    )
  }
}
