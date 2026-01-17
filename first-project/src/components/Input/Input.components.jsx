import styles from "./Input.module.css";

export default function Input({
  id,
  icon,
  label,
  type,
  align = "left",
  placeholder,
}) {
  return (
    <div class="grid gap-1 input-container">
      {label ? <label htmlFor={id}>{label}</label> : undefined}
      <div className={`flex align-center padding-2 ${styles.inputContainer}`}>
        <div className={styles.icon}>{icon}</div>
        <input
          id={id}
          name={id}
          type={type}
          title={id}
          placeholder={placeholder}
          className={`padding-2 ${
            align === "left" ? "align-left" : "align-right"
          }`}
        />
      </div>
    </div>
  );
}
