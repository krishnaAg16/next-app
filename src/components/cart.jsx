'use client'

import { addToCart, removeFromCart } from '@/redux/slices/cartSlice'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'

export default function CartPage() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { loading, cartItems, itemsPrice } = useSelector((state) => state.cart)

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }))
  }

  return (
    <div>
      {
        // loading ? (
        // <div>Loading...</div>
        // ) : 
        cartItems.length === 0
          ? (
            <div>Cart is empty. <Link href="/">Go shopping</Link></div>
          ) : (
            <>
            <h1 className="text-3xl m-4 text-start">Review Cart ({cartItems.length})</h1>
            <div className="grid md:grid-cols-4 md:gap-5 h-fit border border-black ">
              <div className="overflow-x-auto md:col-span-3">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th className="p-5 text-left">Product</th>
                      <th className="p-5 text-right">Quantity</th>
                      <th className="p-5 text-right">Price</th>
                      <th className="p-5">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td>
                          <Link
                            href={`/product/${item.id}`}
                            className="flex items-center"
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={50}
                              height={50}
                              className="p-1"
                            ></Image>
                            {item.title}
                          </Link>
                        </td>
                        <td className="p-5 text-right qty flex items-center justify-end space-x-3">

                          <button onClick={() => { item.qty !== 1 ? addToCartHandler(item, Number(item.qty) - 1) : removeFromCartHandler(item.id) }}><CiCircleMinus className='mr-3 text-2xl' /></button>
                          {item.qty}
                          <button onClick={(e) => addToCartHandler(item, Number(item.qty) + 1)}><CiCirclePlus className='mr-3 text-2xl' /></button>
                        </td>
                        <td className="p-5 text-right">₹{item.price}</td>
                        <td className="p-5 text-center">
                          <button
                            className="default-button"
                            onClick={() => removeFromCartHandler(item.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="card flex p-5 mt-3">
                <ul>
                  <li>
                    <div className="pb-3 text-xl">
                      Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)}) : ₹
                      {itemsPrice}
                    </div>
                  </li>
                  <button className="mt-6 w-fit primary-button px-2 border border-black">
                    Next
                  </button>
                </ul>
              </div>

            </div>
            </>
          )}
    </div>
  )
}
