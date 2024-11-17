import List from "./List";

const DivList = ({ submit, tabTask, done, setDone, setTabTask }) => {
  return (
    <ul>
      {submit
        ? tabTask.map((e, index) => {
            return (
              index < tabTask.length - 1 &&
              (!done[index] ? (
                <List
                  key={index + e}
                  e={e}
                  index={index}
                  tabTask={tabTask}
                  done={done}
                  setDone={setDone}
                  setTabTask={setTabTask}
                  submit={submit}
                />
              ) : (
                ""
              ))
            );
          })
        : ""}

      {submit
        ? tabTask.map((e, index) => {
            return (
              index < tabTask.length - 1 &&
              (done[index] ? (
                <List
                  key={index + e}
                  e={e}
                  index={index}
                  tabTask={tabTask}
                  done={done}
                  setDone={setDone}
                  setTabTask={setTabTask}
                  submit={submit}
                />
              ) : (
                ""
              ))
            );
          })
        : ""}
    </ul>
  );
};
export default DivList;
