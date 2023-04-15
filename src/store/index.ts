// Importing necessary functions and modules from the 'reduxjs/toolkit' and 'react-redux' packages
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// Importing the contactSlice reducer from the './features/contactSlice' file
import { contactSlice } from './features/contactSlice';

// Creating a Redux store with the 'configureStore' function and setting the 'contactSlice' reducer as the root reducer
export const store = configureStore({
reducer: {
contact: contactSlice.reducer
},
});

// Creating a custom hook to be used for dispatching actions to the Redux store
export const useAppDispatch: () => typeof store.dispatch = useDispatch;

// Creating a custom hook to be used for accessing the Redux store state in React components
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;