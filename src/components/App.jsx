
import React, { Component } from 'react';
import { Fragment } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchingFilter from './SearchingFilter/SearchingFilter';
import { nanoid } from 'nanoid';

const _ = require('lodash');



export class App extends Component {

  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}],
    name: '',
    filter: '',
    number: ''    
  }

  // static getDerivedStateFromProps() {
  //   if (localStorage.getItem('contacts') === null) {
  //   localStorage.setItem('contacts', JSON.stringify([]));
  //   }

  // }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }
  
  handleFilterChange = _.debounce((e) => {
    this.setState({filter: e.target.value})   
   }, 300)
    
  getFilteredContacts = () => {
    const { filter } = this.state;

    !JSON.parse(localStorage.getItem('contacts')) && localStorage.setItem('contacts', JSON.stringify([]))
    
    const contactList = JSON.parse(localStorage.getItem('contacts'))
    const filteredContacts = [...contactList];
    return filter ? (filteredContacts.filter(contact => contact.name.toLowerCase().includes(filter.toLocaleLowerCase()))) : contactList 
  }

  sendContactsToLocalStorage = (list) => {

    localStorage.setItem('contacts', JSON.stringify(list))
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number, contacts} = this.state; 
    const form = e.currentTarget;    

    if(contacts.some(contact => contact.name === name)) {
      alert(name+' is already in contacts');
    }
    else {
      const contactsAfterAdd = [...contacts, {
        name: name,
        number: number,
        id: nanoid()
      }
    ]
      this.setState({contacts: contactsAfterAdd });
      this.sendContactsToLocalStorage(contactsAfterAdd)
    };
    console.log(contacts)    
    form.reset()
  }
  
  deleteHandler = (id) => {
    const { contacts } = this.state
    
    const contactsAfterDelete = contacts.filter(contact => contact.id !== id)
    this.setState({contacts: contactsAfterDelete}) 
    this.sendContactsToLocalStorage(contactsAfterDelete)
    console.log(contacts) 
  }

  

  render() {  
    
    return (
      <Fragment>
        <h2>Phonebook</h2>
        <ContactForm 
          onFormSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <h2>Contacts</h2>
        <SearchingFilter 
          onFilterChange={this.handleFilterChange}
        />
        <ContactList 
          contacts={this.getFilteredContacts()}
          deleteContact={this.deleteHandler}  
        /> 
      </Fragment>
    )
  }
}

export default App
