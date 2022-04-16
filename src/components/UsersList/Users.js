import classes from './Users.module.css';

export default function Users() {
  return (
    <div className={classes['users-list']}>
      <div className={classes.item}>Item</div>
      <div className={classes.item}>Item</div>
      <div className={classes.item}>Item</div>
      <div className={classes.item}>Item</div>
    </div>
  );
}
