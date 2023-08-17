import Header from '@/components/static/Header'
import InputsWrapper from '@/components/wrappers/InputsWrapper'
import ResultsWrapper from '@/components/wrappers/ResultsWrapper'

/**
 * Server component for the landing page of the site. Displays the tool.
 * 
 * @author pdoddi
 */
export default function LandingPage() {
	return (
		<main className='m-auto min-h-screen flex flex-col'>
			<Header />
			<div className='m-auto'>
				<InputsWrapper />
				<ResultsWrapper />
				<script>
                	main();
           	 	</script> 
			</div>
		</main>
	)
}
