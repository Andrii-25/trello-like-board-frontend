import { useDrag } from "react-dnd";
import { ItemTypes } from "../../utils/types/items";
import styles from "./Card.module.scss";
import timeSince from "../../utils/timeSince";

export default function Card({ card }) {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: {
      id: card.id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      className={styles.card}
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {card.title}
      {/* <br />
      <hr className={styles.hr} /> */}
      <div className={styles.time}>
        {`Edited ${timeSince(Date.parse(card.updatedAt))} ago.`}
      </div>
    </div>
  );
}
