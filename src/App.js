import Form from './components/NewUser/Form';
import Users from './components/UsersList/Users';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.container}>
      <Form />
      <Users/>
    </div>
  );
}

export default App;
