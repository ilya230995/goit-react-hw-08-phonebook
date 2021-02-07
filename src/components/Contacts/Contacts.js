import { useEffect } from 'react';
import s from '../../css/Contacts.module.css';
import * as operations from '../../redux/contacts/contacts-operations';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllContacts,
  getFilterValue,
} from '../../redux/contacts/contacts-selectors';
import Filter from '../Filter/';
import { Button, Card, Space } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

function Contacts() {
  const filteredContacts = useSelector(state =>
    getAllContacts(state).filter(contact =>
      contact.name.toLowerCase().includes(getFilterValue(state).toLowerCase()),
    ),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContact());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Card title="Все контакты" style={{ width: 400 }}>
      <Space direction="vertical" size="middle">
        <Filter />
        <ul className={s.contactsList}>
          {filteredContacts.map(el => {
            return (
              <li className={s.contactsListItem} key={el.id}>
                {el.name}: {el.number}{' '}
                <Button
                  danger
                  ghost
                  icon={<DeleteFilled />}
                  onClick={() => dispatch(operations.deleteContact(el.id))}
                  shape="round"
                ></Button>
              </li>
            );
          })}
        </ul>
      </Space>
    </Card>
  );
}

export default Contacts;
