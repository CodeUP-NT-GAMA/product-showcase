'use client'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const Newsletter = () => {
  return (
    <section id='source' className='relative overflow-hidden md:py-20'>
      <div className='container'>
        <div className='bg-primary rounded-Newsletter grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8'>
          <div className='md:col-span-7'>
            <div className='m-5 sm:m-10 lg:ml-32 lg:mt-20 lg:mb-20'>
              <p className='text-lg font-normal text-white mb-3 tracking-widest'>
                The Source{' '}
              </p>
              <h2 className='text-white mb-8'>
                Want to know more? <br /> It's public!
              </h2>

              <div>
                <div className='relative text-white focus-within:text-white flex flex-row-reverse shadow-fi rounded-full'>

                  <div className='absolute inset-y-0 right-0 flex items-center pr-2'>
                    <Icon
                        icon='tabler:arrow-narrow-right'
                        width='35'
                        height='35'
                        className='text-white '
                    />
                    <a
                        href='https://github.com/CodeUP-NT-GAMA'
                      target='_blank'
                      className='p-6 bg-gray-900 hover:scale-110 duration-300 rounded-full hover:cursor-pointer'>
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='md:col-span-5 relative hidden md:block'>
            <div>
              <Image
                src={'/images/Newsletter/programer.png'}
                alt='soup-image'
                width={526}
                height={502}
                className='-mt-24'
              />
            </div>
            <div className='absolute top-[80%] left-[25%]'>
              <Image
                src={'/images/Newsletter/dolphin.png'}
                alt='onion-image'
                width={350}
                height={150}
              />
            </div>
            <div className='absolute top-[30%] right-[-30%]'>
              <Image
                src={'/images/Newsletter/penguin.png'}
                alt='lettuce-image'
                width={190}
                height={80}
              />
            </div>
            <div className='absolute bottom-[10%] left-[0%]'>
              <Image
                src={'/images/Newsletter/robot.webp'}
                alt='yellow-image'
                width={109}
                height={109}
              />
            </div>
            <div className='absolute bottom-[20%] right-[20%]'>
              <Image
                src={'/images/Newsletter/blue.svg'}
                alt='blue-image'
                width={25}
                height={25}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
