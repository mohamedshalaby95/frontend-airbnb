import React from 'react';
import './LiveCards.css'

function LiveCard({ src, title}) {
    return (
        <div className='liveCard'>
            <img src={src} alt="no img" />
            <div className="card__info">
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default LiveCard;