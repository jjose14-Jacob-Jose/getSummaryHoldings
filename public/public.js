import { FLAG_ISSUES_ALL_AVAILABLE, FLAG_ISSUES_NOT_AVAILABLE, MESSAGE_INVALID_INTEGER_INPUT_SUFFIX, STRING_VALUE_EMPTY } from "@/constants/common_js_constants";

let editionsType, yearStarting, yearEnding, volumeYearStarting, editionsPerYear;
let arrayEditionDescription, arrayEditionNumber, arrayYear, arrayAvailabilityStatusYear, arrayIssuesInTheYear, arrayAvailabilityStatusIssuesOfEachYear;

// Function to print console outputs.
function printToConsole(variable) {
    console.log(JSON.stringify(variable));
}

// Show variable as an alert.
function printToAlert(variable) {
    printToConsole(JSON.stringify(variable));
    alert(JSON.stringify(variable));
}

// Initializes the table.
function initializeArrays() {
    arrayEditionDescription = [];
    arrayEditionNumber = [];
    arrayYear = [];
    arrayAvailabilityStatusYear = [];
    arrayAvailabilityStatusIssuesOfEachYear = [];
    arrayIssuesInTheYear = [];

    // Adding '+1' to ensure 'ending' year is also included.
    const yearRange = yearEnding - yearStarting + 1;
    
    for(let i=0; i<yearRange; i++) {
        arrayEditionDescription.push(editionsType);
        arrayEditionNumber.push(volumeYearStarting++);
        arrayYear.push(yearStarting++);
        arrayAvailabilityStatusYear.push(FLAG_ISSUES_NOT_AVAILABLE);

        // Creating an array of length 'editionsPerYear' with all elements having value 'FLAG_ISSUES_NOT_AVAILABLE' and pushing it to 'arrayAvailabilityStatusIssuesOfEachYear'.
        arrayAvailabilityStatusIssuesOfEachYear.push(Array.from({ length: editionsPerYear }, () => FLAG_ISSUES_NOT_AVAILABLE));
        arrayIssuesInTheYear.push(editionsPerYear);
    }

    let rows = [];
     
    for(let i=0; i<yearRange; i++) {
        let checkboxes = [];

        for (let indexOfEdition = 0; indexOfEdition < arrayAvailabilityStatusIssuesOfEachYear[i].length; indexOfEdition++) {

            // Create checkbox element
            const checkbox = {
                id: 'checkboxOfIssue' + indexOfEdition,
                checked: arrayAvailabilityStatusIssuesOfEachYear[i][indexOfEdition]  === FLAG_ISSUES_ALL_AVAILABLE,
                text: `${indexOfEdition + 1 }`
            }

            checkboxes.push(checkbox);
        }

        const newRow ={
            rowId: i,
            editionType: editionsType,
            editionNumber: volumeYearStarting++,
            year: yearStarting++,
            availabilityStatus: FLAG_ISSUES_NOT_AVAILABLE,
            listOfIssues: checkboxes,
            availabilityStatusIssuesOfEachYear: Array.from({ length: editionsPerYear }, () => FLAG_ISSUES_NOT_AVAILABLE),
            issuesInEachYear: editionsPerYear,
        };

        rows.push(newRow);
    }

    return rows;
}

// Builds the request object for fetching holdings summary from the backend.
export function getGenerateSummaryRequest() {
    const form = new FormData();
    form.append("arrayEditionDescription", arrayEditionNumber);
    form.append("arrayEditionNumber", arrayEditionNumber);
    form.append("arrayYear", arrayYear);
    form.append("arrayAvailabilityStatusYear", arrayAvailabilityStatusYear);
    form.append("arrayAvailabilityStatusIssuesOfEachYear", arrayAvailabilityStatusIssuesOfEachYear);
    form.append("arrayIssuesInTheYear", arrayIssuesInTheYear);
    form.append("editionsPerYear", editionsPerYear);
    return form;
}

export function validateUserInputs(){
    let generatedRows = [];
    try {
        editionsType = document.getElementById("txtTextEditionsType").value;
        yearStarting = parseInt(document.getElementById("txtNumberYearStarting").value);
        yearEnding = parseInt(document.getElementById("txtNumberYearEnding").value);
        volumeYearStarting = parseInt(document.getElementById("txtNumberVolumeStartingYear").value);
        editionsPerYear = parseInt(document.getElementById("txtNumberEditionsPerYear").value);

        let messageError = STRING_VALUE_EMPTY;
        // Check if the parsed values are NaN (Not-a-Number)
        if (isNaN(yearStarting)) {
            messageError = document.getElementById("lblTxtNumberYearStarting").innerHTML;
        }
        if (isNaN(yearEnding)) {
            messageError = document.getElementById("lblTxtNumberYearEnding").innerHTML;
        }
        if (isNaN(volumeYearStarting)) {
            messageError = document.getElementById("lblTxtNumberVolumeStartingYear").innerHTML;
        }
        if (isNaN(editionsPerYear)) {
            messageError = document.getElementById("lblTxtNumberEditionsPerYear").innerHTML;
        }

        if (messageError !== STRING_VALUE_EMPTY) {
            messageError = messageError + MESSAGE_INVALID_INTEGER_INPUT_SUFFIX;
            throw new Error (messageError);
        }

        if(editionsPerYear>0) {
            generatedRows = initializeArrays();
            console.log("Arrays initialized successfully.");
        }

    } catch (error) {
        printToAlert(error.message); //Handle error at UI end
    }

    return generatedRows;
}


    