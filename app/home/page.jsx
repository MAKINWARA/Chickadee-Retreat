/* eslint-disable space-before-function-paren */
// eslint-disable-next-line no-unused-vars
import HomeSlide from '@/components/HomeSlide'

const houses = [
  {
    name: 'Chickadee Chalet',
    location: 'Alpine Lake, West Virginia',
    description: `Cozy Family Cabin, 
sleeps up to 12`,
    image: 'Photo',
    url: 'https://www.airbnb.com/rooms/49441749?check_in=2023-01-08&check_out=2023-01-13&guests=1&adults=10&s=67&unique_share_id=171e031f-3969-41c1-9017-6078e9fedcd5&source_impression_id=p3_1694902624_nt0Pi1gIsbulptKD'
  },
  {
    name: 'Brookside Suite',
    location: 'Silver Spring, Maryland',
    description: `Private Guest Suite,
sleeps 1-2`,
    image: 'Photo',
    url: 'https://www.airbnb.com/rooms/50456745?check_in=2023-01-04&check_out=2023-01-09&guests=1&adults=1&s=67&unique_share_id=d8398623-7f69-4291-92ce-0e9ef17ff20c&source_impression_id=p3_1694902701_GoCqIKJ4UeaR3HRg'
  }
]

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='py-16 text-5xl'>Welcome to Chickadee Retreat</h1>
      <HomeSlide />
      <h1 className='py-16 text-5xl'>Locations</h1>
      <div className='flex justify-evenly flex-wrap mb-16 w-full'>
        {houses.map((house) => {
          return (
            <article className='flex items-center bg-[var(--article-background)] text-black'>
              <figure className='border border-black w-72 h-full'>
                {house.image}
              </figure>
              <aside className='p-16'>
                <p className='whitespace-nowrap mb-6 text-[var(--text-location)] text-lg lato'>
                  {house.location}
                </p>
                <h4 className='text-xl whitespace-nowrap'>{house.name}</h4>
                <p className='text-[var(--text-description)] whitespace-pre text-lg'>
                  {house.description}
                </p>
                <a
                  href={house.url}
                  target='_blank'
                  rel='noreferrer'
                  className='flex justify-center items-center mt-6 w-36 h-10 bg-[var(--headers-hex)] text-white'
                >
                  Book Now
                </a>
              </aside>
            </article>
          )
        })}
      </div>
      <div className='w-screen bg-blue h-96'>
        <figure>Photo</figure>
      </div>
      <HomeSlide screen={'100vw'} />
    </div>
  )
}
