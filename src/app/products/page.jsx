"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


const fetch_products = async () => {
  // const res = await fetch('http://localhost:3000/api/products')
  const res = await fetch('https://fakestoreapi.com/products')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}


export default async function product_page() {
  const products = await fetch_products()

  const print = () => {
    console.log(products)
  }
  return (
    <section className="text-gray-600 body-font">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className=" text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Mens Fashion</h1>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {/* <button onClick={print} className='bg-black text-white'>check</button> */}
          {products.map((product) => (
            <div key={product.id} className="rounded-md group relative p-2 shadow-xl border border-black">

              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none  lg:h-80 border-b hover:border transition border-black ">
                <Image src={product.image} height={300} width={300} alt={product.imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>

              {/* group-hover:opacity-90 */}

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/products/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">₹{product.price}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


// const products = [
//   {
//     id: 1,
//     name: 'Basic Tshirt',
//     href: '#',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//     imageAlt: "Front of men's Basic Tshirt in black.",
//     price: '₹ 3500',
//     category: 'T-Shirt',
//   },
//   {
//     id: 2,
//     name: 'Basic Tshirt',
//     href: '#',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
//     imageAlt: "Front of men's Basic Tshirt in black.",
//     price: '₹ 3500',
//     category: 'T-Shirt',
//   },
//   {
//     id: 3,
//     name: 'Basic Tshirt',
//     href: '#',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
//     imageAlt: "Front of men's Basic Tshirt in black.",
//     price: '₹ 3500',
//     category: 'T-Shirt',
//   },
//   {
//     id: 4,
//     name: 'Basic Tshirt',
//     href: '#',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
//     imageAlt: "Front of men's Basic Tshirt in black.",
//     price: '₹ 3500',
//     category: 'T-Shirt',
//   },
//  