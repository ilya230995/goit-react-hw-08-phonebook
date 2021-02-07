import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../redux/auth/auth-operations';

export default function Registration() {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    dispatch(signUpUser(data));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="name" placeholder="username" ref={register} />
      <input type="email" name="email" placeholder="email" ref={register} />
      <input
        type="text"
        name="password"
        placeholder="password"
        ref={register}
      />
      <button type="submit">Зарегестрироваься</button>
    </form>
  );
}
