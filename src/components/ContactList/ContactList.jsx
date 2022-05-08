import styles from './ContactList.module.css';
import { Title } from '../ui/Title';
import { Container } from '../Container';

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
          <span className={styles.contactName}>{name}: </span>
          <span className={styles.phoneNumber}>{number}</span>

          <button
            className={styles.buttons}
            onClick={e => deleteContact(e)}
            aria-label="delete contact button"
          ></button>
        </li>
      ))}
    </ul>
  );
};
