import styles from '../../styles/gallery.module.css'
import SimpleGallery from '../../components/ui/Gallery'

export const metadata = {
  title: 'Gallery | Chickadee Retreat',
  description:
    'Explore exquisite art at Chickadee Chalet Gallery. Discover unique creations that captivate, inspire, and bring beauty to your world. Visit us today'
}

const imagesThumbnails = [
  {
    id: 3,
    thumbnail:
      '/thumbnail/A glass of wine and a cheese platter on a table beside a glowing fireplace.webp',
    height: '551',
    width: '737',
    alt: 'A glass of wine and a cheese platter on a table beside a glowing fireplace'
  },
  {
    id: 2,
    thumbnail:
      '/thumbnail/A table with chairs placed in front of a window.webp',
    height: '794',
    width: '1191',
    alt: 'A table with chairs placed in front of a window'
  },
  {
    id: 1,
    thumbnail: '/thumbnail/knitted hat over a coverlet.webp',
    height: '794',
    width: '1191',
    alt: 'Knitted hat over a coverlet'
  },
  {
    id: 4,
    thumbnail: '/thumbnail/Two cups of tea on a table.webp',
    height: '660',
    width: '429',
    alt: 'Two cups of tea on a table'
  },
  {
    id: 5,
    thumbnail:
      '/thumbnail/living room with a fireplace and a comfortable couch.webp',
    height: '551',
    width: '737',
    alt: 'Living room with a fireplace and a comfortable couch'
  },
  {
    id: 6,
    thumbnail: '/thumbnail/bird on a branch by person.webp',
    height: '1005',
    width: '670',
    alt: 'Bird on a branch by person'
  },
  {
    id: 7,
    thumbnail: '/thumbnail/A kitchen with stove, oven, sink, and window.webp',
    height: '535',
    width: '802',
    alt: 'A kitchen with stove, oven, sink, and window'
  },
  {
    id: 8,
    thumbnail:
      '/thumbnail/A kitchen with a table and chairs, providing a cozy space for dining and gathering.webp',
    src: '/gallery/A kitchen with a table and chairs, providing a cozy space for dining and gathering.webp',
    height: '794',
    width: '1191',
    alt: 'A kitchen with a table and chairs, providing a cozy space for dining and gathering'
  },
  {
    id: 9,
    thumbnail:
      '/thumbnail/A cozy bedroom with a neatly made bed, adorned with a quilt, and a lamp casting a warm glow.webp',
    src: '/gallery/A cozy bedroom with a neatly made bed, adorned with a quilt, and a lamp casting a warm glow.webp',
    height: '794',
    width: '1191',
    alt: 'A cozy bedroom with a neatly made bed, adorned with a quilt, and a lamp casting a warm glow'
  },
  {
    id: 10,
    thumbnail:
      '/thumbnail/A cozy bedroom with a comfortable bed and a nightstand.webp',
    height: '794',
    width: '1062',
    alt: 'A cozy bedroom with a comfortable bed and a nightstand'
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
          <SimpleGallery images={imagesThumbnails} />
        </main>
      </section>
    </div>
  )
}
