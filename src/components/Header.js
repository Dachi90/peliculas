import logo from "../assets/logo.png";

const Header = ({ userSearch }) => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>TMDb</span>
      </div>

      <div className="searchBar">
        <input type="search" name="search" className="searchInput" id="search" placeholder="Película..." />
        <button onClick={userSearch}>Buscar</button>
      </div>
    </div>
  );
};

export default Header;
