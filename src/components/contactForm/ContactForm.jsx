import React, { Component } from 'react';

const STATE = {
  name: '',
  number: '',
};

export default class ContactForm extends Component {
  state = { ...STATE };

  handlerChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlerSubmit = event => {
    event.preventDefault();
    this.props.addNewContact({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handlerSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handlerChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handlerChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
