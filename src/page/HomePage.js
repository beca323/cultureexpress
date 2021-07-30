import React, { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
// component
import TodayEvent from '../component/TodayEvent'
import { getData } from '../culturedata'

const today = new Date()
const todayDate = Number(today.getFullYear() + '' + (today.getMonth() < 9 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1) + '' + today.getDate())

export default function HomePage() {
  const [mydata, setMydata] = useState([])
  const [conditionDate, setConditionDate] = useState(todayDate)
  const [conditionType, setConditionType] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(conditionDate, conditionType)
    filterData(conditionDate, conditionType)
  }

  const filterData = (conditionDate, conditionType) => {
    getData().then(data => {
      const events = data.filter((e) => {
        const durationEndNumber = Number(e.DurationEnd.replace('-', '').replace('-', ''))
        return (e.EventTypeID.includes(conditionType) && durationEndNumber > conditionDate)
      })
      // console.log(events)
      setMydata([...events])
    })
  }

  const setBookingDate = () => {
    let today = new Date()

    let year = today.getFullYear()
    let month = today.getMonth() + 1
    if (month < 10) { month = '0' + month }
    let date = today.getDate()
    if (date < 10) { date = '0' + date }
    let defaultDateValue = year + '-' + month + '-' + date

    let calendar = document.querySelector('#searchingDate')
    calendar.setAttribute('value', defaultDateValue)
    // calendar.setAttribute('min', defaultDateValue)

  }

  const handleDateCondition = (e) => {
    // console.log(Number(e.target.value.replace('-', '').replace('-', '')))
    // console.log(todayDate)
    setConditionDate(Number(e.target.value.replace('-', '').replace('-', '')))
  }
  const handleTypeCondition = (e) => {
    setConditionType(e.target.value)
  }
  useEffect(() => {
    filterData(todayDate, '')
    setBookingDate()
  }, [])
  return (
    <div className="HomePage">
      <div className="searching-area">
        <div>設定篩選條件</div>
        <form action="" onSubmit={handleSubmit}>
          日期：<input type="date" id="searchingDate" onChange={handleDateCondition} />
          類型：
          <select onChange={handleTypeCondition}>
            <option value="">選擇類型</option>
            <option value="展覽">展覽</option>
            <option value="講座">講座</option>
            <option value="表演藝術">表演藝術</option>
            <option value="電影">電影</option>
            <option value="城市生活圈">城市生活圈</option>
          </select>
          <input type="submit" value="查詢" />
        </form>
      </div>
      <div className="homepage-content">
        <div className="title">
          本日活動
        </div>
        <TodayEvent mydata={mydata} />
        {/* <div className="title">本月活動</div> */}
      </div>
      <footer>資料來源：政府資料開放平台 DATA.GOV.TW - 臺北市文化快遞資訊</footer>
    </div>
  )
}
