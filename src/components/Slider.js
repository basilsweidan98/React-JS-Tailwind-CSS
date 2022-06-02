import React from 'react'

function Slider({icons}) {
    
    return (
        <div className="bg-teal-600 py-10">
            <div className="mt-2 text-center">
                <div className="w-full flex justify-center mb-2">
                    <img className="inline-block h-12 w-12 rounded-full ring-2 " src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <p className="text-white	font-bold ">Welcom back, Iven</p>
                <p className="text-white">You have<span className="font-bold"> 4 Messages </span>in your inbox</p>
            </div>

            {icons}
          
        </div>
    )
}

export default Slider