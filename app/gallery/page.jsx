import styles from '../../styles/gallery.module.css'
import SimpleGallery from '../../components/ui/Gallery'

export const metadata = {
  title: 'Gallery | Chickadee Retreat',
  description:
    'Explore exquisite art at Chickadee Chalet Gallery. Discover unique creations that captivate, inspire, and bring beauty to your world. Visit us today'
}

const galleryImages = [
  {
    id: 3,
    src: '/thumbnail/A glass of wine and a cheese platter on a table beside a glowing fireplace.webp',
    height: '551',
    width: '737'
  },
  {
    id: 2,
    src: '/thumbnail/A table with chairs placed in front of a window.webp',
    height: '794',
    width: '1191'
  },
  {
    id: 1,
    src: '/thumbnail/knitted hat over a coverlet.webp',
    height: '794',
    width: '1191'
  },
  {
    id: 4,
    src: '/thumbnail/Two cups of tea on a table.webp',
    height: '660',
    width: '429'
  },
  {
    id: 5,
    src: '/thumbnail/living room with a fireplace and a comfortable couch.webp',
    height: '551',
    width: '737'
  },
  {
    id: 6,
    src: '/thumbnail/bird on a branch by person.webp',
    height: '794',
    width: '1191'
  },
  {
    id: 7,
    src: '/thumbnail/A kitchen with stove, oven, sink, and window.webp',
    height: '535',
    width: '802'
  },
  {
    id: 8,
    src: '/thumbnail/A kitchen with a table and chairs, providing a cozy space for dining and gathering..webp',
    height: '794',
    width: '1191'
  },
  {
    id: 9,
    src: '/thumbnail/A cozy bedroom with a neatly made bed, adorned with a quilt, and a lamp casting a warm glow..webp',
    height: '794',
    width: '1191'
  },
  {
    id: 10,
    src: '/thumbnail/A cozy bedroom with a comfortable bed and a nightstand.webp',
    height: '794',
    width: '1062'
  }
]

export default function Gallery() {
  return (
    <div className={styles.gallery__margin}>
      <section className='gallery'>
        <main>
          <a href='https://www.airbnb.com/rooms/49441749?check_in=2023-03-12&check_out=2023-03-17&guests=1&adults=1&s=67&unique_share_id=97e9bc1f-d94c-4f64-97ce-0ef120c16567&source_impression_id=p3_1695054985_eooU2x128d2zZU7B'>
            <h3 className={styles.gallery__header}>Chickadee Chalet Gallery</h3>
          </a>
          <SimpleGallery images={galleryImages} />
        </main>
      </section>
    </div>
  )
}
