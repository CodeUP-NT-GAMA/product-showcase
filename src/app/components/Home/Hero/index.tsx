'use client'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section id='home-section' className='bg-gray-50'>
      <div className='container xl:pt-7 pt-16'>
        <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
          <div className='lg:col-span-6'>
            <h1 className='font-semibold mb-5 text-black lg:text-start text-center sm:leading-20 leading-16'>
              Add a digital touch to your water park!
            </h1>
            <p className='text-black/55 text-lg font-normal mb-10 lg:text-start text-center'>
              Imagine if your entire water park experience—from ticketing to ride times, maps to meals—was just a tap away.
            </p>
            <div className='flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start'>
              <Link href='/#menu'>
                <button className='text-xl font-medium rounded-full text-white py-3 px-8 bg-primary hover:text-primary border border-primary hover:bg-transparent hover:cursor-pointer transition ease-in-out duration-300'>
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className='lg:col-span-6 flex justify-center relative'>
            <Image
              src='/images/hero/banner.png'
              alt='nothing'
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
