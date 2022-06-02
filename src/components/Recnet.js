import React from 'react'

function Recnet({Recent}) {
    return (
        <div className="bg-white float-right border rounded shadow-lg text-left w-60 h-96">
                <p className="font-medium text-base	p-3">Recent Awards </p>

            {Recent.map(({Year,awards}) => (
                <div className="">
                <hr className="w-65" />
                <p className="font-medium text-xs pt-2 pl-3 pb-2">{Year}</p>
                <p className="font-medium text-gray-400 text-xs pl-3 pb-2">{awards}</p>

                <hr className="w-65" />


            </div>
               
            ))}









            
        </div>
    )
}

export default Recnet