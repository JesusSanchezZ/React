import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./journalSlice";
import { loadNotes } from "../../helpers";

export const startNewNote = () => {
    return async( dispatch, getState ) => {
        //console.log(getState());
        dispatch( savingNewNote() );

        const { uid } = getState().auth;

        // para grabar en firebase necesitamos el uid del usuario
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB,`${uid}/journal/notes` ));
        const setDocResp = await setDoc( newDoc, newNote );

        newNote.id = newDoc.id;

        // dispatch
        dispatch( addNewEmptyNote( newNote ));
        dispatch( setActiveNote( newNote ));
        // dispatch{ newNote }
        // dispatch{ activarNota }
    }
}

export const startLoadingNotes = () =>{
    return async(dispatch, getState) => {   
        const { uid } = getState().auth;
        if( !uid ) throw new Error('El UID del usuario no existe...');

        // console.log(uid);
        const loadedNotes = await loadNotes( uid );

        dispatch(setNotes(loadedNotes));
    }
}

export const startSaveNote = () =>{
    return async (dispatch, getState) =>{
        dispatch( setSaving() )
        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;                 // eliminamos la propiedad del objeto

        // console.log(noteToFireStore);
        const docRef = doc( FirebaseDB, `${uid}/journal/notes/${note.id}`);            // referencia al documento 
        await setDoc( docRef, noteToFireStore, { merge: true });                       // almacena los datos en la bd, el merge evita que los campos no actualizados se eliminen

        dispatch( updateNote(note));
    }
}