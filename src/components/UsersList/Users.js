import Card from '../UI/Card';
import classes from './Users.module.css';

export default function Users() {
  return (
    <Card>
      <div className={classes.item}>Item</div>
      <div className={classes.item}>Item</div>
      <div className={classes.item}>Item</div>
      <div className={classes.item}>Item</div>
    </Card>
  );
}
