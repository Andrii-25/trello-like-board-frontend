import styles from "./Form.module.scss";

export default function Form({
  handleCloseModal,
  handleChange,
  handleSubmit,
  value = null,
}) {
  return (
    <>
      <form className={styles.form}>
        <input
          className={styles.input}
          onChange={handleChange}
          defaultValue={value}
        ></input>
      </form>
      <div className={styles.btnWrapper}>
        <button className={styles.btnCancel} onClick={handleCloseModal}>
          Cancel
        </button>
        <button className={styles.btnSubmit} onClick={handleSubmit}>
          Add
        </button>
      </div>
    </>
  );
}
