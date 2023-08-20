import Home from '@/components/Home'
import BackToTopButton from '@/components/static/BackToTopButton'
import Footer from '@/components/static/Footer'
import Header from '@/components/static/Header'

/**
 * Server component for the landing page of the site. Displays the tool.
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
		// <main className='m-auto min-h-screen flex flex-col'>
		// 	<Header />
		// 	<div className='m-auto'>
		// 		<InputsWrapper />
		// 		<ResultsWrapper />
		// 		<script>
        //         	main();
        //    	 	</script> 
		// 	</div>
		// </main>
	)
}
