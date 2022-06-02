import React from 'react'
import Recnet from './Recnet'
function RecentAward() {
    const recent = ([
        { Year:"Best Global PR Campaign, Project Horizon" , awards:"Global SABRE AWARDS"},
        { Year:"International ARC Awards" , awards:"Global SABRE AWARDS"},
        { Year:"Top Emirati Report of 2017" , awards:"Global SABRE AWARDS"},
        { Year:"Gitex Technology " , awards:"Global SABRE AWARDS"},
        { Year:"Top 100 Reports Worldwild" , awards:"Global SABRE AWARDS"}])
    return (
        <div>
            <Recnet Recent={recent}/>
            

        </div>
    )
}

export default RecentAward