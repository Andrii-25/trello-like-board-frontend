import styles from "./ListsWrapper.module.scss";

export default function ListsWrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
