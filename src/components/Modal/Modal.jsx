import styles from "./Modal.module.scss";
import classNames from "classnames";

export default function Modal(props) {
  return (
    <div
      className={
        props.isOpened ? styles.modalWrapperOpen : styles.modalWrapperClose
      }
    >
      <div className={styles.modalBody}>
        <div className={styles.modalClose} onClick={props.handleCloseModal}>
          ×
        </div>
        <h2>{props.title}</h2>
        <hr />
        {props.children}
      </div>
    </div>
  );
}
