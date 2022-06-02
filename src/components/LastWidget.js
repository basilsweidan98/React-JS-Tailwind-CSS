import React, { children } from 'react'

function LastWidget({ title, children, imoji }) {
    return (
        <div className='bg-white float-right rounded shadow-lg border mb-10'>
            <div className="flex ">
                <p className="font-bold text-base text-x text-left pl-5 pt-3 pb-3">{title} </p>
                
                <div>{imoji}</div>

            </div>
            {children}
        </div>
    )
}

export default LastWidget;