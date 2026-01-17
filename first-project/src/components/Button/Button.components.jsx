import styles from "./Button.module.css";

export default function Button({ type, label }) {
  return (
    <button
      type={"button"}
      className={`${styles.btn} font-size-500 ${
        type === "primary" ? styles.primaryBtn : styles.secondaryBtn
      }`}
    >
      {label}
    </button>
  );
}
