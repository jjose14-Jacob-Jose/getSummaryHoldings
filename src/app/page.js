import Header from '@/components/static/Header'
import InputsWrapper from '@/components/wrappers/InputsWrapper'

/**
 * Server component for the landing page of the site. Displays the tool.
 * 
 * @author shivaram_bathini
 */
export default function LandingPage() {
	return (
		<main className='m-auto min-h-screen flex flex-col'>
            <Header />
            <InputsWrapper/>
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
