'use client';

import Link from "next/link";

/**
 * Footer component of the site.
 * 
 * @author pdoddi
 */
export default function Footer() {
    return(
        <footer className='text-sm p-4 mx-4 mt-2 mb-2'>
            <div className='lg:flex lg:justify-between items-center'>
                <div className='flex flex-row flex-wrap items-center justify-center'>
                    <div className='text-center'>For support, reach out to us through &nbsp;
                    <Link href="mailto:support@getsummaryholdings.com" className="font-bold hover:opacity-80"
                                        rel="noopener noreferrer" target="_blank">support@getsummaryholdings.com</Link></div> 
                </div>
                <div className="lg:text-right text-center">
                    <div>Powered by <Link href="https://nextjs.org/" className="font-bold hover:opacity-80"
                                        rel="noopener noreferrer" target="_blank">NextJs</Link> &&nbsp;
                                    <Link href="https://tailwindcss.com/" className="font-bold hover:opacity-80"
                                        rel="noopener noreferrer" target="_blank">Tailwind</Link>.
                    </div>
                    <div className="text-xs mt-1 lg:mt-0">All Rights Reserved © 2023</div>    
                </div>
            </div>
        </footer>
    )
};