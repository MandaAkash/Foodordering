import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [fetchedEvents, setFetchedEvents] = useState();
//   const [error, setError] = useState()

  const fetchedData = useLoaderData();
    // console.log(fetchedData);
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        {/* {isLoading && <p>Loading...</p>} */}
        {/* {error && <p>{error}</p>} */}
      </div>
       <EventsList events={fetchedData.events} />
    </>
  );
}

export default EventsPage;

export const fetchData = async() =>{
        const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        throw new Error("something went wrong")
    } else {
      return response;
    }

}