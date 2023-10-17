/*
Date: September 17, 2023, 07:10
Description: Incorporated old-UI as 'lite' page.
*/
export const metadata = {
    title: 'GetSummaryHoldings | Lite'
}

const Lite = () => {
    return (
        <div>
            <iframe
                src="https://jjose14-jacob-jose.github.io/getSummaryHoldings/"
                title="GetSummaryHoldings | Lite"
                width="100%"
                // iFrame is statically loaded, once loaded its height cannot be changed. So setting a large height value to accommodate upto 200 rows.
                height="5000"
            ></iframe>
        </div>
    );
};

export default Lite;
