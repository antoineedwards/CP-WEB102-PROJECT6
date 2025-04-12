import React from 'react';
import { Link } from 'react-router-dom';

const BreweryItem = ({ brewery }) => (
  <li>
    <strong>{brewery.name}</strong> ({brewery.brewery_type}) - {brewery.city}, {brewery.state}
    {brewery.website_url && (
      <a href={brewery.website_url} target="_blank" rel="noopener noreferrer"> 🌐</a>
    )}
    <br />
    <Link to={`/brewery/${brewery.id}`}>View Details</Link> {/* Added link to detail page */}
  </li>
);

export default BreweryItem;
