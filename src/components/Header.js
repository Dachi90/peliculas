const Header = ({ userSearch }) => {
  return (
    <div className="header">
      <span className="logo">Logo</span>
      <h1 className="mainTitle">Películas</h1>
      <div className="searchBar">
        <input type="search" name="search" className="searchInput" id="search" placeholder="Película..." />
        <button onClick={userSearch}>Buscar</button>
      </div>
    </div>
  );
};

export default Header;
