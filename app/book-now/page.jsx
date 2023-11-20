/* eslint-disable space-before-function-paren */
import { bookDescription } from '@/mocks/houseDescription'

export default function BookNow() {
  return (
    <section className='grid grid-cols-3'>
      {bookDescription.map((book) => {
        return (
          <article
            className={`flex flex-col items-center bg-${book.bacgroundColor}`}
          >
            <figure className='max-w-lg'>
              <img src={book.image} alt='House' className='static' />
            </figure>
            <div
              className={`text-center text-${book.color} h-[56%] font-light text-lg leading-7 px-20 py-14`}
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
            <button
              className={`bg-white text-${book.buttonColor} text-base w-32 h-9`}
            >
              <a href={book.href}>{book.buttonText}</a>
            </button>
          </article>
        )
      })}
    </section>
  )
}
