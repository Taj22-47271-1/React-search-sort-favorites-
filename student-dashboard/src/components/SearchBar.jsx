import PropTypes from "prop-types";

function SearchBar({ searchText, setSearchText }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search by name or major..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};

export default SearchBar;