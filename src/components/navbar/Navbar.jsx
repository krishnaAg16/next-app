"use client"

import Link from 'next/link'
import React, { useRef  } from 'react'
import Image from 'next/image'
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import Cart from './cart';
import User from './user';
import { BorderClear } from '@mui/icons-material';


function Navbar() {
  return (
    <header className="text-gray-600 body-font shadow">
      <div className="Navbar relative container mx-auto flex flex-wrap flex-col md:flex-row items-center justify-around">
        <Link href='/' className=" Logo md:flex title-font font-medium items-center text-gray-900 mb-4 md:m-2 hidden ">
          <Image src="/p3.png" width={80} height={50} alt='Logo'></Image>
        </Link>


        <div className=" SearchBar flex flex-wrap items-center text-base w-2/5 md:my-0 my-5">
          <form className='flex w-full bg-white px-4 h-10 rounded border shadow-md'>
              <input type="text" id="default-search" autoComplete='off' className="focus:outline-none py-auto text-base text-gray-900 w-5/6" placeholder="Search Products, Brands & More" required/>
              <button type="submit" className="font-medium rounded-lg text-base m-auto w-1/6 flex justify-end">
                <FaSearch />
              </button>
              
          </form>
        </div>



        <div className=" links flex flex-wrap items-center text-base justify-evenly w-1/3">
          <Link href={'/products'} className="hover:text-gray-900 cursor-pointer text-lg">Products</Link>
          {/* <Link href={'/cart'} className=" hover:text-gray-900 text-xl cursor-pointer"><FaShoppingCart /></Link> */}
          <Cart />
          <User />
        </div>

      </div>
    </header >
  )
}
export default Navbar