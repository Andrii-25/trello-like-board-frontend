import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>ReactTrello</div>
      <button className={styles.btn}>Add List</button>
    </div>
  );
}
