import { Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import { Suspense } from 'react';
import Phonebook from './views/Phonebook';
import AppBar from './components/AppBar/AppBar';
import Registration from './views/registration';
import Login from './views/login';
import { getUser } from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import { getIsFetchingCurrentUser } from './redux/auth/auth-selectors';
import s from './css/Background.module.css';
import { Skeleton } from 'antd';

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className={s.background}>
      {isFetchingCurrentUser ? (
        <Skeleton active loading={isFetchingCurrentUser} />
      ) : (
        <>
          <AppBar />

          <Switch>
            <Suspense fallback={<Loader />}>
              <PublicRoute path="/" exact>
                <h1 className={s.homePageTitle}>Телефонная книга</h1>
              </PublicRoute>
              <PublicRoute exact path="/register" restricted>
                <Registration />
              </PublicRoute>
              <PublicRoute exact path="/login" restricted>
                <Login />
              </PublicRoute>
              <PrivateRoute path="/contacts">
                <Phonebook />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </div>
  );
}
