import React from 'react'
import SocialUpdate from './SocialUpdate'
import NewJoin from './NewJoin'
import Videos from './Videos'

function LastContainer() {
  return (
    <div class="grid grid-cols-3 gap-5 bg-slate-50 bg-white	mt-5">
            <SocialUpdate/>
            <NewJoin/>
            <Videos/>

    </div>
  )
}

export default LastContainer