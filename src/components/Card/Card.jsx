import { useDrag } from "react-dnd";
import { ItemTypes } from "../../utils/types/items";
import styles from "./Card.module.scss";
import timeSince from "../../utils/timeSince";
import { useDispatch } from "react-redux";
import { removeCard, updateCard } from "../../actions/card";
import { useState } from "react";
import Modal from "../Modal";
import Form from "../Form/Form";
import useModalHandlers from "../../utils/hooks/useModalHandlers";

export default function Card({ card }) {
  const [isOpened, handleOpenModal, handleCloseModal] = useModalHandlers();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: {
      id: card.id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  function remove(id) {
    if (window.confirm("Are you sure?")) {
      window.location.reload(false);
      dispatch(removeCard(id));
    }
  }

  function handleChange(e) {
    const { target } = e;
    const { value } = target;
    setValue(value);
  }

  async function handleSubmit() {
    try {
      await dispatch(updateCard(card.id, { title: value }));
    } catch (err) {
      console.log(err);
    } finally {
      setValue("");
      handleCloseModal();
      window.location.reload(false);
    }
  }

  return (
    <div
      className={styles.card}
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div className={styles.title}>{card.title}</div>
      <button className={styles.btn} onClick={() => remove(card.id)}>
        🗑️
      </button>
      <button className={styles.btn} onClick={handleOpenModal}>
        ✏️
      </button>
      <div className={styles.time}>
        {`Edited ${timeSince(Date.parse(card.updatedAt))} ago.`}
      </div>
      <Modal isOpened={isOpened} title={"Add Card"}>
        <Form
          handleCloseModal={handleCloseModal}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          value={card.title}
        />
      </Modal>
    </div>
  );
}
