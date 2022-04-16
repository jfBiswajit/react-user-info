import Input from './Input';
import Button from './Button';
import Card from '../UI/Card';
import classes from './Form.module.css';

export default function Form() {
  return (
    <Card>
      <Input label='Name' type='text' placeholder='Enter user name' />
      <Input label='Age' type='number' placeholder='Enter user age' />
      <Button type="submit" name="Add User"/>
    </Card>
  );
}
