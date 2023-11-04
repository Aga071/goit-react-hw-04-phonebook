import PropTypes from 'prop-types';
export default function ContactsItem({ contacts, deleteContacts }) {
  return (
    <li>
      {contacts.name}: {contacts.number}
      <button onClick={() => deleteContacts(contacts.name)}>Delete</button>
    </li>
  );
}
ContactsItem.propTypes = {
  contacts: PropTypes.object.isRequired,
  deleteContacts: PropTypes.func.isRequired,
};
