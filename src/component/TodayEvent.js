import React from 'react'
// component
import OneEventCard from '../component/OneEventCard'
// 




export default function TodayEvent({ mydata }) {

  return (
    <div className="TodayEvent">
      {mydata.map(e => {
        return (
          <OneEventCard
            // key={e.ID}
            key={Math.random()}
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
