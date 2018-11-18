'use strict';

const AuthForm = onAuth => {

  const authUser = event => {
    event.preventDefault();
    if ((!onAuth) || (typeof onAuth !== 'function')) return null;
    const fields = event.currentTarget.elements;

        const userAuth = {
            name: fields.name.value,
            email: fields.email.value,
            password: fields.password.value
        };
        onAuth(userAuth);
  }

  function checkEmail(event) {
        event.currentTarget.value = event.currentTarget.value.replace(/[^\w@\.-]+/gi, "");
  }

  function checkPassword(event) {
        event.currentTarget.value = event.currentTarget.value.replace(/[^\w]+/gi, "");
  }
  return (
    <form className="ModalForm" onSubmit={authUser} action="/404/auth/" method="POST">
      <div className="Input">
        <input required type="text" placeholder="Имя" name="name" />
        <label></label>
      </div>
      <div className="Input">
        <input onChange={checkEmail} type="email" placeholder="Электронная почта" name="email" />
        <label></label>
      </div>
      <div className="Input">
        <input onChange={checkPassword} required type="password" placeholder="Пароль" name="password" />
        <label></label>
      </div>
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>
    </form>
  );
}
