import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import SummaryStats from './components/SummaryStats';
import BreweryList from './components/BreweryList';
import SearchBar from './components/SearchBar';
import FilterSelect from './components/FilterSelect';
import StateFilter from './components/StateFilter';
import CityLengthSlider from './components/CityLengthSlider';
import Sidebar from './components/Sidebar';
import '/src/components/styles.css';

const App = () => {
  const [breweries, setBreweries] = useState([]);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [stateFilter, setStateFilter] = useState('');
  const [minCityLength, setMinCityLength] = useState(0);
  
  const [showCharts, setShowCharts] = useState(true); // State for toggling charts

  const toggleCharts = () => setShowCharts(!showCharts); // Toggle function

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

  // Count brewery types
  const typeCounts = breweries.reduce((acc, item) => {
    acc[item.brewery_type] = (acc[item.brewery_type] || 0) + 1;
    return acc;
  }, {});

  // Prepare data for charts
  const typeData = Object.entries(typeCounts).map(([type, count]) => ({
    name: type,
    count,
  }));

  return (
    <div className="app">
      <Sidebar />
      <SummaryStats breweries={breweries} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <SearchBar search={search} setSearch={setSearch} />
        <FilterSelect typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
        <StateFilter stateFilter={stateFilter} setStateFilter={setStateFilter} />
        <CityLengthSlider minCityLength={minCityLength} setMinCityLength={setMinCityLength} />
      </div>

      {/* Toggling charts visibility */}
      {showCharts && (
        <div className="charts">
          {/* Add your chart components here */}
          <BarChart width={400} height={300} data={typeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#a0522d" />
          </BarChart>

          <PieChart width={400} height={400}>
            <Pie
              data={typeData}
              dataKey="count"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#a0522d"
              label
            >
              {typeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.name === 'micro' ? '#ff8042' : '#0088FE'} />
              ))}
            </Pie>
          </PieChart>
        </div>
      )}

      <button onClick={toggleCharts}>
        {showCharts ? 'Hide Charts' : 'Show Charts'}
      </button>

      <BreweryList breweries={filtered} />
    </div>
  );
};

export default App;
