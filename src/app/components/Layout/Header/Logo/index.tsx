import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='flex items-center gap-4'>
        <p className='text-black text-2xl font-semibold '>Team Gama @ </p>
        <Image
        src='/images/Logo/truelogo.png'
        alt='logo'
        width={100}
        height={30}
        quality={100}
      />
    </Link>
  )
}

export default Logo
