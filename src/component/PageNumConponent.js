import React, { useState } from 'react'

export default function PageNumConponent({ PAGE_ARRAY, handleChangePage, nowPage, dataCounts }) {
  // const ONE_PAGE_COUNTS = 6
  // const PAGE_COUNTS = Math.floor(dataCounts / ONE_PAGE_COUNTS) + 1
  // const PAGE_ARRAY = [...Array(PAGE_COUNTS).keys()]

  return (
    <div className="PageNumConponent">
      {PAGE_ARRAY.map((e, index) => {
        return (
          <div
            key={index}
            onClick={handleChangePage}
            className={nowPage === e ? 'active' : ''}>{e + 1}
          </div>
        )
      })}
    </div>
  )
}
