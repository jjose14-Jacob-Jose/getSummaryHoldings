import Header from '@/components/static/Header'
import ResultsWrapper from '@/components/wrappers/ResultsWrapper'

/**
 * Server component for the landing page of the site. Displays the tool.
 * 
 * @author shivaram_bathini
 */
export default function LandingPage() {
	return (
		<main className='m-auto min-h-screen flex flex-col max-w-[1500px]'>
            <Header />
            <ResultsWrapper/>
        </main>
	)
}
