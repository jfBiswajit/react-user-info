import classes from './Button.module.css';

export default function Button({ type, name }) {
  return <button type={type}>{name}</button>;
}
