import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";
import css from './ContactList.module.css'


export default class ContactList extends Component {
 

  render() {

    const { contacts, deleteContact } = this.props;
    
    return (

        <ul>            
            { contacts.map((contact) => 

              <li className={css.listItem} key={nanoid()}>- {contact.name}: {contact.number} <button className={css.formButton} type='button' onClick={()=>deleteContact(contact.id)}>Delete</button> </li>

             ) }    
        
        </ul>
    )
  }
}

ContactList.propTypes ={
  contact: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })),
  deleteContact: PropTypes.func.isRequired
}