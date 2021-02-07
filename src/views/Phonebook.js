import { useState } from 'react';
import * as operations from '../redux/contacts/contacts-operations';
import s from '../css/Phonebook.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts } from '../redux/contacts/contacts-selectors';
import Contacts from '../components/Contacts/';
import { Button, Card, Space } from 'antd';

function Phonebook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const allContacts = useSelector(state => getAllContacts(state));
  const dispatch = useDispatch();

  const existContact = number => {
    return allContacts.find(
      contact => contact.number.toLowerCase() === number.toLowerCase(),
    );
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    if (existContact(number)) {
      alert(`Already in contacts ${name}`);
      return;
    }

    dispatch(operations.addContact({ name, number }));

    setName('');
    setNumber('');
  };

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  return (
    <section className={s.phonebookSection}>
      <Card style={{ width: 300, height: 150 }}>
        <form className={s.phoneBookForm} onSubmit={handleOnSubmit}>
          <Space direction="vertical" size="middle">
            <label className={s.phoneBookLabel}>
              Имя{' '}
              <input
                type="text"
                value={name}
                onChange={handleChange}
                name="name"
                className={s.phoneBookInput}
              />
            </label>
            <label className={s.phoneBookLabel}>
              Номер{' '}
              <input
                type="text"
                value={number}
                onChange={handleChange}
                name="number"
                className={s.phoneBookInput}
              />
            </label>
            <Button
              className={s.addContactBtn}
              htmlType="submit"
              shape="round"
              style={{ display: 'block' }}
            >
              Добавить контакт
            </Button>
          </Space>
        </form>
      </Card>

      <div>
        <Contacts />
      </div>
    </section>
  );
}
export default Phonebook;
