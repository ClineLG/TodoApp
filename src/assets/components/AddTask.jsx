const AddTask = ({ tabTask, setTabTask, done, setDone, setSubmit }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmit(true);

        const newTab = [...tabTask];
        newTab.push("");
        setTabTask(newTab);
        const newDone = [...done];
        newDone.push(false);

        setDone(newDone);
      }}
    >
      <input
        className="input"
        type="text"
        name="task"
        onChange={(event) => {
          tabTask.map((e, index) => {
            let task = event.target.value;

            const newTab = [...tabTask];
            newTab[index] = task;

            setTabTask(newTab);
          });
        }}
        value={tabTask[tabTask.length - 1]}
      />

      <button className="buttform" type="submit">
        Add task
      </button>
    </form>
  );
};
export default AddTask;
