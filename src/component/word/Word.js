import React from 'react';

const Word = ({ selectedWord, correctLetters }) => {

  return (
    <div className="word-display">
      {selectedWord.split('').map((letter, i) => {
        //Dipslay to user letter that are within selected word, if does not exist then empty string
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
      })}
    </div>
  )
}

export default Word