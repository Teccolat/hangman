import React from 'react'
// Return the wrong letter enteries by user
const WrongLetters = ({ wrongLetters }) => {
// Return the wrong letter within the game
  return (
    <div className="wrong-letters-container">
      <div>
        {/* Return Wrong letters to users */}
        {wrongLetters.length > 0 && 
          <p>Wrong Letters</p>
        }
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
      </div>
    </div>
  )
}

export default WrongLetters