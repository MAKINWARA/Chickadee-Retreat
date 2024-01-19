import styles from '@/styles/gallery.module.css'
import SimpleGallery from '@/components/ui/Gallery'

const galleryImages = [
  {
    id: 3,
    src: 'https://static.wixstatic.com/media/d6b9d4_27acbfc23d2149a2a52abd2b60bbdc95~mv2.jpeg/v1/fit/w_1423,h_551,q_90/d6b9d4_27acbfc23d2149a2a52abd2b60bbdc95~mv2.webp',
    height: '551',
    width: '737'
  },
  {
    id: 2,
    src: 'https://static.wixstatic.com/media/d6b9d4_c9e4ea3c8d3e43b8942963bfbc41198c~mv2.jpeg/v1/fit/w_3096,h_794,q_90/d6b9d4_c9e4ea3c8d3e43b8942963bfbc41198c~mv2.webp',
    height: '794',
    width: '1191'
  },
  {
    id: 1,
    src: 'https://static.wixstatic.com/media/d6b9d4_c2d8272e83794f7aba3e731d28c7ad32~mv2.jpeg/v1/fit/w_3096,h_794,q_90/d6b9d4_c2d8272e83794f7aba3e731d28c7ad32~mv2.webp',
    height: '794',
    width: '1191'
  },
  {
    id: 4,
    src: 'https://static.wixstatic.com/media/d6b9d4_3019323bb139456f910593c64d3f10bc~mv2.jpeg/v1/fit/w_1189,h_660,q_90/d6b9d4_3019323bb139456f910593c64d3f10bc~mv2.webp',
    height: '660',
    width: '429'
  },
  {
    id: 5,
    src: 'https://static.wixstatic.com/media/d6b9d4_92fd40796b2746d980c9d36df0f15499~mv2.jpeg/v1/fit/w_1423,h_551,q_90/d6b9d4_92fd40796b2746d980c9d36df0f15499~mv2.webp',
    height: '551',
    width: '737'
  },
  {
    id: 6,
    src: 'https://static.wixstatic.com/media/d6b9d4_fff128e6aef842bebb18f2f0820b0cbd~mv2.jpeg/v1/fit/w_3096,h_794,q_90/d6b9d4_fff128e6aef842bebb18f2f0820b0cbd~mv2.webp',
    height: '794',
    width: '1191'
  },
  {
    id: 7,
    src: 'https://static.wixstatic.com/media/d6b9d4_b132b8d16659414682f55cd859437846~mv2.jpeg/v1/fit/w_1466,h_535,q_90/d6b9d4_b132b8d16659414682f55cd859437846~mv2.webp',
    height: '535',
    width: '802'
  },
  {
    id: 8,
    src: 'https://static.wixstatic.com/media/d6b9d4_b7410857a7a54694bf768a53fbf3cb65~mv2.jpeg/v1/fit/w_3096,h_794,q_90/d6b9d4_b7410857a7a54694bf768a53fbf3cb65~mv2.webp',
    height: '794',
    width: '1191'
  },
  {
    id: 9,
    src: 'https://static.wixstatic.com/media/d6b9d4_d43fc69e81b64c04b34febaf5ba9f834~mv2.jpeg/v1/fit/w_3096,h_794,q_90/d6b9d4_d43fc69e81b64c04b34febaf5ba9f834~mv2.webp',
    height: '794',
    width: '1191'
  },
  {
    id: 10,
    src: 'https://static.wixstatic.com/media/d6b9d4_dee9345c74474b4baaec8c394a31951e~mv2.jpeg/v1/fit/w_3096,h_794,q_90/d6b9d4_dee9345c74474b4baaec8c394a31951e~mv2.webp',
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
