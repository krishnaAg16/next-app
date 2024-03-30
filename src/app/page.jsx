import Image from 'next/image'
import React from 'react'


const HomePage = () => {
  return (


    <section className="text-gray-600 body-font">

      
      <div className="poster p-4 md:p-8 lg:p-12">
        <Image src={'/Carosule.png'} width={1500} height={250} alt='Poster' className='rounded-3xl'></Image>
      </div>


      <div className="slidebar">

        
      </div>


    </section>
  )
}

export default HomePage