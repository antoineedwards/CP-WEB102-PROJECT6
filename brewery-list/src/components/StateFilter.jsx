const StateFilter = ({ stateFilter, setStateFilter }) => (
    <input
      type="text"
      placeholder="Filter by state (e.g. California)"
      value={stateFilter}
      onChange={(e) => setStateFilter(e.target.value)}
    />
  );
  
  export default StateFilter;
  