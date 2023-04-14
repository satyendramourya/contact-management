import React from 'react'
import { Link } from 'react-router-dom'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { useAppSelector } from '../../store';

interface Contact {
    id: number;
    name: string;
    number: string;
}

const Home = (): JSX.Element => {
    const contact = useAppSelector((state: { contact: Contact[] }) => state.contact);
    return (
        <div className='flex flex-col mt-11 '>
            <div className='p-2 md:p- flex justify-end fixed right-5 top-11' >
                <Link to="/addContact">
                    <button className='flex flex-row justify-center items-center gap-1 rounded border-[1px] border-slate-400 p-2 md:px-6 md:py-3 '> <AddIcCallIcon color='primary' /> <span className='hidden md:block text-xs'>Add Contact</span> </button>
                </Link>
            </div>
            {contact.length === 0 ? (
                <div className='p-3  flex justify-center items-center min-h-[300px]'>
                    <h3 className=' font-semibold text-sm'>
                        <span className='text-blue-400 text-base'>No Contact Found</span><br /> Please Add Contact
                    </h3>
                </div>) : (
                <div className='flex flex-col gap-2 m-4 md:m-14' >
                    {contact.map((item: Contact, index: number) => {
                        return (
                            <Link to={`/viewContact/${item.id}`}>
                                <div key={item.name + item.number} className='flex flex-row font-semibold items-center justify-start gap-3' >
                                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5, fontSize: "50px" }} />
                                    <h1>{item.name}</h1>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            )
            }

        </div>
    )
}

export default Home
