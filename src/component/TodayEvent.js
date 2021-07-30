import React from 'react'
// component
import OneEventCard from '../component/OneEventCard'
// 
import { v4 as uuidv4 } from 'uuid'




export default function TodayEvent({ mydata }) {

  return (
    <div className="TodayEvent">
      {mydata.map(e => {
        return (
          <OneEventCard
            key={uuidv4()}
            EventName={e.EventName}
            ImageFile={e.ImageFile ? e.ImageFile : 'https://cdn.pixabay.com/photo/2017/08/04/05/37/coming-soon-2579123_960_720.jpg'}
            DurationStart={e.DurationStart}
            DurationEnd={e.DurationEnd}
            Location={e.Location}
            EventUrl={e.EventUrl}
            EventTypeID={e.EventTypeID} />)
      })}

    </div>
  )
}
