import Form from './components/NewUser/Form';
import Users from './components/UsersList/Users';
import Modal from './components/UI/Modal';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.container}>
      <Form />
      <Users/>
      {/* <Modal/> */}
    </div>
  );
}

export default App;
