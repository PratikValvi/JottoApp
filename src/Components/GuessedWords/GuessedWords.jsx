import React from 'react'

const GuessedWords = (props) => {

    let contents;

    if (props.guessedWords.length === 0) {

        contents = (
            <span className='guess-word-message'>
                Try to guess the Secret Word!!!
            </span>
        )

    } else {

        const guessedWordsRows = props.guessedWords.map((word, index) => (
            <tr id={index} className='guessed-word'>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ));

        contents = (
            <div className='guessed-words'>
                <table>
                    <thead>
                        <tr>
                            <td>Guess</td>
                            <td>Matching Letters</td>
                        </tr>
                    </thead>
                    <tbody>
                        { guessedWordsRows }
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div className='guessed-words-wrapper'>
            { contents }
        </div>
    )
}

export default GuessedWords;
