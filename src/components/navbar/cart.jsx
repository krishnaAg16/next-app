'use client'

import React, { useRef } from 'react'
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci'
import { FaShoppingCart } from 'react-icons/fa'
import { IoIosClose } from 'react-icons/io'
import { addToCart, removeFromCart } from '@/redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Cart = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { loading, cartItems, itemsPrice } = useSelector((state) => state.cart)

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }))
  }

  const toggleCart = () => {
    if (cartRef.current.classList.contains('translate-x-full')) {
      cartRef.current.classList.remove('translate-x-full')
      cartRef.current.classList.add('translate-x-0')
      bgref.current.classList.remove('hidden')
    }
    else if (!cartRef.current.classList.contains('translate-x-full')) {
      cartRef.current.classList.remove('translate-x-0')
      cartRef.current.classList.add('translate-x-full')
      bgref.current.classList.add('hidden')
    }

  }
  const cartRef = useRef()
  const bgref = useRef()
  return (
    <div suppressHydrationWarning>
      <span onClick={toggleCart} className=" hover:text-gray-900 text-xl cursor-pointer absolute top-1/2 right-5 md:static"><FaShoppingCart /></span>



      <div ref={bgref} className='w-full h-full fixed bg-transparent top-0 left-0 hidden' onClick={toggleCart}></div>
      <div ref={cartRef} className="cartBar w-full md:w-[25rem] h-full fixed top-0 right-0 overflow-y-scroll bg-neutral-300 px-7 py-12 transform transition-transform translate-x-full z-10">
        <div onClick={toggleCart} className="absolute top-2 right-2 cursor-pointer text-3xl"><IoIosClose /></div>
        <h2 className='font-bold text-xl'>Shopping Cart</h2>
        <div className='bill divide-y divide-black'>

          <div className="flex my-4 text-lg">
            <div className="item w-1/2 text-start">Item</div>
            <div className="qnty w-1/4 flex items-center justify-center">Qunatity</div>
            <div className="cost w-1/4 text-center">Price</div>
          </div>

          {
            cartItems.length === 0 ? (
              <div>
                Cart is empty. <Link className="text-teal-500" href="/">Go shopping</Link>
              </div>
            ) :
              <ol className='list-decimal font-semibold'>
                {cartItems.map((item) => (<li key={item.id}>
                  <div className="flex my-2 items-center ">
                    <div className="item w-1/2 text-start">{item.title}</div>
                    <div className="qnty w-1/4 flex items-center justify-between ">
                      {/* <CiCircleMinus className='mr-3 text-2xl' /> */}
                      <button onClick={() => { item.qty !== 1 ? addToCartHandler(item, Number(item.qty) - 1) : removeFromCartHandler(item.id) }}><CiCircleMinus className='text-2xl' /></button>
                      {item.qty}
                      {/* <CiCirclePlus className='ml-3 text-2xl' /> */}
                      <button onClick={(e) => addToCartHandler(item, Number(item.qty) + 1)}><CiCirclePlus className=' text-2xl' /></button>
                    </div>
                    <div className="cost w-1/4 text-center">₹{item.price}</div>
                  </div>
                </li>))}

              </ol>
          }

          <div className="flex my-4  text-lg font-bold">
            <div className="item w-1/2 text-start">Total Payable</div>
            <div className="qnty w-1/4 flex items-center justify-center"></div>
            <div className="cost w-1/4 text-center">₹{itemsPrice}</div>
          </div>
        </div>
        <button onClick={() => toggleCart() || router.push('/checkout')} className="checkout flex mx-auto mt-16 text-black bg-gray-400 border-0 py-2 px-8 focus:outline-none hover:bg-gray-500 rounded text-lg">Check Out</button>
      </div>
    </div>
  )
}

export default Cart