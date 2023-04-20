import React from 'react'
import {useParams} from 'react-router-dom'

function EventDetailPage() {

    const params = useParams();

  return (
    <>
    <div>EventDetailPage</div>
    <h3>{params.eventid}</h3>
    </>

  )
}

export default EventDetailPage