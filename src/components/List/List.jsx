import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCards, updateCard } from "../../actions/card";
import Card from "../Card/Card";
import styles from "./List.module.scss";
import { Scrollbars } from "react-custom-scrollbars";
import DropWrapper from "../DropWrapper";

export default function List({ list, handleOpenModal }) {
  const dispatch = useDispatch();

  const cards = useSelector((state) => state.cards);

  useEffect(async () => {
    try {
      await dispatch(getCards());
    } catch (error) {
      console.log(error);
    }
  }, []);

  const changeList = async (id) => {
    try {
      await dispatch(updateCard(id, list.id));
      await dispatch(getCards());
    } catch (err) {
      console.log(err);
    }
  };

  function filterCards(cardsArr) {
    return cardsArr.filter((c) => {
      return c.list === list.id;
    });
  }

  return (
    <div className={styles.list}>
      <div className={styles.listHeader}>
        <div className={styles.title}>{list.title}</div>
        <button className={styles.btn} onClick={handleOpenModal}>
          +
        </button>
        <button className={styles.btnDelete} onClick={handleOpenModal}>
          ×
        </button>
      </div>
      <DropWrapper changeList={changeList}>
        <Scrollbars
          style={{ width: "100%" }}
          autoHeight={true}
          autoHeightMax={405}
          autoHeightMin={255}
        >
          {filterCards(cards).map((c) => {
            return <Card card={c} key={c.id} />;
          })}
        </Scrollbars>
      </DropWrapper>
    </div>
  );
}
