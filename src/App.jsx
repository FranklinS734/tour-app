import React, { useState } from 'react';
import Gallery from './components/gallery';
import DestinationSelector from './components/DestinationSelector';
import './styles/styles.css';

function App() {
  const [tours, setTours] = useState([]);
  const [selectedTour, setSelectedTour] = useState("All");

  const removeTour = (id) => {
    setTours(tours.filter(tour => tour.id !== id));
  };

  // Extract unique tour names for the dropdown
  const tourNames = ["All", ...new Set(tours.map((tour) => tour.name))];

  return (
    <div className="app">
      <h1>Tour Comparison App</h1>
      <DestinationSelector
        options={tourNames}
        selectedOption={selectedTour}
        onChange={setSelectedTour}
      />
      <Gallery
        tours={tours}
        setTours={setTours}
        onRemove={removeTour}
        selectedTour={selectedTour}
      />
    </div>
  );
}

export default App;