import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className="header flex justify-center align-center margin-3 padding-3">
      <h1 className={`font-700 ${styles.logo} color-grey-900`}>SPLITTER</h1>
    </header>
  );
}
