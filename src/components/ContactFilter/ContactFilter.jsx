import styles from './ContactFilter.module.css';
import { Container } from '../Container';
import { Title } from '../ui/Title';
import { Input } from '../ui/Input';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactFilter extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <p className={styles.text}>Find contacts by name</p>
        <input name="filter" onChange={e => this.props.onInput(e)} />
      </div>
    );
  }
}

ContactFilter.propTypes = {
  onInput: PropTypes.func,
};
