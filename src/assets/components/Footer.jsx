const Footer = ({ darkmode }) => {
  return (
    <footer className={`${darkmode && "dark"}`}>
      <div className="container">
        <p>
          Made with <a href="">React </a>at <a href="">Le Reacteur </a>by{" "}
          <a href="">Céline Le Guelvouit</a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
