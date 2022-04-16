import classes from './Modal.module.css';

export default function Modal({msg, onDismissModal}) {
  return (
    <div className={classes.modal} onClick={onDismissModal}>
      <div className={classes['modal-content']}>
        <h6>{msg}</h6>
        <a href="#" className={classes['modal-close']}>&times;</a>
      </div>
    </div>
  );
}
