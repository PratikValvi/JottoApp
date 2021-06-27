import React from 'react';
import './Congrats.css';

const Congrats = ({ success }) => {
    return (
        <div className='congrats-wrapper'>
            {
                success ? <span>Congrats you guessed the right word!!!!</span> : null
            }
        </div>
    )
}

export default Congrats;