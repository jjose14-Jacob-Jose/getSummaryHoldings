'use client';

import UserInputs from "../UserInputs";

/**
 * A wrapper component for user inputs component.
 * 
 * @author pdoddi
 */
export default function InputsWrapper() {

    return (
        <div id="userInputs" className="m-auto items-center align-middle justify-center text-center">
            <div className="pb-4">
                <h1 className="font-semibold text-3xl pb-1 pl-2">Calculate Editions</h1>
                <p className="font-light pl-2 text-[#ECECEC]">Fill out the details of the title you wish to generate summary holdings for.</p>
            </div>
            <UserInputs />
        </div>
    )
}