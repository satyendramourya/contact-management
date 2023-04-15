/**

Importing necessary libraries and interfaces
*/
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Contact {
id: number;
name: string;
title: string;
number: string;
email: string;
}

/**

Initializing the initial state of the contact list as an empty array
*/
const initialState: Contact[] = [];
/**

Creating a Redux slice for contact management
with addContact, deleteContact and updateContact reducers
*/
export const contactSlice = createSlice({
name: 'contact',
initialState,
reducers: {
addContact: (state, action: PayloadAction<Contact>) => {
// Adding new contact to the contact list
const newContact = action.payload;
state.push(newContact);
},
deleteContact: (state, action: PayloadAction<number>) => {
// Removing the contact from the contact list by id
const filterContacts = state.filter((contact) => contact.id !== action.payload && contact);
state = filterContacts;
return state;
},
updateContact: (state, action: PayloadAction<Contact>) => {
// Updating the contact information by id
const updatedContact = action.payload;
const index = state.findIndex((contact) => contact.id === updatedContact.id);
if (index !== -1) {
state[index] = updatedContact;
}
},
},
});
/**

Exporting the reducers as actions
*/
export const { addContact, deleteContact, updateContact } = contactSlice.actions;
/**

Exporting the reducer function as default
*/
export default contactSlice.reducer;