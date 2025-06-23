'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import { FeaturesType } from '@/app/types/features'
import FeaturesSkeleton from '../../Skeleton/Features'

const Features = () => {
  const [features, setFeatures] = useState<FeaturesType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFeatures([
          {
            imgSrc: '/images/Features/f1.png',
            heading: 'Know Your Customer',
            subheading:
                'Gain powerful customer insights through app usage patterns, preferences, and feedback—enabling personalized experiences and smarter business decisions.',
          },
          {
            imgSrc: '/images/Features/f2.png',
            heading: 'Promote Activities',
            subheading:
                'Highlight exciting attractions and events with real-time updates and tailored promotions that drive guest engagement and boost attendance.',
          },
          {
            imgSrc: '/images/Features/f3.png',
            heading: 'Sell Merchandise Online',
            subheading:
                'Offer guests a seamless shopping experience by selling swimwear and park essentials directly through the app—before, during, or after their visit.',
          },
          {
            imgSrc: '/images/Features/f4.png',
            heading: 'Hassle-Free Reservations',
            subheading:
                'Let visitors book tickets, cabanas, and group packages effortlessly from their phones—eliminating queues and simplifying trip planning.',
          }
        ])
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='features'>
      <div className='container'>
        <div className='text-center mb-14'>
          <p className='text-primary text-lg font-normal tracking-widest uppercase'>
            Features Built Right IN
          </p>
          <h2 className='font-semibold lg:max-w-60% mx-auto mt-3'>
            Let your customers discover more, at their leisure..
          </h2>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-28 gap-x-6 mt-24'>
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <FeaturesSkeleton key={i} />
              ))
            : features.map((items, i) => (
                <div
                  key={i}
                  className='p-8 relative rounded-3xl bg-linear-to-b from-primary/10 to-white shadow-md hover:scale-105 transition duration-300 ease-in-out hover:cursor-pointer'>
                  <div className='rounded-full flex justify-center absolute -top-[35%] sm:top-[-25%] md:top-[-40%] lg:top-[-20%] left-[0%]'>
                    <Image
                      src={items.imgSrc}
                      alt={items.imgSrc}
                      width={150}
                      height={10}
                    />
                  </div>
                  <p className='text-2xl text-black font-semibold text-center mt-16'>
                    {items.heading}
                  </p>
                  <p className='text-base font-normal text-black/50 text-center mt-2 leading-6'>
                    {items.subheading}
                  </p>
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}

export default Features
