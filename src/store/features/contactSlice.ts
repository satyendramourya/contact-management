import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
    id: number;
    name: string;
    title: string;
    number: string;
    email: string;
}

const initialState: Contact[] = [];


export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      const newContact = action.payload;
      state.push(newContact);
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      // const contactId = action.payload;
      // return state.filter((contact) => contact.id !== contactId);
      const filterContacts = state.filter((contact) => contact.id !== action.payload && contact)
      state = filterContacts
      return state
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const updatedContact = action.payload;
      const index = state.findIndex((contact) => contact.id === updatedContact.id);
      if (index !== -1) {
        state[index] = updatedContact;
      }
    },
  },
});

export const { addContact, deleteContact, updateContact } = contactSlice.actions;

export default contactSlice.reducer;
