import React from 'react';
import Read from './Read';

function ProfileList({ Lists, title, ShowModal}) {

    
    return (
        <div>
            

            {Lists.map(({id, author, about}) => (
                <div className="p-5 m-10 border-2 border-black text-center hover:border-slate-400" key={id} >
                    <h2 className=' text-lg text-amber-600 mb-3 border-slate-400'>{title}</h2>
                    <h4 className=' text-red-700'>Welcome {author} </h4>
                  <div>
                        
                        <Read about={about}/>              
                             
                                </div>



                    <p className=' text-red-700'>Written by {author}</p>
                    <div>
                        <button className=' bg-red-500 p-1 rounded' onClick={() => ShowModal(id)}> Delete </button>

                    </div>
                </div>
            ))};
        </div>
    );
}


export default ProfileList;