import { useDispatch, useSelector } from "react-redux";
import { getLists } from "../actions/list";
import Header from "../components/Header";
import List from "../components/List";
import { Scrollbars } from "react-custom-scrollbars";
import { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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

  return (
    <>
      <Header />
      <DndProvider backend={HTML5Backend}>
        <Scrollbars style={{ width: "100%", height: 570 }}>
          {lists.map((list) => {
            return <List key={list.id} list={list} />;
          })}
        </Scrollbars>
      </DndProvider>
    </>
  );
}

export default MainPage;
