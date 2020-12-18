
import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NodeScreen = () => {
    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder=" some awesome title"
                    className="notes__title-input"
                    autoComplete="off"

                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                ></textarea>

                <div className="notes__image">
                    <img
                        src="https://images.ctfassets.net/hrltx12pl8hq/1zlEl4XHkxeDuukJUJyQ7Y/a149a908727e2084d503dc103a620d7f/lohp-image-img-3.jpg?fit=fill&w=480&h=270"
                        alt="imagen"
                    />

                </div>

            </div>
            
        </div>
    )
}
