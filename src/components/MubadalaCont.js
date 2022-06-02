import React from 'react'
import MubadalaLeft from './MubadalaLeft'
import MubadalaRight from './MubadalaRight'

function MubadalaCont() {
    return (
        <div>
            <div className="flex items-stretch  grid-cols-2 gap-6 	 mt-5 ">
                <div><MubadalaLeft /></div>
              <div>  <MubadalaRight /></div>

            </div>
        </div>
    )
}

export default MubadalaCont