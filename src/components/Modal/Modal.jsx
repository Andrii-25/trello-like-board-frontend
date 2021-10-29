import styles from "./Modal.module.scss";

export default function Modal(props) {
  return (
    <div
      className={
        props.isOpened ? styles.modalWrapperOpen : styles.modalWrapperClose
      }
    >
      <div className={styles.modalBody}>
        <h1>{props.title}</h1>
        <hr />
        {props.children}
      </div>
    </div>
  );
}
