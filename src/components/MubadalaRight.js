import React from 'react'

function MubadalaRight() {
    return (
        <div>
            <div className="bg-white	float-right  rounded shadow-lg border">
                <div className="flex grid grid-cols-2">
                    <p className="font-medium text-base font-bold  text-lg text-left pl-7 pt-2 pb-2	">Your challenges </p>

                    <a href="#" className="font-medium text-xs ml-20 pt-4 pb-2">Veiw your badges </a>

                </div>
                <hr />
                <div>
                    <img src="https://www.seekpng.com/png/full/244-2449855_strategy-512-quality-logo-plan-quality-assurance-icon.png" className="w-20 ml-7 mt-5 h-20 float-left" alt='llkd' ></img>
                    <p className="font-medium text-base pt-6 text-left ml-20 pl-20 text-x"> Level 3 </p>
                    <p className=" text-base font-bold text-xl font-sans text-left ml-20 pl-20">intermediate </p>
                    <p className="font-medium text-x text-left ml-20 pl-20 text-gray-500">414 POINTS </p>


                </div>
                <div className="bg-gray-200 rounded m-4 border">
                    <img src="https://static2.bigstockphoto.com/2/4/4/large2/442978157.jpg" className="w-20 ml-7 mt-1 pt-1 h-20 float-left" alt='eqf' ></img>
                    <p className="font-bold text-base pt-6 text-left ml-20 pl-20 text-x"> Read 10 articles in the knowledge hub </p>
                    <p className="text-gray-500 text-base  text-left ml-20 pl-20 text-xs">You can increase your level by reading 10 article </p><br/>


                </div>
                <button className="bg-teal-600	float-right mt-2 text-white rounded	p-2 text-xs mr-4 mb-3">Read an article</button>
                <button className="text-teal-600	float-right mt-2 mr-3  border border-teal-600 text-xs	hover:bg-emerald-500 p-2 mb-3  rounded	">Skip for now</button><br />

            </div>
        </div>
    )
}

export default MubadalaRight;