import { FLAG_ISSUES_ALL_AVAILABLE, FLAG_ISSUES_NOT_AVAILABLE, FLAG_ISSUES_SOME_AVAILABLE, MESSAGE_EMPTY_FIELD, MESSAGE_INVALID_INTEGER_INPUT_SUFFIX, MESSAGE_YEAR_RANGE_INVALID, STRING_VALUE_EMPTY } from "@/constants/common_js_constants";

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
                id: indexOfEdition,
                checked: arrayAvailabilityStatusIssuesOfEachYear[i][indexOfEdition]  === FLAG_ISSUES_ALL_AVAILABLE,
                text: `${indexOfEdition + 1 }`
            }

            checkboxes.push(checkbox);
        }

        const newRow ={
            rowId: i,
            editionType: editionsType,
            editionNumber: arrayEditionNumber[i],
            year: arrayYear[i],
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
    form.append("arrayEditionDescription", arrayEditionDescription);
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
        // Check if the parsed values are NaN (Not-a-Number) or negative/zero.
        if (isNaN(yearStarting) || yearStarting < 1) {
            messageError = document.getElementById("lblTxtNumberYearStarting").innerHTML;
        }
        if (isNaN(yearEnding) || yearEnding < 1) {
            messageError = document.getElementById("lblTxtNumberYearEnding").innerHTML;
        }
        if (isNaN(volumeYearStarting) || volumeYearStarting < 1) {
            messageError = document.getElementById("lblTxtNumberVolumeStartingYear").innerHTML;
        }
        if (isNaN(editionsPerYear) || editionsPerYear < 1) {
            messageError = document.getElementById("lblTxtNumberEditionsPerYear").innerHTML;
        }

        if (messageError !== STRING_VALUE_EMPTY) {
            messageError = messageError + MESSAGE_INVALID_INTEGER_INPUT_SUFFIX;
            throw new Error (messageError);
        }
     
        //Check for empty string
        editionsType = editionsType.trim();
        if(!editionsType){
            messageError = document.getElementById("lblTxtTextEditionsType").innerHTML + MESSAGE_EMPTY_FIELD;
            throw new Error (messageError);
        }

        //Check for the correct year range - earliest edition should be before latest edition.
        if(yearStarting > yearEnding){
            messageError = document.getElementById("lblTxtNumberYearEnding").innerHTML + 
                            MESSAGE_YEAR_RANGE_INVALID + document.getElementById("lblTxtNumberYearStarting").innerHTML + ".";
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


    