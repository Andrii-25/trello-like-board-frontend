import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCards, updateCard } from "../../actions/card";
import Card from "../Card/Card";
import styles from "./List.module.scss";
import { Scrollbars } from "react-custom-scrollbars";
import DropWrapper from "../DropWrapper";

export default function List({ list }) {
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
      console.log(id, list.id);
      await dispatch(updateCard(id, list.id));
      await dispatch(getCards());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.list}>
      <div className={styles.listHeader}>
        <div className={styles.title}>{list.title}</div>
        <button className={styles.btn}>+</button>
      </div>
      <DropWrapper changeList={changeList}>
        <Scrollbars
          style={{ width: "100%" }}
          autoHeight={true}
          autoHeightMax={405}
          autoHeightMin={255}
        >
          {cards
            .filter((c) => c.list === list.id)
            .map((c) => {
              return <Card card={c} key={c.id} />;
            })}
        </Scrollbars>
      </DropWrapper>
    </div>
  );
}
