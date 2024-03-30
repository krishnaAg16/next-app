import Image from 'next/image'
import React from 'react'

const footer = () => {
    return (
        <footer className="text-gray-600 body-font bg-neutral-200">

            <div className="container px-4 py-12 mx-auto flex md:flex-row items-center flex-col justify-items-center justify-around">
                    <div className="pt-4 px-5 text-center order-1">
                        <h2 className="title-font font-medium text-gray-900 tracking-wide text-base mb-3">Contact Us</h2>
                        <nav className="list-none ">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">+91-8524678994</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">apnabazaar@gmail.com</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">apnabazaar_twitter</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">apnabazaar_instagram</a>
                            </li>
                        </nav>
                    </div>
                    <div className="text-center md:order-2 order-4">
                        <div className="flex items-center justify-center text-black">
                            <Image src={'/p4.png'} alt='Logo2' width={400} height={100}></Image>
                        </div>
                        <p className="mt-1 md:mt-3 text-sm text-gray-500">Rights for 2023-24 are Reserved.</p>
                        <p className="mt-2 text-md text-gray-500">H.O. - Block-3 Opp. Comp street,New Delhi,Delhi-20927</p>
                    </div>
                    <div className="pt-4 px-5 text-center order-3">
                        <h2 className="title-font font-medium text-gray-900 tracking-wide text-base mb-3">Need Help?</h2>
                        <nav className="list-none">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Return Product</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Other Query</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Report Seller</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Become Seller</a>
                            </li>
                        </nav>
                    </div>     
                </div>            
        </footer>
    )
}
export default footer
                {/* <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"> */}