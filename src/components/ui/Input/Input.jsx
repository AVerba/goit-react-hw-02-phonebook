import styles from './Input.module.css';
import { Title } from '../Title';
import { Container } from '../../Container';

export const Input = ({
  title,
  type,
  name,
  value,
  placeholder,
  pattern,
  onChange,
}) => {
  return (
    <>
      <Title>{title}</Title>
      <input
        type={type}
        name={name}
        key={name}
        value={value}
        onChange={onChange}
        pattern={pattern}
        placeholder={placeholder}
        autoComplete="off"
        required
      />
    </>
  );
};
