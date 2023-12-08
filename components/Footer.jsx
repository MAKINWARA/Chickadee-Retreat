import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='bg-white flex flex-col items-center gap-6 p-16'>
      <div className='flex justify-between w-[15%] min-w-[200px] mb-4 text-black'>
        <a href='https://www.instagram.com/chickadeeretreat/'>
          <FaInstagram className='w-full h-8' />
        </a>
        <a href='https://www.facebook.com/profile.php?id=61550637894988'>
          <FaFacebook className='w-full h-8' />
        </a>
        <a href='https://www.tiktok.com/@chickadeeretreat'>
          <FaTiktok className='w-full h-8' />
        </a>
        <a href='https://youtube.com/@ChickadeeRetreats?si=9y_Bmdf6UXQgsibe'>
          <FaYoutube className='w-full h-8' />
        </a>
      </div>
      <p className='text-black text-sm'>
        For more information about Chickadee Retreat Holdings, LLC. contact{' '}
        <a
          className='text-green underline'
          href='mailto:chickadeeretreat@gmail.com'
        >
          chickadeeretreat@gmail.com
        </a>
      </p>
    </footer>
  )
}
