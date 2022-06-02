import React from 'react'
import Widget from './Widget';

function LatestNews() {
    const renderOption = () => {
        return (
            <dev className="flex gap-2 ">
                <div className="text-cyan-500  hover:text-cyan-500  underline  py-5 text-xs font-medium"> Our Partnershipss </div>
                <div className="text-black  hover:text-cyan-500 py-5 text-xs font-medium"> External News   </div>
                <div className="text-black  hover:text-cyan-500 py-5 text-xs font-medium"> Internal News </div>
            </dev>
        )}
    return (
        
        <Widget title="Latest News" option={renderOption()}>
            <div className="flex-1 bg-no-repeat w-full h-full text-white text-x leading-4 bg-[url('https://www.panemirates.com/uae/en/images/armsly-office-desk-p23247-92439_medium.jpg')]" >
        <p className="absolute pt-3 pl-10 font-sans uppercase">partnerships</p>
        <br />

        <p className="absolute mt-40 pt-10 pl-10 text-lg mb-2">Mubadala Capital acquires K-MAC Enterprises, the second</p><br />
        <p className="absolute mt-40 pt-12 pl-10   text-lg">largest Taco Bell franchisee in the United States</p>
        <p className="absolute mt-40 pt-20  pl-10  text-sm text-gray-300"> Abu Dhabi, UAE</p><br /><br />
        <p className="absolute mt-40 pt-20  pl-10  text-sm text-gray-300"> 14 OCTOBER 2021</p>

      </div>
      </Widget>
     
        
    )
}

export default LatestNews;