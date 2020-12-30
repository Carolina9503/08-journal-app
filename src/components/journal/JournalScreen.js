import React from 'react';
import { Sidebar } from './Sidebar';
import { NodeScreen } from '../notes/NodeScreen';
import { useSelector } from 'react-redux';
import { NothingSelected } from './NothingSelected'

export const JournalScreen = () => {


    const { active } = useSelector(state => state.notes);

    return (
        <div className="journal__main-content">

            <Sidebar/>


            <main>
                {
                    ( active ) // si la nota tiene algo muesta <NodeScreen/>
                        ? (<NodeScreen/>)
                        : (<NothingSelected />)
                }
            </main>
    
        </div>
    )
}
