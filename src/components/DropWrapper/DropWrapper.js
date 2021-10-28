import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../utils/types/items";
import styles from "./DropWrapper.module.scss";

export default function DropWrapper({ children, changeList }) {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => changeList(item.id),
    collect: (monitor) => ({
      monitor: !!monitor.isOver(),
    }),
  });

  return (
    <div className={styles.dropWrapper} ref={drop}>
      {children}
    </div>
  );
}
