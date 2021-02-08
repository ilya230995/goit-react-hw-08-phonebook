import { NavLink } from 'react-router-dom';
import s from '../../css/AuthNav.module.css';
import { useState } from 'react';
import { Menu } from 'antd';
import { LoginOutlined, DownCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

export default function AuthNav() {
  const [current, setCurrent] = useState('');
  const handleClick = e => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="mail" icon={<DownCircleOutlined />}>
        <NavLink
          className={s.navigationItem}
          activeClassName={s.activeNavigationItem}
          to="/register"
        >
          Регистрация
        </NavLink>
      </Menu.Item>
      <Menu.Item key="app" selectedKeys={[current]} icon={<LoginOutlined />}>
        <NavLink
          className={s.navigationItem}
          activeClassName={s.activeNavigationItem}
          to="/login"
        >
          Войти
        </NavLink>
      </Menu.Item>
    </Menu>
  );
}
