import { FaListUl } from "react-icons/fa";
import ToggleDark from "./ToggleDark";
const Header = ({ setDarkmode, darkmode }) => {
  return (
    <header className={`${darkmode && "dark"}`}>
      <div className="container">
        <div>
          <FaListUl className="logo-list" />
          <h1>Todo List</h1>
        </div>
        <div>
          <ToggleDark setDarkmode={setDarkmode} darkmode={darkmode} />
        </div>
      </div>
    </header>
  );
};
export default Header;
