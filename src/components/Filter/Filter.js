import s from '../../css/Filter.module.css';
import * as actions from '../../redux/contacts/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from '../../redux/contacts/contacts-selectors';

function Filter() {
  const filterValue = useSelector(state => getFilterValue(state));
  const dispatch = useDispatch();
  return (
    <label className={s.filterPhoneboke}>
      <input
        type="text"
        value={filterValue}
        onChange={e => dispatch(actions.filterContacts(e.target.value))}
        name="filter"
        className={s.filterInput}
      />
    </label>
  );
}

export default Filter;
