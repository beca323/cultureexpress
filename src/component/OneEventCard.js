import React from 'react'

export default function OneEventCard({ EventName, ImageFile, Location, DurationEnd, DurationStart }) {
  return (
    <div className="OneEventCard">
      <div className="img"><img src={ImageFile} alt="" /></div>
      <div className="info">
        <div className="EventName">
          {EventName}
        </div>
        <div>
          地點：{Location}
        </div>
        <div>
          活動期間：{DurationStart} ~ {DurationEnd}
        </div>
      </div>
    </div>
  )
}
