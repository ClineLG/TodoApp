import { useState } from "react";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import "./App.css";
import AddTask from "./assets/components/AddTask";
import Search from "./assets/components/Search";
import DivList from "./assets/components/DivList";

function App() {
  const [tabTask, setTabTask] = useState([""]);
  const [submit, setSubmit] = useState(false);
  const [done, setDone] = useState([]);
  const [search, setSearch] = useState("");
  const [submitSearch, setSubmitSearch] = useState(false);
  const [darkmode, setDarkmode] = useState(false);
  return (
    <div className={`principale ${darkmode && "dark"}`}>
      <Header setDarkmode={setDarkmode} darkmode={darkmode} />

      <main className={`${darkmode && "dark"}`}>
        <section className="container">
          <DivList
            tabTask={tabTask}
            done={done}
            setDone={setDone}
            setTabTask={setTabTask}
            submit={submit}
          />
        </section>

        <section className="container">
          <AddTask
            tabTask={tabTask}
            setTabTask={setTabTask}
            done={done}
            setDone={setDone}
            setSubmit={setSubmit}
          />
        </section>
        <Search
          submit={submit}
          search={search}
          setDone={setDone}
          done={done}
          tabTask={tabTask}
          setTabTask={setTabTask}
          setSubmitSearch={setSubmitSearch}
          submitSearch={submitSearch}
          setSearch={setSearch}
        />
      </main>
      <Footer darkmode={darkmode} />
    </div>
  );
}

export default App;
