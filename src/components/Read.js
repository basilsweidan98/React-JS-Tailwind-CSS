import React, { useState } from "react";

const Read = ({about}) => {
    const [ShowReadMore, setShowReadMore] = useState(true);
    const ReadHandler = () => {
      setShowReadMore(!ShowReadMore);
      };
    
    return (
      <div>

     <div >
      <p >{ShowReadMore ? about.slice(0, 50) : about}
    <span className=" underline" onClick={ReadHandler} >
    
    {ShowReadMore ? "...read more" : "    show less"}
        </span>  </p>
        </div> 
        </div>)
}
export default Read;