import Script from 'next/script'
import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

//Font of the site.
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GetSummaryHoldings',
  description: 'A free browser based solution that computes summary holdings of books.',
  author: 'Jacob Jose, Praneetha Doddi'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='font-thin'>
      <Head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-N5DCWKQ06J" />
        <Script language="JavaScript" type="text/javascript"  src="https://code.jquery.com/jquery-3.6.0.min.js"/>
        <Script language="JavaScript" type="text/javascript" src="./main.js" /> 
      </Head>
          
      <body className={inter.className}>{children}</body>

    </html>
  )
}
