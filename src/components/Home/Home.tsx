// Import necessary dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useAppSelector } from '../../store';

// Define a TypeScript interface for a Contact object
interface Contact {
    id: number;
    name: string;
    number: string;
}

// Define the Home component
const Home = (): JSX.Element => {
    // Use the useAppSelector hook to get the contact state from the store
    const contact = useAppSelector((state: { contact: Contact[] }) => state.contact);

    return (
        // Render the component
        <div className='flex flex-col mt-11 '>
            {/* Add Contact button */}
            <div className='p-2 md:p- flex justify-end fixed right-5 top-11' >
                <Link to="/addContact">
                    <button className='flex flex-row justify-center items-center gap-1 rounded border-[1px] border-slate-400 p-2 md:px-6 md:py-3 '> <AddIcCallIcon color='primary' /> <span className='hidden md:block text-xs'>Add Contact</span> </button>
                </Link>
            </div>

            {/* If there are no contacts, display a message */}
            {contact.length === 0 ? (
                <div className='p-3  flex justify-center items-center min-h-[300px]'>
                    <h3 className=' font-semibold text-sm'>
                        <span className='text-blue-400 text-base'>No Contact Found</span><br /> Please Add Contact
                    </h3>
                </div>
            ) : (
                // Otherwise, display the list of contacts
                <div className='flex flex-col gap-2 m-4 md:m-14' >
                    {/* Map over the contact array and display each contact */}
                    {contact.map((item: Contact, index: number) => {
                        return (
                            <Link key={item.id} to={`/viewContact/${item.id}`}>
                                <div className='flex flex-row font-semibold items-center justify-start gap-3' >
                                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5, fontSize: "50px" }} />
                                    <h1>{item.name}</h1>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Home
