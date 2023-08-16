"use client";

import Script from "next/script";
import { useEffect } from "react";
import { main } from "../../public/main";
import { ENV_LOCAL, ENV_PROD } from "@/constants";

export default function Home() {
  useEffect(() => {
    main();
  }, []);

  return (
    <main className="p-12 items-center align-middle justify-center">
      <script src="https://code.jquery.com/jquery-3.6.0.min.js" />

      <div className="flex gap-2 p-2">
        <h1>
          <a href="/"> Get Summary Holdings </a>
        </h1>
        Contact us:
        <a href="mailto:support@getsummaryholdings.com">
          support@getsummaryholdings.com
        </a>
      </div>

      <div id="tableUserInput">
        <form action={`${ENV_PROD}/postData`} method="POST" id="formUserInput">
          <label id="lblTxtTextEditionsType" htmlFor="txtTextEditionsType">
            Edition types:
          </label>
          <input
            type="text"
            id="txtTextEditionsType"
            name="editionsType"
            required
            placeholder="vol/ser/no"
            value="vol"
          />

          <label id="lblTxtNumberYearStarting" htmlFor="txtNumberYearStarting">
            Start Year:
          </label>
          <input
            type="text"
            id="txtNumberYearStarting"
            name="yearStarting"
            required
            placeholder="Earliest edition in Alma"
          />
          <label
            id="lblTxtNumberYearEnding"
            htmlFor="txtNumberYearEnding"
            className="text-right"
          >
            End Year:
          </label>
          <input
            type="text"
            id="txtNumberYearEnding"
            name="yearEnding"
            required
            placeholder="Latest edition in Alma or 2020"
            value="2020"
          />

          <label
            id="lblTxtNumberEditionsPerYear"
            htmlFor="txtNumberEditionsPerYear"
          >
            Editions in a year:
          </label>
          <input
            type="text"
            id="txtNumberEditionsPerYear"
            name="editionsPerYear"
            required
            placeholder="Number of issues in a year"
            value="12"
          />
          <label
            id="lblTxtNumberVolumeStartingYear"
            htmlFor="txtNumberVolumeStartingYear"
          >
            Volume of starting year:
          </label>
          <input
            type="text"
            id="txtNumberVolumeStartingYear"
            name="volumeStartingYear"
            required
            placeholder="Volume of starting year"
            value="1"
          />

          <button
            id="btnCreateTable"
            className="p-1 px-4 bg-slate-500 rounded-md text-white"
          >
            Generate Checkboxes
          </button>

          <div colSpan="2">
            <input
              type="hidden"
              id="arrayEditionDescription"
              name="arrayEditionDescription"
            />
            <input
              type="hidden"
              id="arrayEditionNumber"
              name="arrayEditionNumber"
            />
            <input type="hidden" id="arrayYear" name="arrayYear" />
            <input
              type="hidden"
              id="arrayAvailabilityStatusYear"
              name="arrayAvailabilityStatusYear"
            />
            <input
              type="hidden"
              id="arrayAvailabilityStatusIssuesOfEachYear"
              name="arrayAvailabilityStatusIssuesOfEachYear"
            />
            <input
              type="hidden"
              id="arrayIssuesInTheYear"
              name="arrayIssuesInTheYear"
            />
            <button
              type="submit"
              id="btnGenerateSummary"
              className="p-1 px-4 bg-slate-500 rounded-md text-white"
            >
              Generate Summary Holdings
            </button>
          </div>
        </form>

        <button
          id="btnClearAll"
          className="p-1 px-4 bg-slate-500 rounded-md text-white"
        >
          Reset
        </button>

        <label htmlFor="divRBMode" className="text-right">
          Output:
        </label>

        <div id="divRBMode">
          <label>
            <input
              type="radio"
              name="rbMode"
              id="rbModeBasic"
              value="modeBasic"
              onClick="setUserMode(this.value)"
              checked
            />
            Basic
          </label>
          <label>
            <input
              type="radio"
              name="rbMode"
              id="rbModeAdvanced"
              value="modeAdvanced"
              onClick="setUserMode(this.value)"
            />
            Detailed
          </label>
        </div>
      </div>

      <div id="tableSummaryHoldingBasic" className="modeBasic">
        <label htmlFor="textAreaUnavailableEditionsWithoutYearAdvanced">
          Missing Editions
        </label>
        <label htmlFor="textAreaAvailableSummaryHoldingBasic">
          Summary Holdings (available)
        </label>

        <textarea
          id="textAreaUnavailableEditionsWithoutYearBasic"
          name="textAreaUnavailableEditionsWithoutYear"
          text="${textAreaUnavailableEditionsWithoutYear}"
        ></textarea>
        <textarea
          id="textAreaAvailableSummaryHoldingBasic"
          name="textAreaAvailableSummaryHolding"
          text="${textAreaAvailableSummaryHolding}"
        >
          {" "}
        </textarea>
      </div>

      <div id="tableSummaryHoldingAdvanced" className="modeAdvanced">
        <div colSpan="2" className="align-middle items-center">
          Missing Editions
        </div>
        <div colSpan="2" className="align-middle items-center">
          Available Editions
        </div>
        <div rowSpan="2" className="align-middle items-center">
          Summary Holdings
        </div>

        <label htmlFor="textAreaUnavailableEditionsWithoutYearAdvanced">
          Without Year
        </label>
        <label htmlFor="textAreaUnavailableEditionsWithYear">With Year</label>
        <label
          htmlFor="textAreaAvailableEditionsWithYear"
          className="modeAdvanced"
        >
          With Year
        </label>
        <label
          htmlFor="textAreaAvailableEditionsWithoutYear"
          className="modeAdvanced"
        >
          Without Year
        </label>

        <textarea
          id="textAreaUnavailableEditionsWithoutYearAdvanced"
          name="textAreaUnavailableEditionsWithoutYear"
          text="${textAreaUnavailableEditionsWithoutYear}"
        ></textarea>
        <textarea
          id="textAreaUnavailableEditionsWithYear"
          name="textAreaUnavailableEditionsWithYear"
          className="modeAdvanced"
          text="${textAreaUnavailableEditionsWithYear}"
        >
          {" "}
        </textarea>
        <textarea
          id="textAreaAvailableEditionsWithYear"
          name="textAreaAvailableEditionsWithYear"
          className="modeAdvanced"
          text="${textAreaAvailableEditionsWithYear}"
        >
          {" "}
        </textarea>
        <textarea
          id="textAreaAvailableEditionsWithoutYear"
          name="textAreaAvailableEditionsWithoutYear"
          className="modeAdvanced"
          text="${textAreaAvailableEditionsWithoutYear}"
        >
          {" "}
        </textarea>
        <textarea
          id="textAreaAvailableSummaryHoldingAdvanced"
          name="textAreaAvailableSummaryHolding"
          text="${textAreaAvailableSummaryHolding}"
        >
          {" "}
        </textarea>
      </div>
      <div id="divUserInteractionArea" className="divUserInteractionArea"></div>
      <div id="divMatrix"></div>
      {/* <Script src="./main.js" /> */}
      {/* <script>
                main();
            </script> */}
      <div id="divUserGuide">
        <hr />
        <h3>User Guide</h3>
        <ol>
          <li>
            'Generate Checkboxes to generate a new checkbox-div. This will also
            to clear existing data.
          </li>
          <li>Double-click on 'Volume' and 'Number' to change their values.</li>
          <li>
            After changing the year, press the 'Enter' or 'Return' key to update
            the year of subsequent rows.
          </li>
          <li>Check 'Check all' to select all issues.</li>
          <li>
            Press 'ALT' + digits (1 through 9) to quickly select an input
            element. E.g. "ALT + 1" to change 'Edition Type' description.{" "}
          </li>
        </ol>
      </div>
    </main>
  );
}
