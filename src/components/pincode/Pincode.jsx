"use client"

import React, { useRef, useState } from 'react'
import { CiLocationOn } from "react-icons/ci";




const Pincode = () => {


    const [service, setService] = useState()
    const inputRef = useRef()

    const checkServiceability = async () => {

        const pin = inputRef.current.value

        const res = await fetch('http://localhost:3000/api/pincode')
        const pins = await res.json()

        if(pins.includes(parseInt(pin))){
            setService(true)
            console.log(service)
        }else{
            setService(false)
            console.log(service)
        }
    }

    // const onInput = (e) =>{
    //     setPin(e.target.value)
    //     console.log(pin)
    // }



  return (
    <div>
        {service==null && <div className="pinCode flex border lg:w-3/5 md:w-4/5 bg-white p-1 md:space-x-2 rounded-lg items-center  px-2">
            <CiLocationOn className='md:text-lg' />
            <input type='text' ref={inputRef} placeholder='Enter Delivery Pincode' className='text-black py-2 w-2/3 bg-white focus-visible:outline-none' />
            {/* <input type='text' onChange={onInput} placeholder='Enter Delivery Pincode' className='text-black py-2 w-2/3 bg-white focus-visible:outline-none' /> */}
            <button onClick={checkServiceability} className="justify-self-end bg-cyan-500 hover:bg-cyan-600 w-1/4 text-white tracking-widest font-light rounded-md p-1 lg:text-lg md:text-sm sm:text-xs">Check</button>
        </div>}

        {!service && service!=null && <div className="pinCode flex border lg:w-3/5 md:w-4/5 bg-white p-1 md:space-x-2 rounded-lg items-center px-2 text-red-800">
             Service Not Available
        </div> }

        {service && service!=null && <div className="pinCode flex border lg:w-3/5 md:w-4/5 bg-white p-1 md:space-x-2 rounded-lg items-center px-2 text-green-800">
            Yay!!! Delivery Available
        </div> }
    </div>
  )
}

export default Pincode