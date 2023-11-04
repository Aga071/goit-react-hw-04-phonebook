import ContactsItem from '../ContactsItem/ContactsItem';
import PropTypes from 'prop-types';

export default function ContactList({ getFilterName, deleteContacts }) {
  return (
    <ul>
      {getFilterName().map(contact => (
        <ContactsItem
          key={contact.id}
          contacts={contact}
          deleteContacts={deleteContacts}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  getFilterName: PropTypes.func.isRequired,
  deleteContacts: PropTypes.func.isRequired,
};
