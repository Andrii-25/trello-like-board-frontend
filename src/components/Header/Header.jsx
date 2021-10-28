import styles from "./Header.module.scss";

export default function Header(props) {
  return (
    <div className={styles.header}>
      <div className={styles.title}>ReactTrello</div>
      <button className={styles.btn} onClick={props.handleOpenModal}>
        Add List
      </button>
    </div>
  );
}
