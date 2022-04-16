import classes from './Modal.module.css';

export default function Modal() {
  return (
    <div className={classes.modal}>
      <div className={classes['modal-content']}>
        <h6>Your warning here!</h6>
        <a href="#" className={classes['modal-close']}>&times;</a>
      </div>
    </div>
  );
}
