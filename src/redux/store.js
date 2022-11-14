import { configureStore } from '@reduxjs/toolkit';

//import contactsReducer from 'redux/contactSlice';
//import filterReducer from 'redux/filterSlice';
import { authReducer } from 'redux/auth/auth-slice';

export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    // filter: filterReducer,
    auth: authReducer,
  },
});
