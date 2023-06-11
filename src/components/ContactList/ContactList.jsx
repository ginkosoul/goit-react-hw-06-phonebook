import css from '../ContactList/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter, removeContact } from 'redux/contactsSlice';

export default function ContactList() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const filterContacts = (filter, contacts) => {
    const normFilter = filter.toLowerCase().trim();
    return contacts?.filter(e => e.name.toLowerCase().includes(normFilter));
  };
  const filteredContacts = filterContacts(filter, contacts);

  const handleRemove = id => {
    dispatch(removeContact(id));
  };
  return filteredContacts ? (
    <ul className={css.list}>
      {filteredContacts.map(e => (
        <li className={css.item} key={e.id}>
          {`${e.name}: ${e.phone}`}
          <button
            className={css.btn}
            onClick={() => {
              handleRemove(e.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  ) : null;
}
