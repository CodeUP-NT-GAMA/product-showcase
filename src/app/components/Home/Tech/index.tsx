'use client'
import Slider from 'react-slick'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { TechType } from '@/app/types/tech'
import ChiefDetailSkeleton from '../../Skeleton/ChiefDetail'

const Tech = () => {
  const [chiefDetail, setChiefDetail] = useState<TechType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setChiefDetail([
          {
            name: 'React',
            tagline: 'Builds dynamic, responsive user interfaces with ease and efficiency.',
            imgSrc: '/images/Tech/react2.png'
          },
          {
            name: 'Expo',
            tagline: 'Simplifies cross-platform development and accelerates mobile app deployment.',
            imgSrc: '/images/Tech/exp.svg'
          },
          {
            name: 'JavaScript',
            tagline: 'The backbone of interactive web and mobile experiences, trusted by millions.',
            imgSrc: '/images/Tech/javscript.png'
          },
          {
            name: 'SQLite',
            tagline: 'A lightweight and reliable local database for seamless offline functionality.',
            imgSrc: '/images/Tech/sqlite.png'
          },
          {
            name: 'SonarQube',
            tagline: 'Ensures code quality and security through continuous inspection and analysis.',
            imgSrc: '/images/Tech/sonarqube.svg'
          },
          {
            name: 'TypeScript',
            tagline: 'Adds type safety and clarity to code, reducing bugs and boosting maintainability.',
            imgSrc: '/images/Tech/ts.png'
          },
          {
            name: 'Stripe',
            tagline: 'Handle payments securely with compliant dynamic payment gateway.',
            imgSrc: '/images/Tech/stripe.png'
          },
          {
            name: 'Google Analytics',
            tagline: 'Evaluate customer behaviour, learn patterns & make educated decisions.',
            imgSrc: '/images/Tech/analytics.png'
          },
          {
            name: 'Mailgun',
            tagline: 'Reliably reach your customers for promotions, updates or alike, wherever they may be.',
            imgSrc: '/images/Tech/mailgun.png'
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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 500,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section id='tech' className='bg-primary/10'>
      <div className='container'>
        <div className='text-center'>
          <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>
            The Tech Stack
          </p>
          <Image
              src="https://sonarcloud.io/api/project_badges/quality_gate?project=CodeUP-NT-GAMA_aqua-leanyar-backend&token=48a337309ea195b4f5049f93fcb4f4e063941ef7"
              alt="SonarQube"
              width={100}
              height={100}
              className="mx-auto"
          />
          <h2>Future proof with peace of mind!</h2>
        </div>
        <Slider {...settings}>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <ChiefDetailSkeleton key={i} />
              ))
            : chiefDetail.map((items, i) => (
                <div key={i}>
                  <div className='m-3 my-10 p-10 text-center backdrop-blur-md bg-white/50 rounded-3xl'>
                    <div className='relative'>
                      <Image
                        src={items.imgSrc}
                        alt='gaby'
                        width={500}
                        height={500}
                       
                      />
                      {/*<div className='absolute top-[75%] -right-[10%]'>*/}
                      {/*  <a href={items.linkedin} target='_blank' rel='noreferrer'>*/}
                      {/*    <Image*/}
                      {/*        src={'/images/Expert/Linkedin.svg'}*/}
                      {/*        alt='linkedin'*/}
                      {/*        width={220}*/}
                      {/*        height={120}*/}
                      {/*    />*/}
                      {/*  </a>*/}
                      {/*</div>*/}
                    </div>
                    <div className='mt-16'>
                      <h3 className='text-2xl font-semibold text-black'>
                        {items.name}
                      </h3>
                      <h4 className='text-lg font-normal text-black/50 opacity-50'>
                        {items.tagline}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
        </Slider>
      </div>
    </section>
  )
}

export default Tech
