const Header = () => {
  return (
    <div className="header">
      <span className="logo">Logo</span>
      <h1 className="mainTitle">Título</h1>
      <div className="searchBar">
        <input type="search" name="search" className="searchInput" id="search" placeholder="Película..." />
        <button>Buscar</button>
      </div>
    </div>
  );
};

export default Header;
