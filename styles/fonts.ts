// eslint-disable-next-line camelcase
import { Libre_Baskerville, Lato, Montserrat } from 'next/font/google'

export const lato = Lato({
    weight: ['300', '400', '700'],
    variable: '--font-lato',
    subsets: ['latin']
})

export const libre = Libre_Baskerville({
    variable: '--font-libre',
    weight: ['400', '700'],
    subsets: ['latin']
})

export const montserrat = Montserrat({
    variable: '--font-montserrat',
    weight: ['400', '700'],
    subsets: ['latin']
})
