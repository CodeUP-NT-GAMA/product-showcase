'use client'

import Image from 'next/image'

const Cook = () => {
  return (
    <section className='relative' id='aboutus'>
      <div className='container px-4'>
        <div className='absolute right-0 bottom-[-45%] xl:block hidden '>
          <Image
            src='/images/Other/park2.png'
            alt='burger-image'
            width={463}
            height={622}
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5'>
          <div className='lg:col-span-6 flex lg:justify-start justify-center'>
            <Image
              src='/images/Other/park.jpeg'
              alt='nothing'
              width={636}
              height={808}
            />
          </div>
          <div className='lg:col-span-6 flex flex-col justify-center items-center lg:items-start'>
            <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase lg:text-start text-center'>
              About App
            </p>
            <h2 className='lg:text-start text-center'>
              Splash Into Adventure, Shop With Ease
            </h2>
            <p className='text-black/50 text-lg font-normal my-5 text-start'>
              Designed for water park enthusiasts, our app transforms how you explore and enjoy your day.
              From booking thrilling activities to shopping park merchandise and snacks, everything is just
              a tap away. Whether you're planning ahead or making the most of the moment, we bring the park
              to your pocket — making fun effortless and unforgettable
            </p>
          
            {/* <button className='text-xl font-medium rounded-full text-white py-3 px-8 duration-300 bg-primary w-fit border border-primary hover:bg-transparent hover:text-primary hover:cursor-pointer'>
              Learn more
            </button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cook
