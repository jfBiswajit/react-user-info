import Input from './Input';
import Button from './Button';
import Card from '../UI/Card';
import Modal from '../UI/Modal';
import { useState } from 'react';

export default function AddNewUser({ onAddNewUser }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const userName = name.trim();
    const userAge = age.trim();

    if (!userName || !userAge) {
      setErrMsg('Please fill all the required field!');
      return;
    }

    if (userAge < 1) {
      setErrMsg('Please enter valid age!');
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

  const dismissModal = () => {
    setErrMsg('');
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

      {errMsg && <Modal onDismissModal={dismissModal} msg={errMsg} />}
    </Card>
  );
}
