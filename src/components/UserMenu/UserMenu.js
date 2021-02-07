import { useSelector, useDispatch } from 'react-redux';
import userAvatar from '../../icons/786536_people_512x512.png';
import s from '../../css/UserMenu.module.css';
import { logOut } from '../../redux/auth/auth-operations';
import { Avatar, Space, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

export default function UserMenu() {
  const userName = useSelector(state => state.authorization.user.name);
  const dispatch = useDispatch();
  return (
    <div className={s.menuWrapper}>
      <Space>
        <Avatar size="small" src={userAvatar} />
        <span>Приветствуем, {userName}</span>
        <Button
          shape="round"
          icon={<LogoutOutlined />}
          onClick={() => dispatch(logOut())}
        >
          Выйти
        </Button>
      </Space>
    </div>
  );
}
