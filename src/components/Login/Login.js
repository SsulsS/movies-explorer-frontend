import Form from '../Form/Form';

function Login() {
  return (
    <Form header="Рады видеть!" submit="Войти" question="Ещё не зарегистрированы?" link="Регистрация" path="/signup">
      <label className="form__item">
        <span className="form__item-text">E-mail</span>
        <input type="email" className="form__field" defaultValue="pochta@yandex.ru" required />
        <span className="form__error">Что-то пошло не так...</span>
      </label>

      <label className="form__item">
        <span className="form__item-text">Пароль</span>
        <input type="password" className="form__field form__field_color-error" required />
        <span className="form__error form__error-display">Что-то пошло не так...</span>
      </label>
    </Form>
  );
}

export default Login;
