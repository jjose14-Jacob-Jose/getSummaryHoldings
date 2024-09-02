import Home from '@/components/Home'
import BackToTopButton from '@/components/static/BackToTopButton'
import Footer from '@/components/static/Footer'
import Header from '@/components/static/Header'

export const metadata = {
	title: 'GetSummaryHoldings | About'
  }
/**
 * Server component for the Home page of the site. Displays the details about the application.
 * 
 * @author pdoddi
 */
export default function LandingPage() {
	return (
		<main className='max-w-[1500px] m-auto'>
            <Header />
			<BackToTopButton />
            <Home />
			<Footer />
        </main>
	)
}
