import Input from './Input';
import Button from './Button';
import Card from '../UI/Card';
import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(`${name} (${age})`);
  };

  const onUserNameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const onUserAgeChangeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card>
      <form onSubmit={onSubmitHandler}>
        <Input
          inputChangeHanler={onUserNameChangeHandler}
          label='Name'
          type='text'
          placeholder='Enter user name'
        />
        <Input
          inputChangeHanler={onUserAgeChangeHandler}
          label='Age'
          type='number'
          placeholder='Enter user age'
        />
        <Button type='submit' name='Add User' />
      </form>
    </Card>
  );
}
