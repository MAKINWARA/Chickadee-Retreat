import { bookDescription } from '@/mocks/houseDescription'

export const metadata = {
  title: 'Book Now | Chickadee Retreat',
  description: 'Discover tranquility. Book Chickadee Retreats for an exclusive stay in the Brookside Suite. Unwind and embrace nature`s beauty. Book now for a serene escape.',
  }

export default function BookNow() {
  return (
    <section className='grid lg:grid-cols-2 gap-28 w-[85%] mx-auto my-20'>
      {bookDescription &&
        bookDescription.map((book) => {
          return (
            <article
              key={book.name}
              className={`flex flex-col items-center pb-8 bg-${book.backgroundColor} drop-shadow-lg`}
            >
              <figure className='w-full'>
                <img
                  src={book.image}
                  alt='House'
                  className='static w-full'
                />
              </figure>
              <div
                className={`text-center text-${book.color} h-full font-light text-lg leading-7 px-10 py-14`}
              >
                <h3 className={`text-${book.color} text-xl underline`}>
                  {book.name}
                </h3>
                <div className='font-lato font-light'>
                  <p className='mt-10'>{book.phrase}</p>
                  <p className='mt-10'>{book.description}</p>
                  <p className='my-10 whitespace-pre-wrap'>{book.amenities}</p>
                </div>
              </div>
              <a
                href={book.href}
                target='_blank'
              >
                <button
                  className={`bg-${book.buttonBackground} text-${book.buttonColor} m-[0_auto] text-base px-4 py-2`}
                >
                  {book.buttonText}
                </button>
              </a>
            </article>
          )
        })}
    </section>
  )
}
