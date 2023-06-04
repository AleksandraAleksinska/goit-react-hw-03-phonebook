import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";
import css from './ContactList.module.css'


export default class ContactList extends Component {
 

  render() {

    const { deleteContact } = this.props;
    const contactList = JSON.parse(localStorage.getItem('contacts'));
    
    return (

        <ul>            
            { contactList ? contactList.map((contact) => 

              <li className={css.listItem} key={nanoid()}>- {contact.name}: {contact.number} <button className={css.formButton} type='button' onClick={()=>deleteContact(contact.id)}>Delete</button> </li>) : ''}    
        </ul>
    )
  }
}

ContactList.propTypes ={
  deleteContact: PropTypes.func.isRequired
}