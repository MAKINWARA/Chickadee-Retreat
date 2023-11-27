/* eslint-disable @next/next/no-img-element */
import '@/styles/HomeSlide.css'

export default function HomeSlide({ images }) {
  return (
    <div class='slider drop-shadow-lg'>
      <div className='slides'>
        {images &&
          images.map((image) => {
            return (
              <div key={image.id}>
                <img
                  className='slide__img'
                  src={image.url}
                  alt={image.name}
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}
