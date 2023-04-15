import React from 'react';
import { Link } from 'react-router-dom';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import BarChartIcon from '@mui/icons-material/BarChart';

// Define the Navbar component as a TypeScript function component that returns JSX
const Navbar = (): JSX.Element => {
    return (
        // Outer div that holds the navigation bar
        <div>
            {/* Inner div that holds the navigation links */}
            <div className='md:bg-gray-900  md:rounded-none text-white fixed md:sticky mx-auto top-0 w-[100%] md:w-80 md:h-screen z-10  bg-blue-500'>
                <ul className='flex flex-row justify-center md:flex-col h-full md:justify-start md:pt-20'>
                    {/* Link to the home page */}
                    <Link to="/">
                        {/* Navigation link item with icon and text */}
                        <li className=' rounded-full border-slate-400 p-2 my-1 md:hover:bg-blue-600 ease-in-out md:p-3 flex flex-row justify-center items-center gap-1 md:rounded'>
                            <ContactPageIcon /> {/* Material-UI icon for contact page */}
                            <span className='hidden md:inline-block text-xs'>Contact List</span> {/* Text for contact page */}
                        </li>
                    </Link>
                    {/* Link to the charts and maps page */}
                    <Link to="/chartsandmaps">
                        {/* Navigation link item with icon and text */}
                        <li className='md:hover:bg-blue-600 border-slate-400 p-2 my-1 rounded-full ease-in-out md:p-3 flex flex-row justify-center items-center gap-1 md:rounded'>
                            <BarChartIcon /> {/* Material-UI icon for charts and maps */}
                            <span className='hidden md:inline-block text-sm'>Charts And Maps</span> {/* Text for charts and maps */}
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar; // Export the Navbar component as the default export
