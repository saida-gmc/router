const Search = ({ setSearch }) => {
  const change = (e) => setSearch(e.target.value);
  return (
    <div>
      <input type="text" onChange={(e) => change(e)} />
    </div>
  );
};

export default Search;
