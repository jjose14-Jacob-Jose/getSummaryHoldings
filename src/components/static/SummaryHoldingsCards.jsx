'use client';

import { GENERAL_TEXT_AREA, TEXT_AREA_WITHOUT_YEAR, TEXT_AREA_WITH_YEAR } from "@/constants/common_js_constants";
import { useRef } from "react";

/**
 * Summary holdings card component with the ability to expand the text area vertically,
 * and edit and copy the data.
 * 
 * @author pdoddi
 */
export default function SummaryHoldingsCards({ title, holdingsData, dataWithYear }) {

    const textRef = useRef();
    const textRef2 = useRef();

    function copyTextToClipboard(textAreaName){
        if(textAreaName === TEXT_AREA_WITH_YEAR){
            navigator.clipboard.writeText(textRef2.current.value);
        } 
        if(textAreaName === TEXT_AREA_WITHOUT_YEAR || textAreaName === GENERAL_TEXT_AREA){
            navigator.clipboard.writeText(textRef.current.value);
        }
      }

    return (
        <div className="bg-[#2A2C32] rounded-lg px-4 pb-2 pt-2 text-white my-1 h-fit w-fit">
            <div className="flex justify-between">
                <p className="text-sm my-auto font-normal py-0.5">{title}</p>
                {
                    !dataWithYear && <button onClick={() => copyTextToClipboard(GENERAL_TEXT_AREA)} className="hover:bg-white/[0.1] p-1 px-2 rounded-md text-white text-xs flex gap-1 items-center align-middle"> 
                        <img
                            src="/copy-icon-white.png"
                            alt='Copy to clipboard icon'
                            className='w-[14px] h-[14px]'
                        />
                        Copy
                    </button>
                }
            </div>
            {
                dataWithYear ? 
                <div className="space-y-3 mb-2">
                    <div className="bg-white px-2 pt-1 pb-0.5 rounded-lg text-black mt-2">
                        <div className="flex justify-between">
                            <p className="text-xs mt-1 font-bold text-[#2A2C32] pl-1">Without Year</p>
                            <button onClick={() => copyTextToClipboard(TEXT_AREA_WITHOUT_YEAR)} className="hover:bg-[#2A2C32]/[0.05] p-1 px-2 rounded-md text-xs flex gap-1 items-center align-middle"> 
                                <img
                                    src="/copy-icon-black.png"
                                    alt='Copy to clipboard icon'
                                    className='w-[14px] h-[14px]'
                                />
                                Copy
                            </button>
                        </div>
                        <textarea ref={textRef} className="text-black bg-[#F1F2F6] rounded-lg mt-1 py-3 px-4 pl-4 text-sm w-[250px] min-h-[44px] h-[100px] resize-y">{holdingsData}</textarea>
                    </div>
                    <div className="bg-white px-2 pt-1 pb-0.5 rounded-lg text-black">
                        <div className="flex justify-between">
                            <p className="text-xs mt-1 font-bold text-[#2A2C32] pl-1">With Year</p>
                            <button onClick={() => copyTextToClipboard(TEXT_AREA_WITH_YEAR)} className="hover:bg-[#2A2C32]/[0.05] p-1 px-2 rounded-md text-xs flex gap-1 items-center align-middle"> 
                                <img
                                    src="/copy-icon-black.png"
                                    alt='Copy to clipboard icon'
                                    className='w-[14px] h-[14px]'
                                />
                                Copy
                            </button>
                        </div>
                        <textarea ref={textRef2} className="text-black mt-1 rounded-lg bg-[#F1F2F6] py-3 px-4 pl-4 text-sm w-[250px] min-h-[44px] h-[100px] resize-y">{dataWithYear}</textarea>
                    </div>
                </div>
                :
                <> 
                    <textarea ref={textRef} className="text-black mt-2 rounded-lg py-3 px-4 pl-4 text-sm w-[250px] min-h-[44px] h-[100px] resize-y">
                        {holdingsData}
                    </textarea>
                </>
            }
        </div>
    )
}