/* eslint-disable space-before-function-paren */
export default function Footer() {
  return (
    <footer className='bg-white flex flex-col items-center gap-6 p-12'>
      <div className='flex justify-between w-1/4 text-black'>
        <a href=''>Instagram</a>
        <a href=''>Facebook</a>
        <a href=''>TikTok</a>
        <a href=''>YouTube</a>
      </div>
      <p className='text-black'>
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
