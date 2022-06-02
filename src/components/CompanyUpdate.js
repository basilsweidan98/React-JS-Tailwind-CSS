import React from 'react'
import UpComingEvent from './UpComingEvent';
import RecentAward from './RecentAward';
import Widget from './Widget'
function CompanyUpdate() {
  return (
    <Widget title="Company Update">
    <div className="flex grid-cols-2 gap-6 ">

      <UpComingEvent />
      <RecentAward />
    </div>
    </Widget>
  )
}

export default CompanyUpdate;