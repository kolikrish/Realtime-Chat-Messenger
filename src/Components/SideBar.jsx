import React from 'react'
import {assets, userDummyData} from '../assets/assests'
import { useNavigate } from 'react-router-dom'

const SideBar = ({selectedUser,setSelectedUser}) => {

    const navigate = useNavigate();

  return (
    <>
    <div className={`bg-[#8185B2]/10 h-full p-5 rounded-r-xl text-white ${selectedUser ? 'max-md:hidden' : ''}`}>
        <div className='pb-5'>

            <div className='flex justify-between items-center'>
                <img src={assets.chat_logo} alt="logo" className='max-w-10 h-auto'/>

                <div className='relative py-2 group'>
                    <i className='fa-solid fa-ellipsis-vertical text-xl cursor-pointer'></i>

                    <div className='absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-[#282142] border border-gray-600 text-gray-100 hidden group-hover:block'>
                        <p onClick={() => navigate('/profile')} className='cursor-pointer text-sm hover:text-white/80'>Edit Profile</p>
                        <hr className='my-2 border-t border-gray-500'/>
                        <p className='cursor-pointer text-sm hover:text-white/80'>Logout</p>
                    </div>
                </div>
            </div>

            <div className='bg-[#282142] rounded-full flex items-center gap-6 py-3 px-8 mt-5'>
                <i className="fa-regular fa-user w-3"></i>
                <input type="text" className='bg-transparent border-none outline-none text-white py-1 text-xs placeholder-[#c8c8c8] flex-1' placeholder='Search User'/>
            </div>

        </div>

        <div className='flex flex-col'>
            {userDummyData.map((user,idx) => (
                <div onClick={() => {setSelectedUser(user)}} key={idx} className={`relative flex items-center gap-3 p-2 pl-4 rounded cursor-pointer max-sm:text-sm ${selectedUser?._id === user._id && 'bg-[#282142]/50'}`}>
                    <img src={user?.profilePic || assets.Avtar_image} alt="" className='w-[35px] aspect-[1/1] rounded-full' />

                    <div className='flex flex-col leading-5'>
                        <p>{user.fullname}</p>

                        {
                            idx > 3
                            ? <span className='text-green-400 text-xs'>Online</span>
                            : <span className='text-neutral-400 text-xs'>Offline</span>
                        }
                    </div>

                    {idx > 2 && <p className='absolute top-4 right-4 text-xs h-5 w-5 flex justify-center items-center rounded-full bg-violet-500/50'>{idx}</p>}
                </div>
            ))}
        </div>


    </div>
    </>
  )
}

export default SideBar