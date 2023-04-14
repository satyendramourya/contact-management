import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store';
import { deleteContact } from '../../store/features/contactSlice';
import { Link } from 'react-router-dom'

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';


interface Contact {
    id: number;
    name: string;
    title: string;
    number: string;
    email: string;
}

const ViewDetails = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    const contactId = Number(id);
    const contacts = useAppSelector((state: { contact: Contact[] }) => state);
    const currentContact = contacts.contact.find((item: Contact) => item.id === contactId);

    const delContact = () => {
        dispatch(deleteContact(contactId));
        // alert with button for going back to home
        alert('Contact Deleted');

    }

    return (
        <div className=' m-6 flex flex-col gap-3 mt-14 sm:m-10 md:m-20'>
            <AccountCircle sx={{
                color: 'action.active', mr: 1, my:
                    0.5, fontSize: "100px"
            }} />
            <TextField id="input-with-sx" label="Name" type='text' variant="standard" style={{ width: '100%' }}
                value={currentContact?.name} />

            <TextField id="input-with-sx" label="Title" type='text' variant="standard" style={{ width: '100%' }}
                value={currentContact?.title} />

            <TextField id="input-with-sx" label="Number" type='text' variant="standard" style={{ width: '100%' }} value={currentContact?.number} />

            <TextField id="input-with-sx" label="Email" type='email' variant="standard" style={{ width: '100%' }} value={currentContact?.email} />

            <div className='flex flex-row gap-4'>
                <Link to={`/editContact/${contactId}`}><div className='text-white  rounded border-[1px] max-w-[110px] bg-blue-500 text-xs border-none md:max-w-[130px] py-3 px-4 flex items-center justify-center gap-2'>
                    <EditIcon /> <span className='hidden md:inline-block text-sm'>Edit</span> </div></Link>
                <button onClick={delContact} className='text-white rounded border-[1px] max-w-[110px] bg-red-500 text-xs border-none md:max-w-[130px] py-3 px-4 flex items-center justify-center gap-2' >
                    <DeleteIcon /> <span className='hidden md:inline-block text-sm'>Delete</span> </button>
            </div>
        </div >
    )
}

export default ViewDetails