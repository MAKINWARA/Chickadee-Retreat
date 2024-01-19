'use client'

import React, { useEffect } from 'react'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import styles from '../../styles/gallery.module.css'

export default function SimpleGallery(props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#chickadee-gallery',
      children: 'a',
      pswpModule: () => import('photoswipe')
    })
    lightbox.init()

    return () => {
      lightbox.destroy()
      lightbox = null
    }
  }, [])

  return (
    <div
      id='chickadee-gallery'
      className={`${styles.gallery__grid} pswp-gallery`}
    >
      {props.images.map((image, index) => (
        <a
          href={image.src}
          data-cropped='true'
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={index}
          target='_blank'
          rel='noreferrer'
          className={styles.gallery__image__container}
        >
          <img
            className={styles.gallery__image}
            src={image.src}
            alt=''
          />
        </a>
      ))}
    </div>
  )
}

// ;<div
//   id='chickadee-gallery'
//   className={styles.gallery__grid}
// >
//   {galleryImages.map((image) => {
//     return (
//       <a
//         href={image.src}
//         key={image.id}
//         className={styles.gallery__image__container}
//       >
//         <img
//           className={styles.gallery__image}
//           src={image.src}
//           alt='gallery image'
//         />
//       </a>
//     )
//   })}
// </div>
