'use client';

import SummaryHoldingsResults from "./SummaryHoldingsResults";
import EditionsTable from "./EditionsTable";
import BackToTopButton from "./static/BackToTopButton";
import EditionsTableWrapper from "./wrappers/EditionsTableWrapper";

/**
 * Complete results table component. Includes the editions table and summary holdings response.
 * 
 * @author pdoddi
 */
export default function ResultsSection({ editionRows, setEditionRows , setApiCallSuccess }) {

    return (
        <div className="items-center align-middle justify-center space-y-4 pb-8">
            <BackToTopButton />
            <SummaryHoldingsResults setApiCallSuccess={(status) => setApiCallSuccess(status)} />
            <EditionsTableWrapper editionRows={editionRows} setEditionRows={setEditionRows} />
        </div>
    )
}