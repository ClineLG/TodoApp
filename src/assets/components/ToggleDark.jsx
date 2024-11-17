const ToggleDark = ({ setDarkmode, darkmode }) => {
  return (
    <>
      <button
        className={`togglebutton ${darkmode ? "on" : ""}`}
        onClick={() => {
          setDarkmode(!darkmode);
        }}
      >
        <div className={`ball`}></div>
      </button>{" "}
      <label type="text" className="label">
        Dark-mode
      </label>
    </>
  );
};
export default ToggleDark;
