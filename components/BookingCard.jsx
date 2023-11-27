const houses = [
  {
    name: 'Chickadee Chalet',
    location: 'Alpine Lake, West Virginia',
    description: `Cozy Family Cabin, 
  sleeps up to 12`,
    image:
      'https://static.wixstatic.com/media/d6b9d4_5cc7136e649c49958010e78d32f4103c~mv2.jpg/v1/fill/w_478,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d6b9d4_5cc7136e649c49958010e78d32f4103c~mv2.jpg',
    url: 'https://www.airbnb.com/rooms/49441749?check_in=2023-01-08&check_out=2023-01-13&guests=1&adults=10&s=67&unique_share_id=171e031f-3969-41c1-9017-6078e9fedcd5&source_impression_id=p3_1694902624_nt0Pi1gIsbulptKD'
  },
  {
    name: 'Brookside Suite',
    location: 'Silver Spring, Maryland',
    description: `Private Guest Suite,
  sleeps 1-2`,
    image:
      'https://static.wixstatic.com/media/d6b9d4_44c8c84170e24f93ac552896077c97c7~mv2.png/v1/fill/w_480,h_380,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d6b9d4_44c8c84170e24f93ac552896077c97c7~mv2.png',
    url: 'https://www.airbnb.com/rooms/50456745?check_in=2023-01-04&check_out=2023-01-09&guests=1&adults=1&s=67&unique_share_id=d8398623-7f69-4291-92ce-0e9ef17ff20c&source_impression_id=p3_1694902701_GoCqIKJ4UeaR3HRg'
  }
]

export default function BookingCard() {
  return (
    <div className='flex justify-evenly flex-wrap mb-16 w-full'>
      {houses.map((house) => {
        return (
          <article
            key={house.name}
            className='flex items-center w-[40%] bg-[var(--article-background)] text-black drop-shadow-lg'
          >
            <figure className='w-full h-full static'>
              <img
                src={house.image}
                alt={house.description}
                className='h-full w-full object-cover'
              />
            </figure>
            <aside className='p-16'>
              <div>
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
              </div>
            </aside>
          </article>
        )
      })}
    </div>
  )
}
