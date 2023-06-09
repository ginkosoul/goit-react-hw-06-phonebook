import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

export default function ContactList({ filteredContacts }) {
  const dispatch = useDispatch();

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

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func,
};
