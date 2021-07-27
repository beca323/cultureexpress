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
            ImageFile={e.ImageFile}
            DurationStart={e.DurationStart}
            DurationEnd={e.DurationEnd}
            Location={e.Location} />)
      })}

    </div>
  )
}
