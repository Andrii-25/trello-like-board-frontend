import styles from "./Form.module.scss";

export default function Form(props) {
  return (
    <>
      <form className={styles.form}>
        <input className={styles.input}></input>
      </form>
      <div className={styles.btnWrapper}>
        <button className={styles.btnCancel}>Cancel</button>
        <button className={styles.btnSubmit}>Add</button>
      </div>
    </>
  );
}
