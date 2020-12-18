import React from 'react';
import { Sidebar } from './Sidebar';
import { NodeScreen } from '../notes/NodeScreen';
// import { NothingSelected } from './NothingSelected'

export const JournalScreen = () => {
    return (
        <div className="journal__main-content">

            <Sidebar/>


            <main>

                {/* <NothingSelected /> */}
                <NodeScreen/>


            </main>
    
        </div>
    )
}
