import { FaTrashAlt } from "react-icons/fa";

const List = ({ tabTask, done, setDone, setTabTask, index, e }) => {
  return (
    <li
      key={`${tabTask[index]}+${index}`}
      className={done[index] ? "line-through" : ""}
    >
      {
        <input
          key={done[index]}
          className="checkbox"
          type="checkbox"
          defaultChecked={done[index] ? true : false}
          onChange={() => {
            done[index] = !done[index];

            const newDone = [...done];

            setDone(newDone);
          }}
        />
      }
      {e}
      {
        <FaTrashAlt
          className="logo-trash"
          onClick={(event) => {
            event.preventDefault();
            // event.stopPropagation();
            // console.log(tabTask[index], index);

            const TabAfterDelete = tabTask.splice(index, 1);
            const newTabAfterDelete = [...tabTask];
            console.log(newTabAfterDelete);
            setTabTask(newTabAfterDelete);

            const doneDelete = done.splice(index, 1);
            const newtabDone = [...done];
            setDone(newtabDone);
          }}
        />
      }
    </li>
  );
};
export default List;
