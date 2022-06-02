import React from 'react'

function ComingEvent({ Upcoming }) {
    return (
        <div className="bg-white float-right border rounded shadow-lg text-left w-60 h-96">
            <p className="font-medium text-base	p-3">Upcoming events </p>

            <hr className="w-65" />
            <p className="font-medium text-xs pt-2 pl-3 pb-2"> IFN Middle East Forum 2021 </p>
            <p className="font-medium text-gray-400 text-xs pl-3"> Sunday, October 21,2021 </p>
            <div>
                <div className="mt-1 pl-3 pt-3 flex -space-x-2 overflow-hidden ">
                    <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                    <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />


                    <div className="mt-3 text-sm font-medium">
                        <a href="#" className="text-blue-500 pl-5 text-xs w-4">  + 198 others </a>
                    </div>
                </div>
            </div>
            <button className="bg-emerald-500	 text-white rounded	p-2 text-xs ml-2 mb-2 mt-1"> Add to calendar </button>
            <button className="text-emerald-500	border border-emerald-500	hover:bg-emerald-500 p-2 rounded text-xs mt-1 ml-2 mb-2	">  Share
            </button>

            {Upcoming.map(({ event, date }) => (
                <div >
                    <hr className="w-65 " />
                    <div className="grid grid-cols-4 text-left " >
                        <div className=" col-span-3">
                            <p className="font-medium text-xs pt-2 pl-3 pb-2 text-left ">{event}</p>
                            <p className="font-medium text-gray-400 text-xs pl-3  text-left ">{date} </p>
                        </div>
                        <div className="flex mt-3">
                            <i className="fa-solid fa-calendar mr-2" style={{ color: "#00B2A9", fontSize: 20 }}></i>
                            <i className="fa-solid fa-share-nodes border-1" style={{ color: "#00B2A9", fontSize: 20 }}></i>
                        </div>

                    </div>
                    <hr className="w-65 " />
                    </div> ))}
        </div> )}
export default ComingEvent