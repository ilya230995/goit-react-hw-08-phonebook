import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import s from '../../css/AppBar.module.css';
import UserMenu from '../UserMenu/UserMenu';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export default function AppBar() {
  const isUserAuth = useSelector(state => getIsLoggedIn(state));

  return (
    <header className={s.navigation}>
      <Navigation />
      {isUserAuth ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
