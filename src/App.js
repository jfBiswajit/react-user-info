import AddNewUser from './components/NewUser/AddNewUser';
import Users from './components/UsersList/Users';
import classes from './App.module.css';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const onAddNewUser = (name, age) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { id: Math.random().toString(), name, age },
    ]);
  };

  return (
    <div className={classes.container}>
      <AddNewUser onAddNewUser={onAddNewUser} />
      <Users users={users} />
    </div>
  );
}

export default App;
