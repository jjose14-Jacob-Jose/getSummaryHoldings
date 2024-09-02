import Script from 'next/script'
import './globals.css'
import { Inter } from 'next/font/google'

//Font of the site.
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'GetSummaryHoldings',
  description: 'A free browser based solution that computes summary holdings of books.',
  author: 'Jacob Jose, Praneetha Doddi, Shivaram Bathini'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='font-thin min-h-screen'>
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-N5DCWKQ06J" />
        <Script language="JavaScript" type="text/javascript"  src="https://code.jquery.com/jquery-3.6.0.min.js"/>
        <Script language="JavaScript" type="public" src="./public.js" /> 
        <link rel='icon' sizes="32x32" href='/favicon.png'/>
      </head>
          
      <body className={inter.className}>{children}</body>

    </html>
  )
}
