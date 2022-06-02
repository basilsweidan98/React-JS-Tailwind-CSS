import React from 'react'

function Widget({children,title,option}) {
    return (
       
        <div className='flex flex-col'>
        <div className="flex ">
          <div className="grow text-left h-14 text-black py-3 rounded-md text-xl font-medium">{title} </div>
        <div >{option}</div>
        </div>

        <hr className='mb-4 ' />
        <div className='flex-1' >
               {children}
            </div>
      </div>

    )
}

export default Widget;