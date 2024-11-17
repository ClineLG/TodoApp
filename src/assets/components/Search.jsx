import List from "./List";
const Search = ({
  submit,
  search,
  setDone,
  done,
  tabTask,
  setTabTask,
  setSubmitSearch,
  submitSearch,
  setSearch,
}) => {
  return (
    <section>
      <ul>
        {submitSearch &&
          search !== "" &&
          tabTask.map((e, index) => {
            return (
              e.includes(search) && (
                <List
                  key={index + e}
                  e={e}
                  index={index}
                  tabTask={tabTask}
                  done={done}
                  setDone={setDone}
                  setTabTask={setTabTask}
                  submit={submit}
                  notDone={done[index] || !done[index]}
                />
              )
            );
          })}
      </ul>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitSearch(true);
        }}
      >
        <input
          className="input"
          type="text"
          onChange={(event) => {
            setSubmitSearch(false);
            setSearch(event.target.value);
          }}
        />
        <button className="buttform" type="submit">
          Search in Todo
        </button>
      </form>
    </section>
  );
};
export default Search;
