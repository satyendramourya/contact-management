import React, { useState } from 'react'
import { TextField } from '@mui/material';

import AccountCircle from '@mui/icons-material/AccountCircle';
import { addContact } from '../../store/features/contactSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import { useNavigate } from 'react-router-dom';


interface Contact {
    id: number;
    name: string;
    number: string;
}

const AddContact = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();


    const contact = useAppSelector((state: { contact: Contact[] }) => state);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !title || !number || !email) {
            alert("Please fill all the fields");
            return;
        }

        const checkNumber = contact.contact.find((item: Contact) => item.number === (number));
        if (checkNumber) {
            alert("Number already exists");
            return;
        }

        const data = {
            id: contact.contact.length + 1,
            name,
            title,
            number,
            email
        }

        dispatch(addContact(data));
        navigate("/");
    }

    return (
        <div className=' m-6  sm:m-10 md:m-20'>
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

                <button type='submit' className='text-white rounded border-[1px] max-w-[110px] bg-blue-500 text-xs border-none md:max-w-[130px] py-3'>Add Contact</button>
            </form>
        </div>

    )
}

export default AddContact