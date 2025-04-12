// src/pages/DetailView.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';

const DetailView = () => {
  const { id } = useParams();
  const [brewery, setBrewery] = useState(null);

  useEffect(() => {
    const fetchBrewery = async () => {
      const res = await fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`);
      const data = await res.json();
      setBrewery(data);
    };
    fetchBrewery();
  }, [id]);

  if (!brewery) return <p>Loading...</p>;

  return (
    <>
    <div>
      <h2>{brewery.name}</h2>
      <p>Type: {brewery.brewery_type}</p>
      <p>City: {brewery.city}</p>
      <p>State: {brewery.state}</p>
      <p>Website: <a href={brewery.website_url} target="_blank" rel="noreferrer">{brewery.website_url}</a></p>
    </div>
    </>
  );
};

export default DetailView;
