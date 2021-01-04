
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NodeScreen = () => {

    const dispatch = useDispatch();

    const { active: note } = useSelector(state => state.notes);
    // console.log( note );

   const [ formValues, handleInputChange, reset ] = useForm(note);
   const { title, body, id } = formValues;

   const activeId = useRef( note.id );

   useEffect(() => {
    if (note.id !== activeId.current) {
         reset( note ); 
         activeId.current = note.id;       
    }
   }, [reset, note ]);

   useEffect(() => {
       dispatch( activeNote(formValues.id, {...formValues }) )
       
   }, [formValues, dispatch]);
   

   const handleDelete = () => {
       dispatch( startDeleting( id ) );
        // console.log(id);
   }

    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder=" some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={ title }
                    name="title"
                    onChange={ handleInputChange }

                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    value={ body }
                    name="body"
                    onChange={ handleInputChange }
                ></textarea>

                {
                    ( note.url )
                    &&
                    (
                        <div className="notes__image">
                            <img
                                src={ note.url }
                                alt="imagen"
                            />

                        </div>
                    )
                }

            </div>

            <button 
                className="btn btn-danger"
                onClick ={ handleDelete }

            >
                Delete
            </button>
            
        </div>
    )
}
