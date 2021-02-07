import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';

export default function Login({ onRegister }) {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    dispatch(logIn(data));
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="email"
        placeholder="email"
        ref={register}
      ></input>
      <input
        type="text"
        name="password"
        placeholder="password"
        ref={register}
      ></input>
      <button type="submit">Вход</button>
    </form>
  );
}
