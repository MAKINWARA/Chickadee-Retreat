'use client'

import styles from '../styles/banner.module.css'
import { FadeInAnimation } from '../utils/animations'
import { RiDoubleQuotesL } from 'react-icons/ri'

import { useState, useEffect, useRef } from 'react'

const reviews = [
  {
    quote:
      'This house was huge and beautiful! it was very clean and just as described! I would love to stay here again in the fall.',
    guest: 'Alani, Chickadee Chalet',
    href: 'https://www.airbnb.com/rooms/49441749?check_in=2023-01-08&check_out=2023-01-13&guests=1&adults=10&s=67&unique_share_id=171e031f-3969-41c1-9017-6078e9fedcd5&source_impression_id=p3_1702070077_BJAG9lyiMw4%2BUQPT'
  },
  {
    quote:
      'The place was exactly as described. Clean and cozy. Would stay again. Everything you need for a getaway.',
    guest: 'Maria, Brookside Suite',
    href: 'https://www.airbnb.com/rooms/50456745?check_in=2023-01-04&check_out=2023-01-09&guests=1&adults=1&s=67&unique_share_id=d8398623-7f69-4291-92ce-0e9ef17ff20c&source_impression_id=p3_1694902701_GoCqIKJ4UeaR3HRg'
  },
  {
    quote:
      'This was a perfect house for our "girl\'s trip" this past weekend. We had a wonderful time taking walks, swimming at the pool, and sitting on the deck star gazing and just enjoying each other\'s company.',
    guest: 'Rebecca, Chickadee Chalet',
    href: 'https://www.airbnb.com/rooms/49441749?check_in=2023-01-08&check_out=2023-01-13&guests=1&adults=10&s=67&unique_share_id=171e031f-3969-41c1-9017-6078e9fedcd5&source_impression_id=p3_1702070077_BJAG9lyiMw4%2BUQPT'
  },
  {
    quote: 'Such a wonderful hidden gem.',
    guest: 'Yukari, Brookside Suite',
    href: 'https://www.airbnb.com/rooms/50456745?check_in=2023-01-04&check_out=2023-01-09&guests=1&adults=1&s=67&unique_share_id=d8398623-7f69-4291-92ce-0e9ef17ff20c&source_impression_id=p3_1694902701_GoCqIKJ4UeaR3HRg'
  },
  {
    quote:
      "Wonderful place for our large family to stay for the weekend for our niece's wedding. Very clean!",
    guest: 'Eugene, Chickadee Chalet',
    href: 'https://www.airbnb.com/rooms/49441749?check_in=2023-01-08&check_out=2023-01-13&guests=1&adults=10&s=67&unique_share_id=171e031f-3969-41c1-9017-6078e9fedcd5&source_impression_id=p3_1702070077_BJAG9lyiMw4%2BUQPT'
  }
]

const handleTimeout = (index, arr) => {
  if (index === arr.length - 1) {
    const newIndex = 0
    return newIndex
  } else {
    const newIndex = index + 1
    return newIndex
  }
}

export default function Banner() {
  const [quotes, setQuote] = useState(0)

  const ref = useRef(null)

  useEffect(() => {
    const interval = () =>
      setTimeout(() => {
        setQuote(handleTimeout(quotes, reviews))
      }, 10000)
    interval()
    clearTimeout(interval)
    const animation = new FadeInAnimation(ref.current)
    animation.start(2000)
    return () => {
      animation.stop()
    }
  }, [quotes])

  return (
    <div className={styles.container}>
      <div className={styles.margin}>
        <RiDoubleQuotesL
          style={{
            marginBottom: '3rem',
            fontSize: '3rem'
          }}
        />
        <div
          ref={ref}
          className={styles.quotes__container}
        >
          <p className={styles.quote}>{reviews[quotes].quote}</p>
          <p className={styles.guest}>{reviews[quotes].guest}</p>
        </div>
        <div>
          <a
            href={reviews[quotes].href}
            target='_blank'
          >
            <div className={styles.button}>Book Now</div>
          </a>
        </div>
      </div>
    </div>
  )
}
