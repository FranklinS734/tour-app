import React from "react";

const DestinationSelector = ({ options, selectedOption, onChange }) => {
  return (
    <div className="filter">
      <label htmlFor="destination-select">Filter by Destination:</label>
      <select
        id="destination-select"
        value={selectedOption}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DestinationSelector;