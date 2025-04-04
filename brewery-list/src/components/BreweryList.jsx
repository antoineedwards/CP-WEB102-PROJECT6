import BreweryItem from './BreweryItem';

const BreweryList = ({ breweries }) => (
  <ul id="brewery-list">
    {breweries.map((brewery, idx) => (
      <BreweryItem key={idx} brewery={brewery} />
    ))}
  </ul>
);

export default BreweryList;
