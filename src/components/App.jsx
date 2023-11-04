import React, { Component, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './contactForm/ContactForm';
import FilterName from './FilterName/FilterName';
import ContactList from './ContactList/ContactList';

const STATE = {
  filter: '',
};

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addNewContact = ({ name, number }) => {
    contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts.`)
      : this.setState({
          contacts: [...contacts, { name, number, id: nanoid() }],
        });
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  const handlerChangeFilter = event => {
    return setFilter(event.target.value);
  };

  const getFilterName = () => {
    return contacts.filter(cont =>
      cont.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const deleteContacts = nameToDelete => {
    setContacts(prev => prev.filter(user => user.name !== nameToDelete));
  };

  useEffect(() => {
    const savedSettings = localStorage.getItem('contacts');
    const parsedSettings = JSON.parse(savedSettings);
    console.log(parsedSettings);
    if (parsedSettings !== null) setContacts({ contacts: parsedSettings });
  }, []);

  // shouldComponentUpdate(nextProps, nextState) {
  //   const oldState = this.state;

  //   if (nextState.contacts === oldState.contacts) {
  //     return false;
  //   }

  //   return true;
  // }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <div>
        <ContactForm addNewContact={addNewContact} />
        <h2>Contacts</h2>
        <FilterName handlerChangeFilter={handlerChangeFilter} />
        <ContactList
          getFilterName={getFilterName}
          deleteContacts={deleteContacts}
        />
      </div>
    </div>
  );
};

export default App;
