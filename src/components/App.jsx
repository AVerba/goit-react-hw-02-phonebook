import React, { Component } from 'react';
import shortid from 'shortid';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import PropTypes from 'prop-types';
import styles from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onFilterInput = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredContacts = () => {
    return [...this.state.contacts].filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );
  };

  deleteContact = e => {
    const elemToRemove = e.currentTarget.parentNode.id;
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== elemToRemove),
    });
  };

  render() {
    return <div>hello</div>;
  }
}
