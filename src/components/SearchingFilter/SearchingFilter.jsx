import React, { Component } from 'react';
import PropTypes from "prop-types";
import css from'./SearchingFilter.module.css'

export default class SearchingFilter extends Component {

  render() {

    const { onFilterChange } = this.props;
    
    return (
        <label className={css.formLabel} >
        Find contacts by name
        <input onChange={onFilterChange}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
        </label>
    )
  }
}

SearchingFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired
}