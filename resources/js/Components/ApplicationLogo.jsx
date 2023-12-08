export default function ApplicationLogo(className) {
    return (
        <div className='flex items-center mt-1'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ad-circle-filled w-10 h-10 text-yellow-500" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10c-5.43 0 -9.848 -4.327 -9.996 -9.72l-.004 -.28l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm-3.5 6a2.5 2.5 0 0 0 -2.495 2.336l-.005 .164v4.5l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-1h1v1l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4.5l-.005 -.164a2.5 2.5 0 0 0 -2.495 -2.336zm6.5 0h-1a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h1a3 3 0 0 0 3 -3v-2a3 3 0 0 0 -3 -3zm0 2a1 1 0 0 1 1 1v2a1 1 0 0 1 -.883 .993l-.117 .007v-4zm-6.5 0a.5 .5 0 0 1 .492 .41l.008 .09v1.5h-1v-1.5l.008 -.09a.5 .5 0 0 1 .492 -.41z" strokeWidth="0" fill="currentColor"></path>
            </svg>
            <p className='text-xs lg:text-lg ml-2 text-gray-300 font-bold'>Book Store</p>
        </div>
    );
}
