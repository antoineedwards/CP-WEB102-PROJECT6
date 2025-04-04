import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FilterSelect from './components/FilterSelect';
import SummaryStats from './components/SummaryStats';
import BreweryList from './components/BreweryList';
import StateFilter from './components/StateFilter';
import Sidebar from './components/Sidebar';
import CityLengthSlider from './components/CityLengthSlider';
import '/src/components/styles.css';

const App = () => {
  const [breweries, setBreweries] = useState([]);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [stateFilter, setStateFilter] = useState('');
  const [minCityLength, setMinCityLength] = useState(0);

  useEffect(() => {
    const fetchBreweries = async () => {
      const res = await fetch('https://api.openbrewerydb.org/v1/breweries?per_page=50');
      const data = await res.json();
      setBreweries(data);
    };
    fetchBreweries();
  }, []);

  const filtered = breweries.filter(b =>
    b.name.toLowerCase().includes(search.toLowerCase()) &&
    (typeFilter === 'All' || b.brewery_type === typeFilter) &&
    (stateFilter === '' || b.state.toLowerCase().includes(stateFilter.toLowerCase())) &&
    (b.city.length >= minCityLength)
  );

  return (
    <div className="app">
      <Sidebar/>
      <SummaryStats breweries={breweries} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <SearchBar search={search} setSearch={setSearch} />
        <FilterSelect typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
        <StateFilter stateFilter={stateFilter} setStateFilter={setStateFilter} />
        <CityLengthSlider minCityLength={minCityLength} setMinCityLength={setMinCityLength} />
      </div>

      <BreweryList breweries={filtered} />
    </div>
  );
};

export default App;
