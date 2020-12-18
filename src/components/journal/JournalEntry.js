import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://img.theepochtimes.com/assets/uploads/2020/10/29/et-tiger-web-700x420.jpg)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                     cscs csccs cs cjsmc sm vndjvbdjghdnfjkdhfjnksdjkssaksaljjsd
                </p>

            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>

            </div>
            
        </div>
    )
}
