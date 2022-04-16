import AddNewUser from './components/NewUser/AddNewUser';
import Users from './components/UsersList/Users';
import Modal from './components/UI/Modal';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.container}>
      <AddNewUser />
      <Users/>
      {/* <Modal/> */}
    </div>
  );
}

export default App;
