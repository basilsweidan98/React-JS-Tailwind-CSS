import React from "react";
import ComingEvent from './ComingEvent'

function UpComingEvent() {
  const upcoming = ([
    { event:" Fintech Surge " , date:"Monday, October21, 2021"},
    { event:"Future Blockchain Summit" , date:"Sunday, October21, 2021"},
    { event:"Gitex Technology " , date:"Wednesday, October21, 2021"}])
  return (
    <div>
      <div >
        
            <ComingEvent Upcoming={upcoming}/>
      </div>
    </div>
  );
}

export default UpComingEvent;
