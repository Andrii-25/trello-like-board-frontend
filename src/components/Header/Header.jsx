import styles from "./Header.module.scss";
import Modal from "../Modal";
import Form from "../Form/Form";
import useModalHandlers from "../../utils/hooks/useModalHandlers";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../../actions/list";

export default function Header() {
  const [value, setValue] = useState("");
  const [isOpened, handleOpenModal, handleCloseModal] = useModalHandlers();
  const dispatch = useDispatch();

  function handleChange(e) {
    const { target } = e;
    const { value } = target;
    setValue(value);
  }

  async function handleSubmit() {
    try {
      await dispatch(addList({ title: value }));
    } catch (err) {
      console.log(err);
    } finally {
      setValue("");
      handleCloseModal();
    }
  }

  return (
    <div className={styles.header}>
      <div className={styles.title}>ReactTrello</div>
      <button className={styles.btn} onClick={handleOpenModal}>
        Add List
      </button>
      <Modal isOpened={isOpened} title={"Add List"}>
        <Form
          handleCloseModal={handleCloseModal}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Modal>
    </div>
  );
}
