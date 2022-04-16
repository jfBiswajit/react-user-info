import Input from './Input';
import Button from './Button';
import Card from '../UI/Card';
import { useState } from 'react';

export default function AddNewUser({ onAddNewUser }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const userName = name.trim();
    const userAge = age.trim();

    if (!userName || !userAge) {
      console.log('Please fill all the required field!');
      return;
    }

    if (userAge < 1) {
      console.log('Invalid age');
      return;
    }

    setName('');
    setAge('');
    onAddNewUser(name, age);
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
          value={name}
        />
        <Input
          inputChangeHanler={onUserAgeChangeHandler}
          label='Age'
          type='number'
          placeholder='Enter user age'
          value={age}
        />
        <Button type='submit' name='Add User' />
      </form>
    </Card>
  );
}
