'use client'
import Slider from 'react-slick'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ExpertChiefType } from '@/app/types/expertchief'
import ChiefDetailSkeleton from '../../Skeleton/ChiefDetail'

const Expert = () => {
  const [chiefDetail, setChiefDetail] = useState<ExpertChiefType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setChiefDetail(
            [
              {
                profession: 'Lead Software Engineer',
                name: 'Ayesh Jayasekara',
                imgSrc: '/images/Expert/Ayesh.png',
                linkedin: 'https://www.linkedin.com/in/ayesh-jayasekara/',
              },
              {
                profession: 'Software Engineer',
                name: 'Chathura Janadara',
                imgSrc: '/images/Expert/Chathura.png',
                linkedin: 'https://www.linkedin.com/in/chathura-janadara/',
              },
              {
                profession: 'QA Engineer',
                name: 'Prajwal Niroula',
                imgSrc: '/images/Expert/Prajwal.png',
                linkedin: 'https://www.linkedin.com/in/prajwalniroula/',
              },
              {
                profession: 'Software Engineer',
                name: 'Ravindu Supun',
                imgSrc: '/images/Expert/Ravindu.png',
                linkedin: 'https://www.linkedin.com/in/ravidu-karunathilaka-4aa2001a9/',
              },
              {
                profession: 'Full Stack Developer',
                name: 'Bishnu Khanal',
                imgSrc: '/images/Expert/Bishnu.png',
                linkedin: 'https://www.linkedin.com/in/bishnu-prasad-khanal-916aa6351/',
              },
            ]
        )
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
    arrows: false,
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
    <section id='team' className='bg-primary/10'>
      <div className='container'>
        <div className='text-center'>
          <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>
            The Wizards
          </p>
          <h2>Our Tech Team: The Power Behind the Splash</h2>
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
                      <div className='absolute top-[75%] -right-[10%]'>
                        <a href={items.linkedin} target='_blank' rel='noreferrer'>
                          <Image
                              src={'/images/Expert/Linkedin.svg'}
                              alt='linkedin'
                              width={220}
                              height={120}
                          />
                        </a>
                      </div>
                    </div>
                    <div className='mt-16'>
                      <h3 className='text-2xl font-semibold text-black'>
                        {items.name}
                      </h3>
                      <h4 className='text-lg font-normal text-black/50 opacity-50'>
                        {items.profession}
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

export default Expert
