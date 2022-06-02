import React from 'react'
import KnowledgHub from './KnowledgHub'
import Remote from './Remote'

function KnowContainer() {
  return (
    <div className="items-stretch grid grid-cols-2 bg-gray-200	text-left  ">
          <KnowledgHub/>
          <Remote/>
          
        <br/>
        <br/>


    </div>
    
  )
}

export default KnowContainer