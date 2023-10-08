/**
 * Common JavaScript code constants.
 * 
 * @author pdoddi
 */


export const ENV_LOCAL = "http://localhost:8080";
export const ENV_PROD = "https://editiontracker.azurewebsites.net";

export const ID_DIV_MATRIX = "divMatrix";
export const MATRIX_COLUMN_INDICES = {
    COLUMN_INDEX_OF_EDITION_NUMBER: 0,
    COLUMN_INDEX_OF_YEAR: 1,
    COLUMN_INDEX_OF_FLAG_AVAILABILITY: 2
};
export const TEXT_OF_KEY_TO_CONFIRM_YEAR_UPDATE = 'Enter';
export const TEXT_LABEL_HEADER_EDITION_TYPE = "Edition";
export const TEXT_LABEL_HEADER_EDITION_NUMBER = "Number";
export const TEXT_LABEL_HEADER_EDITION_CHECKBOX = "Select All Issues";
export const TEXT_LABEL_HEADER_YEAR = "Year";
export const TEXT_LABEL_HEADER_ISSUES = "Issues";
export const TEXT_LABEL_HEADER_ALL_ISSUES = "Select All Issues";
export const TEXT_BUTTON_ISSUE_COUNT_INCREASE = "+";
export const TEXT_BUTTON_ISSUE_COUNT_DECREASE = "-";
export const TEXT_AREA_WITH_YEAR = 1;
export const TEXT_AREA_WITHOUT_YEAR = 2;
export const GENERAL_TEXT_AREA = 3;


export const FLAG_ISSUES_NOT_AVAILABLE = 0;
export const FLAG_ISSUES_ALL_AVAILABLE = 1;
export const FLAG_ISSUES_SOME_AVAILABLE = 2;

export const URL_GENERATE_SUMMARY = ENV_LOCAL + "/postData";
export const URL_GENERATE_SUMMARY_REQUEST_TYPE = "POST";

export const HTML_ELEMENT_CLASS_VALUE_MODE_ADVANCED = "modeAdvanced";
export const HTML_ELEMENT_CLASS_VALUE_MODE_BASIC = "modeBasic";
export const HTML_ELEMENT_VALUE_INCREASE = "+";
export const HTML_ELEMENT_VALUE_DECREASE = "-";
export const HTML_ELEMENT_NAME_MODE = "rbMode";

export const CSS_HTML_ELEMENT_VALUE_INCREASE = "btnIncrease";
export const CSS_HTML_ELEMENT_VALUE_DECREASE = "btnDecrease";

export const DELIMITER_SUMMARY_HOLDINGS_BETWEEN_YEARS_FROM_API = ';';
export const DELIMITER_SUMMARY_HOLDINGS_BETWEEN_YEARS_FOR_HTML = ";\n";

// Error related constants.
export const MESSAGE_ERROR_API_RESPONSE = "Unable to generate summary holdings at the moment. Please try again later.";
export const MESSAGE_INVALID_INTEGER_INPUT_SUFFIX = " is not a valid number.";
export const MESSAGE_EMPTY_FIELD = " is required.";
export const MESSAGE_YEAR_RANGE_INVALID = " can't be older than ";
export const MESSAGE_DUPLICATE_EDITION_NUMBER = " already exists. Please enter a unique value.";

export const STRING_VALUE_EMPTY = "";

// Keyboard functions related constants.
export const KEYBOARD_LETTER_TO_FOCUS_ON_TXT_EDITION_TYPE_DESCRIPTION = '1';
export const KEYBOARD_LETTER_TO_FOCUS_ON_TXT_YEAR_STARTING = '2';
export const KEYBOARD_LETTER_TO_FOCUS_ON_TXT_YEAR_ENDING = '3';
export const KEYBOARD_LETTER_TO_FOCUS_ON_TXT_EDITIONS_IN_A_YEAR = '4';
export const KEYBOARD_LETTER_TO_FOCUS_ON_TXT_VOLUME_OF_STARTING_YEAR = '5';
export const KEYBOARD_LETTER_TO_FOCUS_ON_BTN_GENERATE_CHECKBOXES = '6';
export const KEYBOARD_LETTER_TO_FOCUS_ON_BTN_GENERATE_SUMMARY_HOLDINGS = '7';
export const KEYBOARD_LETTER_TO_FOCUS_ON_BTN_RESET = '8';
export const KEYBOARD_LETTER_TO_FOCUS_ON_RB_ADVANCED = '9';