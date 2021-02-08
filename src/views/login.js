import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';
import s from '../css/Login.module.css';

export default function Login() {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    dispatch(logIn(data));
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.loginForm}>
      <input
        type="text"
        name="email"
        placeholder="email"
        ref={register}
        className={s.loginInput}
      ></input>
      <input
        type="text"
        name="password"
        placeholder="password"
        ref={register}
        className={s.loginInput}
      ></input>
      <button type="submit" className={s.submitBtn}>
        Войти
      </button>
    </form>
  );
}
