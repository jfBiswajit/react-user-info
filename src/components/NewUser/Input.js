import classes from './Input.module.css';

export default function Input({ label, type, placeholder, value, inputChangeHanler }) {
  return (
    <div>
      <label>{label}</label>
      <input
        onChange={inputChangeHanler}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}
