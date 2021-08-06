import React from 'react'

export default function SearchingArea({ handleTypeCondition, handleChangeKeywords, handleSubmit, handleDateCondition, handleManyDayCondition }) {
  return (
    <div className="searching-area">
      <div>自訂篩選條件</div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          日期：<input type="date" id="searchingDate" onChange={handleDateCondition} />
          <select id="manySearchingDate" onChange={handleManyDayCondition}>
            <option value="1">當日</option>
            <option value="0">不指定</option>
          </select>
        </div>
        <div>
          尋找：<input type="text" placeholder="輸入關鍵字" onChange={handleChangeKeywords} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            類型：
              <select onChange={handleTypeCondition}>
              <option value="">全部類型</option>
              <option value="展覽">展覽</option>
              <option value="講座">講座</option>
              <option value="表演藝術">表演藝術</option>
              <option value="電影">電影</option>
              <option value="城市生活圈">城市生活圈</option>
            </select>
          </div>
          <input type="submit" value="查詢" style={{ fontSize: 'initial' }} />
        </div>
      </form>
    </div>

  )
}
