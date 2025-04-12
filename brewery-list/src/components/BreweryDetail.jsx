import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';

const BreweryDetail = () => {
  const { id } = useParams(); // Get the id from the URL
  const [brewery, setBrewery] = useState(null);

  useEffect(() => {
    const fetchBrewery = async () => {
      const res = await fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`);
      const data = await res.json();
      setBrewery(data);
    };
    fetchBrewery();
  }, [id]);

  if (!brewery) {
    return <div>Loading...</div>;
  }

  return (
    <div className="brewery-detail">
      <h2>{brewery.name}</h2>
      <p>{brewery.brewery_type}</p>
      <p>{brewery.city}, {brewery.state}</p>
      <p>{brewery.street}</p>
      <p>{brewery.phone}</p>
      <p><a href={brewery.website_url} target="_blank" rel="noopener noreferrer">Website</a></p>

      <div>
        <h3>Details</h3>
        <p>{brewery.description || 'No description available.'}</p>
      </div>
    </div>
  );
};

export default BreweryDetail;
