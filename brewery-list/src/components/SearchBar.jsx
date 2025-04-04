const SearchBar = ({ search, setSearch }) => (
    <input
      type="text"
      placeholder="Search brewery name..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{ margin: '10px 0' }}
    />
  );
  
  export default SearchBar;
  