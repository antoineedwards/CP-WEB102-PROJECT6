const SummaryStats = ({ breweries }) => {
    const total = breweries.length;
  
    const typeCounts = breweries.reduce((acc, item) => {
      acc[item.brewery_type] = (acc[item.brewery_type] || 0) + 1;
      return acc;
    }, {});
    const mostCommonType = Object.entries(typeCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';
  
    return (
      <div>
        <p>Total Breweries: {total}</p>
        <p>Most Common Type: {mostCommonType}</p>
        <p>Available Types: {Object.keys(typeCounts).join(', ')}</p>
      </div>
    );
  };
  
  export default SummaryStats;
  