import React, { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
// component
import TodayEvent from '../component/TodayEvent'
import { getData } from '../culturedata'

const today = new Date()
const todayDate = Number(today.getFullYear() + '' + (today.getMonth() < 9 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1) + '' + today.getDate())

export default function HomePage() {
  const [mydata, setMydata] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const filterData = () => {
    getData().then(data => {
      // const events = data.slice(0, 3)
      const events = data.filter((e) => {
        const durationEndNumber = Number(e.DurationEnd.replace('-', '').replace('-', ''))
        return (durationEndNumber > todayDate && durationEndNumber < todayDate + 30)
      })
      console.log(events)
      setMydata([...events])
    })
  }

  useEffect(() => {
    filterData()
  }, [])
  return (
    <div className="HomePage">
      <div className="searching-area">
        <form action="" onSubmit={handleSubmit}>
          <input type="text" />
          <input type="submit" value="查詢" />
        </form>
      </div>
      <div className="homepage-content">
        <div className="title">本月活動</div>
        <TodayEvent mydata={mydata} />
        {/* <div className="title">本月活動</div> */}
      </div>
    </div>
  )
}
