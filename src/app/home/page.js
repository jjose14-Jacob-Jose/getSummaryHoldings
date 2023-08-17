import Header from "@/components/static/Header";
import Home from "./Home";
import Footer from "@/components/static/Footer";

//Assigns page title (browser display).
export const metadata = {
    title: 'GetSummaryHoldings | Home'
  }

 /**
 * Server component for the home page.
 * 
 * @author pdoddi
 */ 
export default function HomePage() {
    return (
        <main>
            <Header />
            <Home />
            <Footer />
       </main>
    )
}