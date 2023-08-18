import Home from '@/components/Home'
import Footer from '@/components/static/Footer'
import Header from '@/components/static/Header'

/**
 * Server component for the landing page of the site. Displays the tool.
 * 
 * @author pdoddi
 */
export default function LandingPage() {
	return (
		<main>
            <Header />
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
