'use client'
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import GalleryImagesSkeleton from '../../Skeleton/GalleryImages'
import { Icon } from '@iconify/react'
import { GalleryImagesType } from '@/app/types/galleryimage'
import { FullMenuType } from '@/app/types/fullmenu'

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImagesType[]>([])
  const [galleryImages2, setGalleryImages2] = useState<GalleryImagesType[]>([])
  const [fullMenu, setFullMenu] = useState<FullMenuType[]>([])
  const [loading, setLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => setIsMenuOpen(true)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setGalleryImages(
            [
              {
                src: '/images/Gallery/login.png',
                name: 'Easy & Secure Login'
              },
              {
                src: '/images/Gallery/home.png',
                name: 'Fancy Home Dashboard'
              },
              {
                src: '/images/Gallery/shop.png',
                name: 'Seamless Product Browsing'
              },
              {
                src: '/images/Gallery/payment.png',
                name: 'Fast & Smooth Checkout'
              }
            ]
        )
        setGalleryImages2(
          [
            {
              src: '/images/Gallery/analytics1.png',
              name: 'Insightful Analytics Dashboard'
            },
            {
              src: '/images/Gallery/stripe1.png',
              name: 'Secure Stripe Payment Integration'
            },
          ]
      )
        setFullMenu(
            [
              {
                name: 'Grilled Salmon',
                price: '$18.99',
                description: 'Served with lemon butter sauce and grilled vegetables.',
              },
              {
                name: 'Caesar Salad',
                price: '$9.99',
                description: 'Crisp romaine with parmesan, croutons, and Caesar dressing.',
              },
              {
                name: 'Margherita Pizza',
                price: '$13.49',
                description: 'Classic pizza with tomato, mozzarella, and fresh basil.',
              },
              {
                name: 'Tomato Basil Soup',
                price: '$6.99',
                description: 'Creamy tomato soup with a hint of garlic and fresh basil.',
              },
              {
                name: 'Chocolate Lava Cake',
                price: '$7.99',
                description:
                    'Warm chocolate cake with a molten center served with vanilla ice cream.',
              },
              {
                name: 'Spaghetti Carbonara',
                price: '$15.25',
                description:
                    'Spaghetti tossed with eggs, pancetta, parmesan, and black pepper.',
              },
              {
                name: 'Tiramisu',
                price: '$8.50',
                description:
                    'Layered espresso-soaked ladyfingers with mascarpone and cocoa.',
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

  return (
    <section id='menu' className='scroll-mt-20'>
      <div className='container'>
        <div className='text-center'>
          <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase'>
          Dive in...
          </p>
          <h2>Fun, fast, and<div className='text-primary italic'>refreshingly easy</div></h2>
        </div>
        <div className='my-0 px-0'>
          <Masonry
            breakpointCols={{ default: 4, '700': 2, '500': 1 }}
            className='flex gap-0'
            columnClassName='masonry-column'>
            {/* Map through images */}
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <GalleryImagesSkeleton key={i} />
                ))
              : galleryImages.map((item, index) => (
                  <div
                    key={index}
                    className='overflow-hidden rounded-1xl mb-6 relative group'>
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={300}
                      height={250}
                      className='object-cover'
                    />
                    <div className='w-full h-full absolute bg-black/40 top-full group-hover:top-0 duration-500 lg:p-12 md:p-8 p-3.5 flex flex-col items-start lg:gap-8 gap-4 justify-end'>
                      <p className='text-white lg:text-2xl text-xl'>
                        {item.name}
                      </p>
                    </div>
                  </div>
                ))}
          </Masonry>
        </div>
        <div className='my-0 px-0'>
          <Masonry
            breakpointCols={{ default: 2, '700': 2, '500': 1 }}
            className='flex gap-0'
            columnClassName='masonry-column'>
            {/* Map through images */}
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <GalleryImagesSkeleton key={i} />
                ))
              : galleryImages2.map((item, index) => (
                  <div
                    key={index}
                    className='overflow-hidden rounded-1xl mb-6 relative group'>
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={300}
                      height={250}
                      className='object-cover w-full h-full'
                    />
                    <div className='w-full h-full absolute bg-black/40 top-full group-hover:top-0 duration-500 lg:p-12 md:p-8 p-3.5 flex flex-col items-start lg:gap-8 gap-4 justify-end'>
                      <p className='text-white lg:text-2xl text-xl'>
                        {item.name}
                      </p>
                    </div>
                  </div>
                ))}
          </Masonry>
        </div>
      </div>
    </section>
  )
}

export default Gallery
