import { createSlice } from '@reduxjs/toolkit';
import { startAfter } from 'firebase/firestore/lite';

export const journalSlice = createSlice({
   name: 'journal',
   initialState: {
       isSaving: false,
       messageSaved: '',
       notes: [],
       active: null,
    //    active: {
    //     id: 'ABC123',
    //     title: '',
    //     body: '',
    //     date: 1234457,
    //     imageUrls: [],      // https://foto1.jpg ....
    //    }
   },
   reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },
       addNewEmptyNote: (state, action ) => {
        state.notes.push( action.payload );
        state.isSaving = false;
       },
       setActiveNote: ( state, action ) => {
        state.active = action.payload;
        state.messageSaved = '';
       },
       setNotes: ( state, action ) => {
        state.notes = action.payload;
       },
       setSaving: (state) => {
        state.isSaving = true;
        // TODO: mensaje de error
        state.messageSaved = '';
       },
       updateNote: ( state, action ) => {
        state.isSaving = false;
        state.notes = state.notes.map(note => {
            if( note.id === action.payload.id )
                return action.payload;

            return note;
        });

        // TODO: Mostrar nota de actualización
        state.messageSaved = `${ action.payload.title }, actualizada correctamente`;
       },
       setPhotosToActiveNote: ( state, action ) => {
        state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
        state.isSaving = false;
       },
       clearNotesLogout: (state) => {
        state.isSaving = false;
        state.messageSaved = '';
        state.notes = [];
        state.active = null;
       },
       deleteNoteById: (state, action) => {
        // state.notes = state.notes.map( note => {
        //     if( note.id === action.payload.id ) return;
        //     return note;
        // });
        state.active = null;
        state.notes = state.notes.filter( x => x.id !== action.payload.id );
       },
   }
})

export const {
    addNewEmptyNote,
    clearNotesLogout,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    updateNote,
 } = journalSlice.actions