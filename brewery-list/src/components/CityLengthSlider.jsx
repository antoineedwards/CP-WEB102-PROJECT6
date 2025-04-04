const CityLengthSlider = ({ minCityLength, setMinCityLength }) => (
    <div>
      <label>
        Min City Name Length: {minCityLength}
      </label>
      <input
        type="range"
        min="0"
        max="20"
        value={minCityLength}
        onChange={(e) => setMinCityLength(Number(e.target.value))}
      />
    </div>
  );
  
  export default CityLengthSlider;
  