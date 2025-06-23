'use client'

import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Logo from '../Header/Logo'
import { FooterLinkType } from '@/app/types/footerlink'
import Image from "next/image";

const Footer: FC = () => {
  const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        SetFooterlink(
            [
              {
                section: 'Company',
                links: [
                  { label: 'Home', href: '/' },
                  { label: 'About Us', href: '/#aboutus' },
                  { label: 'Menu', href: '/#menu' },
                  { label: 'Tech', href: '/#reserve' },
                ],
              },
              {
                section: 'Support',
                links: [
                  { label: 'TrueBlue Connect', href: 'https://trueblueconnect.com' },
                  { label: 'True Blue IT', href: 'https://trueblueit.com.au' },
                  { label: 'Talk to us', href: 'https://trueblueit.com.au/contact' },
                ],
              },
            ]
        )
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <footer className='pt-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-6 lg:gap-20 md:gap-24 sm:gap-12 gap-12 pb-10'>
          <div className='col-span-2'>
            <Logo />
            <p className='text-sm font-medium text-grey my-5 max-w-70%'>
              Get in touch for more updates of our amazing work!
            </p>
            <div className='flex gap-6 items-center'>
              <Link
                href='https://www.facebook.com/trueblueits'
                className='group bg-white hover:bg-primary rounded-full shadow-xl p-3'>
                <Icon
                  icon='fa6-brands:facebook-f'
                  width='16'
                  height='16'
                  className=' group-hover:text-white text-black'
                />
              </Link>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='flex gap-20'>
              {footerlink.map((product, i) => (
                <div key={i} className='group relative col-span-2'>
                  <p className='text-black text-xl font-semibold mb-9'>
                    {product.section}
                  </p>
                  <ul>
                    {product.links.map((item, i) => (
                      <li key={i} className='mb-3'>
                        <Link
                          href={item.href}
                          className='text-black/60 hover:text-black text-base font-normal mb-6'>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className='col-span-2 sm:col-span-6 md:col-span-2'>
            <div className='flex flex-col gap-5'>
              <div className='flex'>
                <Icon
                  icon='solar:point-on-map-perspective-bold'
                  className='text-primary text-3xl lg:text-2xl inline-block me-2'
                />
                <p className='text-black text-base'>
                  Darwin Innovation Hub
                  Level 1, 48-50 Smith Street
                  Mall, Darwin City
                </p>
              </div>
              <Link href='tel:+1(909) 235-9814'>
                <div className='flex'>
                  <Icon
                    icon='solar:phone-bold'
                    className='text-primary text-3xl lg:text-2xl inline-block me-2'
                  />
                  <p className='text-black/60 hover:text-black text-base'>
                    +61 (08) 8943 0602
                  </p>
                </div>
              </Link>
              <Link href='/'>
                <div className='flex'>
                  <Icon
                    icon='solar:mailbox-bold'
                    className='text-primary text-3xl lg:text-2xl inline-block me-2'
                  />
                  <p className='text-black/60 hover:text-black text-base'>
                    info@trueblueit.com.au
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='border-t border-grey/15 py-5 flex flex-col sm:flex-row justify-between sm:items-center gap-5'>
          <p className='text-sm text-black/70'>
            @2025 - Template By{' '}
            <Link
              href='https://getnextjstemplates.com/'
              className='hover:text-primary hover:underline'>
              GetNextjsTemplates
            </Link>
          </p>

          <div className=''>
            Powered by{' '}
            <Link
              href='https://trueblueit.com.au'
              className='text-sm text-black/70 px-5 border-r border-grey/15 hover:text-primary hover:underline'>
              True Blue IT
            </Link>
          </div>
          <Image src={'https://sonarcloud.io/images/project_badges/sonarcloud-light.svg'} alt={'SonarQube'} width={200} height={200} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
