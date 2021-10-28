import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard, getCards, updateCardList } from "../../actions/card";
import { removeList, updateList } from "../../actions/list";
import Card from "../Card/Card";
import styles from "./List.module.scss";
import { Scrollbars } from "react-custom-scrollbars";
import DropWrapper from "../DropWrapper";
import Modal from "../Modal";
import Form from "../Form/Form";
import useModalHandlers from "../../utils/hooks/useModalHandlers";

export default function List({ list }) {
  const [value, setValue] = useState("");
  const [isOpened, handleOpenModal, handleCloseModal] = useModalHandlers();
  const [isOpenedEditModal, handleOpenEditModal, handleCloseEditModal] =
    useModalHandlers();
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);

  function handleChange(e) {
    const { target } = e;
    const { value } = target;
    setValue(value);
  }

  async function handleSubmit() {
    try {
      await dispatch(addCard({ title: value, list: list.id }));
    } catch (err) {
      console.log(err);
    } finally {
      setValue("");
      handleCloseModal();
    }
  }

  function handleChangeEditList(e) {
    const { target } = e;
    const { value } = target;
    setValue(value);
  }

  async function handleSubmitEditList() {
    try {
      await dispatch(updateList({ title: value }, list.id));
    } catch (err) {
      console.log(err);
    } finally {
      setValue("");
      handleCloseEditModal();
      window.location.reload(false);
    }
  }

  function remove(id) {
    if (window.confirm("Are you sure?")) {
      window.location.reload(false);
      dispatch(removeList(id));
    }
  }

  useEffect(async () => {
    try {
      await dispatch(getCards());
    } catch (error) {
      console.log(error);
    }
  }, []);

  const changeList = async (id) => {
    try {
      await dispatch(updateCardList(id, list.id));
      await dispatch(getCards());
    } catch (err) {
      console.log(err);
    }
  };

  const cardList = (array) => {
    if (array && array.length) {
      return array.map((c) => {
        return <Card key={c.id} card={c} />;
      });
    } else {
      return null;
    }
  };

  function filterCards(array) {
    if (array && array.length) {
      return array.filter((c) => c.list === list.id);
    } else {
      return null;
    }
  }

  return (
    <>
      <div className={styles.list}>
        <div className={styles.listHeader}>
          <div className={styles.title}>{list.title}</div>
          <button className={styles.btn} onClick={handleOpenModal}>
            +
          </button>
          <button className={styles.btnDelete} onClick={() => remove(list.id)}>
            ×
          </button>
          <button className={styles.btnEdit} onClick={handleOpenEditModal}>
            ✍🏻
          </button>
        </div>
        <DropWrapper changeList={changeList}>
          <Scrollbars
            style={{ width: "100%" }}
            autoHeight={true}
            autoHeightMax={405}
            autoHeightMin={255}
          >
            {cardList(filterCards(cards))}
          </Scrollbars>
        </DropWrapper>
      </div>
      <Modal isOpened={isOpened} title={"Add Card"}>
        <Form
          handleCloseModal={handleCloseModal}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Modal>
      <Modal isOpened={isOpenedEditModal} title={"Edit List Name"}>
        <Form
          handleCloseModal={handleCloseEditModal}
          handleChange={handleChangeEditList}
          handleSubmit={handleSubmitEditList}
          value={list.title}
        />
      </Modal>
    </>
  );
}
