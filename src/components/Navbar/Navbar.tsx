import React from 'react'
import { Link } from 'react-router-dom'
import ContactPageIcon from '@mui/icons-material/ContactPage';
import BarChartIcon from '@mui/icons-material/BarChart';

const Navbar = (): JSX.Element => {
    return (
        <div >
            <div className='md:bg-gray-900  md:rounded-none text-white fixed md:sticky mx-auto top-0 w-[100%] md:w-80 md:h-screen  bg-blue-500'>
                <ul className='flex flex-row justify-center md:flex-col h-full md:justify-start md:pt-20'>
                    <Link to="/"><li className=' rounded-full border-slate-400 p-2 my-1 md:hover:bg-blue-600 ease-in-out md:p-3 flex flex-row justify-center items-center gap-1 md:rounded'> <ContactPageIcon /> <span className='hidden md:inline-block text-xs'>Contact List</span>

                    </li></Link>
                    <Link to="/chartsandmaps"><li className='md:hover:bg-blue-600 border-slate-400 p-2 my-1 rounded-full ease-in-out md:p-3 flex flex-row justify-center items-center gap-1 md:rounded'> <BarChartIcon />
                        <span className='hidden md:inline-block text-sm'>Charts And Maps</span>
                    </li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar