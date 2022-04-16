import Input from './Input';
import Button from './Button';
import classes from './Form.module.css';

export default function Form() {
  return (
    <form className={classes.form}>
      <Input />
      <Input />
      <Button />
    </form>
  );
}
