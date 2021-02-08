import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../redux/auth/auth-operations';
import s from '../css/Registration.module.css';

export default function Registration() {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    dispatch(signUpUser(data));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.registrationForm}>
      <input
        type="text"
        name="name"
        placeholder="username"
        ref={register}
        className={s.registrationInput}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        ref={register}
        className={s.registrationInput}
      />
      <input
        type="text"
        name="password"
        placeholder="password"
        ref={register}
        className={s.registrationInput}
      />
      <button type="submit" className={s.submitBtn}>
        Зарегестрироваься
      </button>
    </form>
  );
}
