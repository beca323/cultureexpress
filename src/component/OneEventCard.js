import React from 'react'

export default function OneEventCard({ EventTypeID, EventUrl, EventName, ImageFile, Location, DurationEnd, DurationStart }) {
  return (
    <a href={EventUrl} target="_blank" className="OneEventCard">
      <div className="img"><img src={ImageFile} alt="" /></div>
      <div className="info">
        <div className="EventName">
          {EventName}
        </div>
        <div>
          類型：{EventTypeID}
        </div>
        <div>
          地點：{Location}
        </div>
        <div>
          活動期間：{DurationStart} ~ {DurationEnd}
        </div>
      </div>
    </a>
  )
}
