import React, { useState } from "react";
import DeleteModal from "./DeleteModal";
import ProfileList from "./ProfileList";
function MyProfile() {
  const [RemovedID, setRemovedId] = useState(null);

  const [Lists, setLists] = useState([
    {
      title: "My new website",
      author: "mario",
      about:
        "A leading digital transformation consulting firm focused on the financial services industry",
      id: 1,
    },
    {
      title: "Welcome party!",
      author: "yoshi",
      about:
        "Synechron uniquely delivers these firms an end-to-end Digital, Consulting and Technology capabilities with expertise in wholesale banking",
      id: 2,
    },
    {
      title: "Web dev top tips",
      author: "mario",
      about:
        "as well as emerging technologies like Blockchain, Artificial Intelligence, and Data Science",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newLists = Lists.filter((list) => list.id !== RemovedID);
    setLists(newLists);
    setRemovedId(null);
  };

  const handleShowModal = (id) => {
    setRemovedId(id);
  };

  return (
    <div className=" bg-slate-100 ">
      <ProfileList Lists={Lists} title="All Lists" ShowModal={handleShowModal} />

      {RemovedID && (
        <DeleteModal onConfirm={() => {handleDelete();}}  onCancel={() => setRemovedId(null)} />)}
      {/* { RemovedID && ( 
          <div className='modal'> 
            <p>Are You Sure?</p>
              <button className='btn btn--alt' onClick={() => setRemovedId(null)}>cancel</button>

            <button className='btn' onClick={}>  Confirm  </button>

          </div> 
          )} */}
    </div>
  );
}

export default MyProfile;
