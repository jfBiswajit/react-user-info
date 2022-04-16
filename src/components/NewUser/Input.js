import classes from './Input.module.css';

export default function Input({label, type, placeholder}) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}
