import logo from "../assets/logo.png";

const Header = ({ userSearch }) => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>TMDb</span>
      </div>

      <input type="search" name="search" className="searchInput" id="search" placeholder="Película..." />
    </div>
  );
};

export default Header;
