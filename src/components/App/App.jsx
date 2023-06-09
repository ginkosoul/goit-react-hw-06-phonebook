import { ContactList, Filter, ContactForm } from 'components';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contactsSlice';
import css from '../App/App.module.css';

export default function App() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filterContacts = (filter, contacts) => {
    const normFilter = filter.toLowerCase().trim();
    return contacts?.filter(e => e.name.toLowerCase().includes(normFilter));
  };
  const filteredContacts = filterContacts(filter, contacts);
  return (
    <div className={css.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList filteredContacts={filteredContacts} />
    </div>
  );
}
