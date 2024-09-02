import { COUNT_DECREASE, COUNT_INCREASE, FLAG_ISSUES_ALL_AVAILABLE, FLAG_ISSUES_NOT_AVAILABLE, FLAG_ISSUES_SOME_AVAILABLE } from "@/constants/common_js_constants";

let editionsType, yearStarting, yearEnding, volumeYearStarting, editionsPerYear;
let arrayEditionDescription, arrayEditionNumber, arrayYear, arrayAvailabilityStatusYear, arrayIssuesInTheYear, arrayAvailabilityStatusIssuesOfEachYear;
let rows, yearRange;

// Function to print console outputs.
function printToConsole(variable) {
    console.log(JSON.stringify(variable));
}

export function setCheckBoxSelected(i, indexOfEdition, isTrue){
    if(isTrue) {
        arrayAvailabilityStatusIssuesOfEachYear[i][indexOfEdition] = FLAG_ISSUES_ALL_AVAILABLE;
    }
    else {
        arrayAvailabilityStatusIssuesOfEachYear[i][indexOfEdition] = FLAG_ISSUES_NOT_AVAILABLE;
    }
}

//Sets row level flags depending on the number of checkboxes selected in a row -
// - All the checkboxes selected - FLAG_ISSUES_ALL_AVAILABLE
// - Some of the checkboxes selected - FLAG_ISSUES_SOME_AVAILABLE
// - None of the checkboxes selected - FLAG_ISSUES_NOT_AVAILABLE
export function setCheckboxesInARowSelectedValue(i, isTrue, selectedIssuesCount){
    if(isTrue){
        arrayAvailabilityStatusYear[i] = FLAG_ISSUES_ALL_AVAILABLE;
    }
    else if(selectedIssuesCount === 0) {
        arrayAvailabilityStatusYear[i] = FLAG_ISSUES_NOT_AVAILABLE;
    } else {
        arrayAvailabilityStatusYear[i] = FLAG_ISSUES_SOME_AVAILABLE;
    }
}

// Populates/updates the rows of the table.
export function populateRows(){
    rows = [];
     
    for(let i=0; i<arrayYear.length; i++) {
        let checkboxes = [];

        for (let indexOfEdition = 0; indexOfEdition < arrayAvailabilityStatusIssuesOfEachYear[i].length; indexOfEdition++) {

            // Create checkbox element
            const checkbox = {
                id: indexOfEdition,
                checked: arrayAvailabilityStatusIssuesOfEachYear[i][indexOfEdition]  === FLAG_ISSUES_ALL_AVAILABLE,
                text: `${indexOfEdition + 1 }`
            }

            checkboxes.push(checkbox);
        }

        const newRow ={
            rowId: i,
            editionType: arrayEditionDescription[i],
            editionNumber: arrayEditionNumber[i],
            year: arrayYear[i],
            availabilityStatus: FLAG_ISSUES_NOT_AVAILABLE,
            listOfIssues: checkboxes,
            availabilityStatusIssuesOfEachYear: arrayAvailabilityStatusIssuesOfEachYear[i],
            issuesInEachYear: arrayIssuesInTheYear[i],
        };

        rows.push(newRow);
    }

    return rows;
}

// Initializes the table.
export function initializeArrays() {
    editionsType = document.getElementById("txtTextEditionsType").value;
    yearStarting = parseInt(document.getElementById("txtNumberYearStarting").value);
    yearEnding = parseInt(document.getElementById("txtNumberYearEnding").value);
    volumeYearStarting = parseInt(document.getElementById("txtNumberVolumeStartingYear").value);
    editionsPerYear = parseInt(document.getElementById("txtNumberEditionsPerYear").value);

    arrayEditionDescription = [];
    arrayEditionNumber = [];
    arrayYear = [];
    arrayAvailabilityStatusYear = [];
    arrayAvailabilityStatusIssuesOfEachYear = [];
    arrayIssuesInTheYear = [];

    // Adding '+1' to ensure 'ending' year is also included.
    yearRange = yearEnding - yearStarting + 1;
    
    for(let i=0; i<yearRange; i++) {
        arrayEditionDescription.push(editionsType);
        arrayEditionNumber.push(volumeYearStarting++);
        arrayYear.push(yearStarting++);
        arrayAvailabilityStatusYear.push(FLAG_ISSUES_NOT_AVAILABLE);

        // Creating an array of length 'editionsPerYear' with all elements having value 'FLAG_ISSUES_NOT_AVAILABLE' and pushing it to 'arrayAvailabilityStatusIssuesOfEachYear'.
        arrayAvailabilityStatusIssuesOfEachYear.push(Array.from({ length: editionsPerYear }, () => FLAG_ISSUES_NOT_AVAILABLE));
        arrayIssuesInTheYear.push(editionsPerYear);
    }
}

// Increase or Decrease the number of issues in current and subsequent rows.
export function changeIssueCountOfCurrentAndSubsequentYear(rowID, changeMode) {
    printToConsole("BEFORE: arrayAvailabilityStatusIssuesOfEachYear[editionIndexInMatrix]: " + arrayAvailabilityStatusIssuesOfEachYear[rowID]);
    for (let i = rowID; i < arrayAvailabilityStatusIssuesOfEachYear.length; i++) {
        if (changeMode === COUNT_INCREASE)  {
            arrayAvailabilityStatusIssuesOfEachYear[i].push(FLAG_ISSUES_NOT_AVAILABLE);
            arrayIssuesInTheYear[i]++;
        } else {
            arrayAvailabilityStatusIssuesOfEachYear[i].pop();
            arrayIssuesInTheYear[i]--;
        }
    }
    printToConsole("AFTER: arrayAvailabilityStatusIssuesOfEachYear[editionIndexInMatrix]: " + arrayAvailabilityStatusIssuesOfEachYear[rowID] + " " + arrayIssuesInTheYear[rowID]);
    return populateRows();
}

// Add or delete a row from the end of the matrix.
export function matrixRowAddOrDelete(mode) {
    if (mode === COUNT_INCREASE) {
        let lastRowValue = arrayGetLastElement(arrayEditionDescription);
        arrayEditionDescription.push(lastRowValue);

        lastRowValue = arrayGetLastElement(arrayEditionNumber);
        arrayEditionNumber.push(lastRowValue+1);

        lastRowValue = arrayGetLastElement(arrayYear);
        arrayYear.push(lastRowValue + 1);

        // Availability status of new row must be 'nothing found'.
        arrayAvailabilityStatusYear.push(FLAG_ISSUES_NOT_AVAILABLE);

        const issuesPublishedInLastYear = arrayGetLastElement(arrayIssuesInTheYear);
        arrayIssuesInTheYear.push(issuesPublishedInLastYear);

        const arrayAvailabilityStatusIssuesCurrentYear = [];
        // Adding 'not found' flags to matrix, the count of new flags is equal to number of issues in last year.
        for (let i = 0; i<issuesPublishedInLastYear; i++) {
            arrayAvailabilityStatusIssuesCurrentYear.push(FLAG_ISSUES_NOT_AVAILABLE);
        }
        arrayAvailabilityStatusIssuesOfEachYear.push(arrayAvailabilityStatusIssuesCurrentYear);

    } else  if (mode === COUNT_DECREASE) {
        // Removing last element of the arrays.
        arrayEditionDescription.pop();
        arrayEditionNumber.pop();
        arrayYear.pop();
        arrayAvailabilityStatusYear.pop();
        arrayIssuesInTheYear.pop();
        arrayAvailabilityStatusIssuesOfEachYear.pop();
    }

    return populateRows();
}

// Get last element of the array.
function arrayGetLastElement(array) {
    return array.slice(-1)[0];
}

// Builds the request object for fetching holdings summary from the backend.
export function getGenerateSummaryRequest() {
    const form = new FormData();
    form.append("arrayEditionDescription", arrayEditionDescription);
    form.append("arrayEditionNumber", arrayEditionNumber);
    form.append("arrayYear", arrayYear);
    form.append("arrayAvailabilityStatusYear", arrayAvailabilityStatusYear);
    form.append("arrayAvailabilityStatusIssuesOfEachYear", arrayAvailabilityStatusIssuesOfEachYear);
    form.append("arrayIssuesInTheYear", arrayIssuesInTheYear);
    form.append("editionsPerYear", editionsPerYear);
    return form;
}
