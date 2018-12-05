class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen,
      items: props.items
    }
  }

  componentWillReceiveProps({isOpen, items}) {
    this.setState({
      isOpen,
      items
    });
  }

  shouldComponentUpdate(nextProps) {
    return this.state.isOpen !== nextProps.isOpen || (this.state.isOpen && this.state.items.length !== nextProps.items.length);
  }

  render() {
    return (
      <CartView {...this.props} />
    );
  }

}
