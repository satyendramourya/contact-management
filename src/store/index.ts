import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { contactSlice } from './features/contactSlice';


export const store = configureStore({
 reducer: {
   contact: contactSlice.reducer
  },
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState >> = useSelector