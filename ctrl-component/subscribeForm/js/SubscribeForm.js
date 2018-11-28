'use strict';

class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }
  checkEmail(event) {
    event.currentTarget.validity.valid ? this.setState({email: 'is-valid'}) : this.setState({email: 'is-error'})
  }
  render() {
    return (
      <div className="subscribe__form">
        <form className={"form form--subscribe " + this.state.email}>
          <h4 className="form-title">Подписаться:</h4>
          <div className="form-group">
            <label htmlFor="input-email" className="sr-only">Email</label>
            <input
             type="email"
             id="input-email"
             placeholder="Email"
             className="form-control"
             onChange={this.checkEmail.bind(this)}/>
            <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
            <button type="submit" className="form-next">
              <i className="material-icons">keyboard_arrow_right</i>
            </button>
          </div>
        </form>
      </div>

    );
  }
}
