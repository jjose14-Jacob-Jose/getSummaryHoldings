'use client';

/**
 * Summary holdings results component.
 * 
 * @author pdoddi
 */
export default function SummaryHoldings() {
    return(<>
            <div id="tableSummaryHoldingBasic" className="modeBasic">
                <label htmlFor ="textAreaUnavailableEditionsWithoutYearAdvanced">Missing Editions</label>
                <label htmlFor ="textAreaAvailableSummaryHoldingBasic">Summary Holdings (available)</label>
            
                <textarea id="textAreaUnavailableEditionsWithoutYearBasic" name="textAreaUnavailableEditionsWithoutYear" text="${textAreaUnavailableEditionsWithoutYear}"></textarea>
                <textarea id="textAreaAvailableSummaryHoldingBasic" name="textAreaAvailableSummaryHolding" text="${textAreaAvailableSummaryHolding}"> </textarea>
            </div>

            <div id="tableSummaryHoldingAdvanced" className="modeAdvanced" >
             
                <div colSpan="2" className="align-middle items-center">
                    Missing Editions
                </div>
                <div colSpan="2" className="align-middle items-center" >
                    Available Editions
                </div>
                <div rowSpan="2" className="align-middle items-center" >
                    Standard Summary Holdings
                </div>
                
                <label htmlFor ="textAreaUnavailableEditionsWithoutYearAdvanced">Without Year</label>
                <label htmlFor ="textAreaUnavailableEditionsWithYear">With Year</label>
                <label htmlFor ="textAreaAvailableEditionsWithYear" className="modeAdvanced" >With Year</label>
                <label htmlFor ="textAreaAvailableEditionsWithoutYear" className="modeAdvanced" >Without Year</label>
            
                <textarea id="textAreaUnavailableEditionsWithoutYearAdvanced" name="textAreaUnavailableEditionsWithoutYear" text="${textAreaUnavailableEditionsWithoutYear}"></textarea>
                <textarea id="textAreaUnavailableEditionsWithYear" name="textAreaUnavailableEditionsWithYear" className="modeAdvanced"  text="${textAreaUnavailableEditionsWithYear}"> </textarea>
                <textarea id="textAreaAvailableEditionsWithYear" name="textAreaAvailableEditionsWithYear" className="modeAdvanced" text="${textAreaAvailableEditionsWithYear}"> </textarea>
                <textarea id="textAreaAvailableEditionsWithoutYear" name="textAreaAvailableEditionsWithoutYear" className="modeAdvanced" text="${textAreaAvailableEditionsWithoutYear}"> </textarea>
                <textarea id="textAreaAvailableSummaryHoldingAdvanced" name="textAreaAvailableSummaryHolding" text="${textAreaAvailableSummaryHolding}"> </textarea>
        
            </div>
            <div id="divUserInteractionArea" className="divUserInteractionArea"></div>
    </>)
};