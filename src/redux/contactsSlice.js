import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: ''
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload)
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload)
    },
    addFilter: (state, action) => {
      state.filter = action.payload
    },
  },
})

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts'],
  };

export const { addContact, removeContact, addFilter } = contactsSlice.actions

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);


export const getContacts = (state) => state.contacts.contacts

export const getFilter = (state) => state.contacts.filter

export default contactsSlice.reducer
