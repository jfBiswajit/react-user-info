import Input from './Input';
import Button from './Button';
import classes from './Form.module.css';

export default function Form() {
  return (
    <form className={classes.form}>
      <Input label='Name' type='text' placeholder='Enter user name' />
      <Input label='Age' type='number' placeholder='Enter user age' />
      <Button type="submit" name="Add User"/>
    </form>
  );
}
