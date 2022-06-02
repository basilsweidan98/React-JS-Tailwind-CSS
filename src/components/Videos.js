import React from 'react'
import LastWidget from './LastWidget';

function Videos() {
    return (

        <LastWidget title="Our Videos">

            <div>

                <hr className="w-65 ml-5 mr-5" />
                <video className="float-left ml-5 mr-4 mt-3 " width="150" height="150" controls>
                    <source src="movie.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                </video>
                <p className="w-full text-left text-xs font-medium mt-15 pt-7  mb-2 ">Investing in Innovation <br /><span className="text-gray-500">00:30</span></p><br />
                <hr className="w-65 ml-5 mt-2 mr-5" />
                <video className="float-left ml-5 mr-4 mt-3 " width="150" height="150" controls>
                    <source src="movie.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                </video>
                <p className="w-full text-left text-xs font-medium mt-15 pt-7  mb-2 ">Investing for the Nation<br /><span className="text-gray-500">00:30</span></p><br />
                <hr className="w-65 ml-5 mt-2 mr-5" />
                <video className="float-left ml-5 mr-4 mt-3 " width="150" height="150" controls>
                    <source src="movie.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                </video>
                <p className="w-full text-left text-xs font-medium mt-15 pt-7  mb-2 ">Investing for a bright future <br /><span className="text-gray-500">00:30</span></p><br />
                <hr className="w-65 ml-5 mt-2 mr-5" />

            </div>
        </LastWidget>
    )
}

export default Videos;