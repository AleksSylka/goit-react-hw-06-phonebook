import { createSlice, nanoid } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const contactsInitialState = [];

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContacts: {
            reducer(state, action) {
                const check = state.find(contact => contact.name.toLowerCase() === action.payload.name.toLowerCase());
                if (check) {
                    toast('This contact has already been added to your phonebook');
                    return state;
                }
                console.log(action.payload);
                state.push(action.payload);
                
            },
            prepare(obj) {
                return {
                    payload: {
                        name: obj.name,
                        phone: obj.phone,
                        id: nanoid(),
                    },
                };
            },
        },
        deleteContact: {
            reducer(state, action) {
                const index = state.findIndex(contact => contact.id === action.payload);
                state.splice(index, 1);
            }
        },
    }
});

export const { addContacts, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;