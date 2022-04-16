import Card from '../UI/Card';
import classes from './Users.module.css';

export default function Users({ users }) {
  if (users.length < 1) {
    return <Card>No users found!</Card>;
  }
  
  return (
    <Card>
      {users.map((user) => (
        <div
          key={user.id}
          className={classes.item}
        >{`${user.name} (${user.age})`}</div>
      ))}
    </Card>
  );
}
