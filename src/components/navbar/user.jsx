import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Link from 'next/link'
import React, { useRef } from 'react'
import { Button } from 'reactstrap'
import { CgProfile } from "react-icons/cg";


const User = () => {
  const { user, isLoading } = useUser();


  const toggleProfile = () => {
    if (profileRef.current.classList.contains('translate-x-96')) {
      profileRef.current.classList.remove('translate-x-96')
      profileRef.current.classList.add('translate-x-0')
    }
    else if (!profileRef.current.classList.contains('translate-x-96')) {
      profileRef.current.classList.remove('translate-x-0')
      profileRef.current.classList.add('translate-x-96')
    }

  }


  const profileRef = useRef()
  if (isLoading) return <div> </div>;
  return (
    <div className='flex items-center'>
      {user === undefined &&
        <Link href="/api/auth/login" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-xl text-base">Login</Link>
      }
      {user &&
        <Button onClick={toggleProfile} className="inline-flex cursor-pointer items-center  border-0 py-1 px-3 focus:outline-none  rounded-xl text-xl md:text-3xl "><CgProfile /></Button>
      }

      <div ref={profileRef} className='Profile absolute right-0 top-full z-20 transform translate-x-96'>
        {user && (

          <div className="flex flex-col bg-gray-100 border-2 rounded-md py-6 px-4">
            <div className="">
              <img
                src={user.picture}
                alt="Profile"
                className='mx-auto rounded-full'
              />
            </div>
            <div className="flex flex-col mt-4 space-y-2">
              <h3 className="text-center font-medium text-xl">{user.name}</h3>
              <p className="text-center">{user.email}</p>

              <span className='flex justify-center'>
                <Link href="/api/auth/logout" className='border border-black rounded-md p-2 m-3'>Logout</Link>
              </span>

            </div>
          </div>
        )}
        {/* <Highlight>{JSON.stringify(user, null, 2)}</Highlight> */}
      </div>
    </div>
  )
}

export default User