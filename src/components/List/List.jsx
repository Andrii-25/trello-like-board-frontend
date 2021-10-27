import Card from "../Card/Card";
import styles from "./List.module.scss";

export default function List() {
  return (
    <div className={styles.list}>
      <div className={styles.listHeader}>
        <div className={styles.title}>Hello</div>
        <button className={styles.btn}>+</button>
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
