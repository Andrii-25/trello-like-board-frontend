import { useDispatch, useSelector } from "react-redux";
import { getLists } from "../actions/list";
import Header from "../components/Header";
import List from "../components/List";
import { Scrollbars } from "react-custom-scrollbars";
import { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ListsWrapper from "../components/ListsWrapper";

function MainPage() {
  const dispatch = useDispatch();

  const lists = useSelector((state) => state.lists);

  useEffect(async () => {
    try {
      await dispatch(getLists());
    } catch (error) {
      console.log(error);
    }
  }, []);

  const listData = (array) => {
    if (array && array.length) {
      return array.map((l) => {
        return <List key={l.id} list={l} />;
      });
    } else {
      return null;
    }
  };

  return (
    <>
      <Header />
      <DndProvider backend={HTML5Backend}>
        <Scrollbars
          style={{
            height: 570,
            Width: "100%",
          }}
        >
          {listData(lists)}
        </Scrollbars>
      </DndProvider>
    </>
  );
}

export default MainPage;
