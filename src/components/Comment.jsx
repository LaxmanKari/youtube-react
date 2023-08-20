import React from 'react'
import userLogo from "../assests/user-icon.jpg"
const Comment = ({data}) => {

  return (
    <div className='flex flex-row shadow-sm bg-gray-100 my-2'>
      <img className="h-8 w-8 " alt="use-logo" src={userLogo}/>
      <div>
         <p className='p-2 font-bold'>{data.name}</p>
         <p className='pl-2'>{data.text}</p>
      </div>
    </div>
  )
}

export default Comment
