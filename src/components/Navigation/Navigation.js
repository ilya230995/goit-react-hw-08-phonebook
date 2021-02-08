import { NavLink } from 'react-router-dom';
import s from '../../css/Navigation.module.css';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { useState } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, PhoneOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

export default function Navigation() {
  const [current, setCurrent] = useState('');

  const handleClick = e => {
    setCurrent(e.key);
  };
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="mail" icon={<HomeOutlined />}>
        <NavLink
          className={s.navigationItem}
          activeClassName={s.activeNavigationItem}
          to="/"
          exact
        >
          Главная
        </NavLink>
      </Menu.Item>
      {isLoggedIn && (
        <Menu.Item key="app" selectedKeys={[current]} icon={<PhoneOutlined />}>
          <NavLink
            className={s.navigationItem}
            activeClassName={s.activeNavigationItem}
            to="/contacts"
          >
            Контакты
          </NavLink>
        </Menu.Item>
      )}
    </Menu>
  );
}
