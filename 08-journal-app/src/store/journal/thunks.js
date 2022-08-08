import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";

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

export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch ) => {
        dispatch( setSaving() );

        //console.log( files );
        // await fileUpload( files[0] );
        const fileUploadPromises = [];
        for( const file of files ) {
            fileUploadPromises.push( fileUpload(file) );
        }

        const photosUrls = await Promise.all( fileUploadPromises );

        //console.log(photosUrls);
        dispatch( setPhotosToActiveNote( photosUrls ) );
    }
}

export const startDeletingNote = () =>{ 
    return async(dispatch, getState) => {
        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        //console.log({ uid, note });
        const docRef = doc( FirebaseDB, `${uid}/journal/notes/${note.id}`);

        await deleteDoc( docRef );

        dispatch( deleteNoteById(note.id));
    }
}