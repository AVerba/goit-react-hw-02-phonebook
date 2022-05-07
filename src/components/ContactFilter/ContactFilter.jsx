import styles from './ContactFilter.module.css';
import { Container } from '../Container';
import { Title } from '../ui/Title';
import { Input } from '../ui/Input';

export const ContactFilter = ({ value, onChange }) => {
  return (
    <Container>
      <Title>Find contacts by name</Title>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search name"
      />
    </Container>
  );
};
