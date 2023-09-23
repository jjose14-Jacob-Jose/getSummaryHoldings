'use client';

/**
 * Summary holdings card component with the ability to edit and copy the data.
 * 
 * @author pdoddi
 */
export default function SummaryHoldingsCards({ title, holdingsData, dataWithYear }) {
    return (
        <div className="bg-[#2A2C32] rounded-lg px-4 py-3 text-white my-1 h-fit w-fit">
            <p className="text-sm">{title}</p>
            {
                dataWithYear ? 
                <div className="space-y-3">
                    <div className="bg-white px-2 py-1 rounded-lg text-black mt-2">
                        <p className="text-xs mt-1 font-medium text-[#70685C]">Without Year</p>
                        <textarea className="text-black bg-[#F2F2F2] rounded-lg mt-1 py-3 px-4 pl-4 text-sm w-[250px] min-h-[44px]">{holdingsData}</textarea>
                    </div>
                    <div className="bg-white px-2 py-1 rounded-lg text-black">
                        <p className="text-xs mt-1 font-medium text-[#70685C]">With Year</p>
                        <textarea className="text-black mt-1 rounded-lg bg-[#F2F2F2] py-3 px-4 pl-4 text-sm w-[250px] min-h-[44px]">{dataWithYear}</textarea>
                    </div>
                </div>
                :
                <textarea className="text-black mt-2 rounded-lg py-3 px-4 pl-4 text-sm w-[250px] min-h-[44px]">{holdingsData}</textarea>
            }
        </div>
    )
}