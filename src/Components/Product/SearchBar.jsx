const SearchBar = ({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) => {
  return(
 
    <form>
      <table border="1" width = "300">
          <input type="text" 
          value={filterText}
          placeholder="Buscar.." 
          onChange={(e) => onFilterTextChange(e.target.value)}/>
          <br />
          <label>
          <input type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)}/>
          {' '}
          Mostrar solo productos en Stock
          </label>
      </table>
    </form>
  );
}
export default SearchBar;