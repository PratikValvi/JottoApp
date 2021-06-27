import React from 'react'

const GuessedWords = (props) => {
    
    let contents;

    if (props.guessedWords.length === 0) {
        contents = (
            <span className='guess-word-message'>
                Try to guess the Secret Word!!!
            </span>
        )
    }

    return (
        <div className='guessed-words-wrapper'>
            { contents }
        </div>
    )
}

export default GuessedWords;
