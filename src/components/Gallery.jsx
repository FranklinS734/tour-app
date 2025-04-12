import React, {useEffect, useState} from "react";   
import TourCard from "./tourcard"; 


const Gallery = ({ tours, setTours, onRemove }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    const fetchTours = async () => {
      try {
        const res = await fetch("https://course-api.com/react-tours-project");
        if (!res.ok) throw new Error('Failed to fetch tours');
        const data = await res.json();
        
        // Format data similarly to your book list approach
        const formattedTours = data.map(tour => ({
          id: tour.id,
          name: tour.name,
          info: tour.info,
          image: tour.image,
          price: tour.price
        }));
        
        setTours(formattedTours);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tours:", error);
        setError(true);
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchTours();
    }, []);
  
    if (loading) {
      return <h2>Loading tours...</h2>;
    }
  
    if (error) {
      return <h2>Something went wrong</h2>;
    }
  
    if (tours.length === 0) {
      return (
        <>
          <h2>No tours available</h2>
          <button onClick={fetchTours}>Refresh Tours</button>
        </>
      );
    }
  
    return (
      <section className="gallery">
        {tours.map((tour) => (
          <TourCard 
            key={tour.id} 
            {...tour} 
            onRemove={onRemove} 
          />
        ))}
      </section>
    );
  };
  
  export default Gallery;