import React, { useEffect, useRef } from 'react'
import { assets, messageDummyData } from '../assets/assests'
import { formatMessageTime } from '../Library/Utils';


const ChatContainer = ({selectedUser,setSelectedUser}) => {

  const scrollEnd = useRef();

  useEffect(() => {
    if(scrollEnd.current) {
      scrollEnd.current.scrollIntoView({behaviour : 'smooth'});
    }
  },[])


  return selectedUser ? (
    <>

    <div className='h-full  relative backdrop-blur-lg'>

      <div className='flex items-center gap-3 py-3 max-4 border-b border-stone-500 px-8'>
        <img src={assets.Micheal_brown} alt="" className='w-8 rounded-full'/>
        <p className='flex-1 text-lg text-white flex items-center gap-2'>
          Martin Johnson
          <span className='w-2 h-2 rounded-full bg-green-500'></span>
        </p>
        <img onClick={() => setSelectedUser(null)} src={assets.Avtar_image} alt="" className='md:hidden max-w-7'/>
        <i className="fa-solid fa-circle-info max-md:hidden max-w-5"></i>
      </div>


      <div className='flex flex-col h-[calc(100%-120px)] p-8 pb-6'>
        {messageDummyData.map((msg,idx) => (

          <div key={idx} className={`flex items-end gap-2 justify-end ${msg.senderId !== '1a2b3c4d5e' && 'flex-row-reverse'}`}>
            {msg.image ? (
              <img src={msg.image} alt="" className='max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8'/>
            ) : (
              <p className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all bg-violet-500/30 text-white
                ${msg.senderId === '1a2b3c4d5e' ? 'rounded-br-none' : 'rounded-bl-none'}`}>{msg.text}</p>
            )}


            <div className='text-center text-xs'>
              <img src={msg.senderId === '1a2b3c4d5e' ? assets.Avtar_image : assets.Micheal_brown} alt="" 
              className='w-7 rounded-full'/>
              <p className='text-gray-500'>{formatMessageTime(msg.createdAt)}</p>
            </div>
          </div>
        ))}
      </div>

      <div ref={scrollEnd}></div>

      <div className='absolute bottom-0 left-0 right-0 flex items-center gap-3 p-3'>
        
        <div className='flex-1 flex items-center bg-gray-100/12 px-3 rounded-full'>
          <input type="text" placeholder='Send a message' className='flex-1 text-sm p-3 border-none rounded-lg outline-none text-white placeholder-gray-400'/>
          <input type="file" id='image' accept='image/png, image/jpeg' hidden/>
          <label htmlFor="image"> 
            <i class="fa-solid fa-image w-5 mr-2 cursor-pointer"></i>
          </label>
        </div>

        <img src={assets.send_logo2} alt="" className='w-7 cursor-pointer'/>
      </div>



    </div>

    

    </>
  ) : (

    <div className='flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden'>
      <img src={assets.chat_logo} alt="" className='max-w-16'/>
      <p className='text-lg font-medium text-white'>Chat anytime , anywhere</p>
    </div>
    
  )
}

export default ChatContainer