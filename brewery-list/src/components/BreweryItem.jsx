const BreweryItem = ({ brewery }) => (
    <li>
      <strong>{brewery.name}</strong> ({brewery.brewery_type}) - {brewery.city}, {brewery.state}
      {brewery.website_url && (
        <a href={brewery.website_url} target="_blank" rel="noopener noreferrer"> 🌐</a>
      )}
    </li>
  );
  
  export default BreweryItem;
  