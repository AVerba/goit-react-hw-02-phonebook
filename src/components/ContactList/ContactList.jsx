import styles from './ContactList.module.css';

import PropTypes from 'prop-types';

export const ContactList = ({
  contacts,
  filter,
  contactAfterFilter,
  deleteContact,
}) => {
  let data = filter === '' ? contacts : contactAfterFilter();
  return (
    <ul className={styles.contactsList}>
      {data.map(({ name, id, number }) => (
        <li className={styles.listItem} key={id} id={id}>
          <div className={styles.info}>
            <span className={styles.contactName}>{name}: </span>
            <span className={styles.phoneNumber}>{number}</span>
          </div>

          <button
            className={styles.buttons}
            onClick={e => deleteContact(e)}
            aria-label="delete contact button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  filteredContacts: PropTypes.func,
  deleteContact: PropTypes.func,
};
