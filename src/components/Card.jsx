import React from 'react';
import './card.css'

export default function Card({link, snippet, title, pagemap}) {
    const url = pagemap?.cse_image[0]?.src;
    return (
        <div className='cardContainer'>
            <div>
                <img
                    className='img'
                    src={url}
                    alt='No Image'
                />
            </div>
            <div>
                <div className='linkText'>
                    {link}
                </div>
                <div className='titleText'>{title}</div>
                <div className='snippet'>
                    {snippet}
                </div>
            </div>
        </div>
    )
}
