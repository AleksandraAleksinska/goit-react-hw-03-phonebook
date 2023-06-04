import React, { Component } from 'react';
import PropTypes from "prop-types";
import css from './ContactForm.module.css'

export default class ContactForm extends Component {

    
  render() {

    const { onFormSubmit, onChange} = this.props
    
    return (
        <form className={css.form} onSubmit={onFormSubmit}>        
        <label className={css.formLabel}>
          Name 
          <input onChange={onChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.formLabel}>
          Number 
          <input onChange={onChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.formButton}type='submit'>Add contact</button>
      </form>
    )
  }
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}