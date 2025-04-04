const FilterSelect = ({ typeFilter, setTypeFilter }) => (
    <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
      <option value="All">All Types</option>
      <option value="micro">Micro</option>
      <option value="regional">Regional</option>
      <option value="brewpub">Brewpub</option>
      <option value="large">Large</option>
      <option value="planning">Planning</option>
      <option value="bar">Bar</option>
      <option value="contract">Contract</option>
      <option value="proprietor">Proprietor</option>
    </select>
  );
  
  export default FilterSelect;
  