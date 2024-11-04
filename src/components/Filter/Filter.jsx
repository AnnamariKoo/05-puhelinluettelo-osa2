const Filter = (props) => {
  return (
    <form className="filterForm">
      filter shown with:
      <input value={props.searchTerm} onChange={props.handleSearchChange} />
    </form>
  );
};

export default Filter;
