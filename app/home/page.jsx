/* eslint-disable @next/next/no-img-element */
import HomeSlide from '@/components/HomeSlide'
import { homeImages } from '@/mocks/home__images'
import BookingCard from '@/components/BookingCard'
import Banner from '@/components/Banner'

export const metadata = {
  title: 'Home | Chickadee Retreat',
  description: 'Discover tranquility at Home Chickadee Retreat. Our cozy haven offers a perfect blend of comfort and nature. Book now for a rejuvenating escape!',
  }

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='py-20 text-3xl lg:text-5xl'>
        Welcome to Chickadee Retreat
      </h1>
      <HomeSlide images={homeImages} />
      <h1 className='py-20 text-3xl lg:text-5xl'>Locations</h1>
      <BookingCard />
      <figure>
        <img
          src='https://static.wixstatic.com/media/d6b9d4_0d03b1923ad24ab781ab4d529aa68979~mv2.png/v1/fill/w_2000,h_666,al_c,q_90,enc_auto/d6b9d4_0d03b1923ad24ab781ab4d529aa68979~mv2.png'
          alt='forest'
          className='w-screen'
        />
      </figure>
      <Banner />
    </div>
  )
}
