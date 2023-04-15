import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store';
import { updateContact } from '../../store/features/contactSlice';

import { TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useNavigate } from 'react-router-dom';

interface Contact {
    id: number;
    name: string;
    title: string;
    number: string;
    email: string;
}

const EditContact = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();
    const contactId = Number(id);
    console.log(contactId)

    const contacts = useAppSelector((state: { contact: Contact[] }) => state);
    const currentContact = contacts.contact.find((item: Contact) => item.id === contactId);

    useEffect(() => {
        if (currentContact) {
            setName(currentContact.name);
            setTitle(currentContact.title);
            setNumber(currentContact.number);
            setEmail(currentContact.email);
        }
    }, [currentContact])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !title || !number || !email) {
            alert("Please fill all the fields");
            return;
        }

        // const checkNumber = contacts.contact.find((item: Contact) => item.number === (number));
        const checkNumber = contacts.contact.find((item: Contact) => item.number === (number) && item.id !== contactId);
        if (checkNumber) {
            alert("Number already exists");
            return;
        }

        const data = {
            id: contactId,
            name,
            title,
            number,
            email
        }

        dispatch(updateContact(data));
        navigate("/");
    }


    return (
        <div className=' m-6 mt-14 sm:m-10 md:m-20'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <AccountCircle sx={{
                    color: 'action.active', mr: 1, my:
                        0.5, fontSize: "100px"
                }} />
                <TextField id="input-with-sx" label="Name" type='text' variant="standard" style={{ width: '100%' }}
                    value={name} onChange={e => setName(e.target.value)} />

                <TextField id="input-with-sx" label="Title" type='text' variant="standard" style={{ width: '100%' }}
                    value={title} onChange={e => setTitle(e.target.value)} />

                <TextField id="input-with-sx" label="Number" type='text' variant="standard" style={{ width: '100%' }} value={number} onChange={e => setNumber(e.target.value)} />

                <TextField id="input-with-sx" label="Email" type='email' variant="standard" style={{ width: '100%' }} value={email} onChange={e => setEmail(e.target.value)} />

                <button type='submit' className='text-white rounded border-[1px] max-w-[50px] bg-blue-500 text-xs border-none md:max-w-[130px] py-3 md:px-4 flex items-center justify-center gap-2 '>
                    <TaskAltIcon /> <span className='hidden md:inline-block text-sm'>Edit </span></button>
            </form>
        </div>
    )
}

export default EditContact
