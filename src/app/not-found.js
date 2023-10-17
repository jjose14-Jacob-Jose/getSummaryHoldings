import Custom404 from "@/components/static/Custom404";
import Footer from "@/components/static/Footer";
import Header from "@/components/static/Header";

export const metadata = {
	title: 'GetSummaryHoldings | Not Found'
  }
/**
 * Server component for custom 404 page.
 * 
 * @author pdoddi
 */
export default function NotFound() {
  return (
    <div className="mx-auto min-h-screen flex flex-col max-w-[1500px]">
        <Header />
        <Custom404 />
        <Footer />
    </div>
)}