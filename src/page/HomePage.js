import React, { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
// component
import TodayEvent from '../component/TodayEvent'
import { getData } from '../culturedata'
import PageNumConponent from '../component/PageNumConponent'
import SearchingArea from '../component/SearchingArea'

const today = new Date()
const todayDate = Number(today.getFullYear() + ''
  + (today.getMonth() < 9 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1) + ''
  + (today.getDate() < 9 ? '0' + today.getDate() : today.getDate()))

const ONE_PAGE_COUNTS = 6

export default function HomePage() {
  const [mydata, setMydata] = useState([])
  const [onePageData, setOnePageData] = useState([])
  const [conditionDate, setConditionDate] = useState(todayDate)
  const [conditionType, setConditionType] = useState('')
  const [conditionManyDays, setConditionManyDays] = useState(false)
  const [conditionKeywords, setConditionKeywords] = useState('')
  const [nowPage, setNowPage] = useState(0)

  const PAGE_COUNTS = Math.floor(mydata.length / ONE_PAGE_COUNTS) + 1
  const PAGE_ARRAY = [...Array(PAGE_COUNTS).keys()]

  const handleChangePage = (e) => {
    const clickNumber = e.target.innerHTML - 1
    setNowPage(clickNumber)
    setOnePageData(mydata.slice(clickNumber * ONE_PAGE_COUNTS, 6 + clickNumber * ONE_PAGE_COUNTS))
    document.documentElement.scrollTop = 500
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    filterData(conditionDate, conditionType, conditionKeywords)
  }
  const filterData = (conditionDate, conditionType, conditionKeywords) => {
    if (conditionManyDays == true) {
      getData().then(data => {
        const events = data.filter((e) => {
          const durationEndNumber = Number(e.DurationEnd.replace('-', '').replace('-', ''))
          return ((e.EventName.includes(conditionKeywords) || e.BriefIntroduction.includes(conditionKeywords))
            && e.EventTypeID.includes(conditionType)
            && durationEndNumber > conditionDate)
        })
        setMydata([...events])
        return [...events]
      }).then((result) => {
        setOnePageData(result.slice(0, result.length > 6 ? 6 : result.length))
      })
    } else {
      getData().then(data => {
        const events = data.filter((e) => {
          const durationEndNumber = Number(e.DurationEnd.replace('-', '').replace('-', ''))
          const durationStartNumber = Number(e.DurationStart.replace('-', '').replace('-', ''))
          return ((e.EventName.includes(conditionKeywords) || e.BriefIntroduction.includes(conditionKeywords))
            && e.EventTypeID.includes(conditionType)
            && durationEndNumber > conditionDate && durationStartNumber < conditionDate)
        })
        setMydata([...events])
        return [...events]
      }).then((result) => {
        setOnePageData(result.slice(0, result.length > 6 ? 6 : result.length))
      })
    }
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
    setConditionDate(Number(e.target.value.replace('-', '').replace('-', '')))
    document.getElementById('manySearchingDate').value = 1
  }
  const handleTypeCondition = (e) => {
    setConditionType(e.target.value)
  }
  const handleManyDayCondition = (e) => {
    if (e.target.value == 1) {
      setConditionManyDays(false)
    } else {
      setConditionManyDays(true)
    }
  }
  const handleChangeKeywords = (e) => {
    setConditionKeywords(e.target.value)
  }
  useEffect(() => {
    filterData(todayDate, '', '')
    setBookingDate()

  }, [])
  return (
    <div className="HomePage">
      <SearchingArea
        handleSubmit={handleSubmit}
        handleDateCondition={handleDateCondition}
        handleManyDayCondition={handleManyDayCondition}
        handleChangeKeywords={handleChangeKeywords}
        handleTypeCondition={handleTypeCondition} />
      <div className="homepage-content">
        <div className="title">
          <div> 當日活動</div>
          <div> 共 {mydata.length} 筆</div>
        </div>
        <TodayEvent mydata={onePageData} />
      </div>
      <PageNumConponent
        nowPage={nowPage}
        handleChangePage={handleChangePage}
        PAGE_ARRAY={PAGE_ARRAY}
      />
      <footer>資料來源：政府資料開放平台 DATA.GOV.TW - 臺北市文化快遞資訊</footer>
    </div>
  )
}
