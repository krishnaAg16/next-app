import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";
import Cart from '@/components/navbar/cart';
import CartPage from '@/components/cart';
import Link from 'next/link';

const checkout = () => {
  return (
    <section className=" body-font">
      <div className="container py-16 sm:py-20 mx-auto flex flex-wrap flex-col">
        <div className="sticky top-0 flex text-xs sm:text-base mx-auto mb-16 sm:mb-20 w-full bg-stone-100 justify-center items-center">
          <a className="sm:px-6 py-3 w-1/3 md:w-auto justify-center border-b-2 title-font font-medium inline-flex flex-col items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t">
            <BsCart3 className='text-lg sm:text-2xl' />
            Review Cart
          </a>
          <a className="sm:px-6 py-3 w-1/3 md:w-auto justify-center border-b-2 title-font font-medium inline-flex flex-col items-center leading-none border-indigo-500 bg-gray-200 tracking-wider rounded-t">
            <IoLocationOutline className='text-lg sm:text-2xl' />
            Shipping Details
          </a>
          <a className="sm:px-6 py-3 w-1/3 md:w-auto justify-center border-b-2 title-font font-medium inline-flex flex-col items-center leading-none border-gray-200 tracking-wider rounded-t">
            <MdOutlinePayments className='text-lg sm:text-2xl' />
            Payment Mode

          </a>
        </div>


        <div className="flex flex-col text-center w-full gap-10 snap-y snap-mandatory">
          {/* Review Cart */}
          <div className='mx-auto w-3/4 cart snap-start pt-11' id="cart">
            <Link href={"#detail"}>click</Link>
            <CartPage />
          </div>


          {/* Details */}
          <div className='mx-auto w-3/4 details snap-start pt-11' id="detail">
            <Link href={"#cart"}>click</Link>
            <h1 className="text-3xl m-4 text-start">Shipping Details</h1>
            <form className="w-full  m-auto mt-5 border border-black p-8">

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block text-start uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                    Email
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" />

                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label class="block text-start uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-name">
                    Full Name
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" type="text" />
                </div>
              </div>


              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-3/5 px-3">
                  <label class="block text-start uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-address">
                    Address
                  </label>
                  <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address" type="text" rows={2} />
                </div>

                <div class="w-full md:w-2/5 px-3">
                  <label class="block text-start uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                    Phone No.
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" />
                </div>
              </div>


              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block text-start uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    City
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block text-start uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    State
                  </label>
                  <div class="relative">
                    <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option>Delhi</option>
                      <option>Uttar Pradesh</option>
                      <option>Rajsathan</option>
                      <option>Madhya Pradesh</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block text-start uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                    Pincode
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" />
                </div>
              </div>

              <div class="mt-10 p-2 w-full">
                <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              </div>
            </form>

          </div>


          {/* Mode of payment */}
        </div>
      </div>
    </section>
  )
  // Shipping Details, Payment Mode, Review Cart 




}

export default checkout



