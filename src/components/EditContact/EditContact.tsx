// Importing required dependencies
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { updateContact } from '../../store/features/contactSlice';
import { TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useNavigate } from 'react-router-dom';

// Defining the structure of the Contact object
interface Contact {
    id: number;
    name: string;
    title: string;
    number: string;
    email: string;
}

// Defining the EditContact component
const EditContact = (): JSX.Element => {
    // Initializing the state variables and getting the dispatch function and the navigation function
    const dispatch = useAppDispatch();
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    // Getting the id of the contact to be edited from the URL params
    const { id } = useParams<{ id: string }>();
    const contactId = Number(id);

    // Getting the list of contacts from the store and finding the current contact object
    const contacts = useAppSelector((state: { contact: Contact[] }) => state);
    const currentContact = contacts.contact.find((item: Contact) => item.id === contactId);

    // Updating the state variables with the current contact data when the component mounts
    useEffect(() => {
        if (currentContact) {
            setName(currentContact.name);
            setTitle(currentContact.title);
            setNumber(currentContact.number);
            setEmail(currentContact.email);
        }
    }, [currentContact]);

    // Handling the form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Validating the form fields
        if (!name || !title || !number || !email) {
            alert("Please fill all the fields");
            return;
        }

        // Checking if the entered number already exists in the contact list
        const checkNumber = contacts.contact.find((item: Contact) => item.number === (number) && item.id !== contactId);
        if (checkNumber) {
            alert("Number already exists");
            return;
        }

        // Updating the contact object and dispatching the action to update the contact in the store
        const data = {
            id: contactId,
            name,
            title,
            number,
            email
        }
        dispatch(updateContact(data));

        // Navigating back to the home page after the contact is updated
        navigate("/");
    }

    // Rendering the EditContact component

    return (
        <div className=' m-6 mt-14 sm:m-10 md:m-20'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>

                {/* Displaying an icon using MUI icon library */}
                <AccountCircle sx={{
                    color: 'action.active', mr: 1, my:
                        0.5, fontSize: "100px"
                }} />

                {/* Creating a text field for the name */}
                <TextField id="input-with-sx" label="Name" type='text' variant="standard" style={{ width: '100%' }}
                    value={name} onChange={e => setName(e.target.value)} />

                {/* Creating a text field for the name */}
                <TextField id="input-with-sx" label="Title" type='text' variant="standard" style={{ width: '100%' }}
                    value={title} onChange={e => setTitle(e.target.value)} />

                {/* Creating a text field for the name */}
                <TextField id="input-with-sx" label="Number" type='text' variant="standard" style={{ width: '100%' }} value={number} onChange={e => setNumber(e.target.value)} />

                {/* Creating a text field for the name */}
                <TextField id="input-with-sx" label="Email" type='email' variant="standard" style={{ width: '100%' }} value={email} onChange={e => setEmail(e.target.value)} />

                <button type='submit' className='text-white rounded border-[1px] max-w-[50px] bg-blue-500 text-xs border-none md:max-w-[130px] py-3 md:px-4 flex items-center justify-center gap-2 '>
                    <TaskAltIcon /> <span className='hidden md:inline-block text-sm'>Edit </span></button>
            </form>
        </div>
    )
}

export default EditContact
