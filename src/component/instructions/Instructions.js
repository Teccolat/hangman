import React from 'react'

// Display instruction when user toggle 'More info'
function Instructions({ instructions, showInstructions }) {

    return (
        <div>
            <div>
            <button className='showInstructionsBtn' 
            onClick={showInstructions}>More Info</button>
            </div>

            {/* The content of the instruction */}
            <div className="show-instruction-popup" style={instructions ? {display:'flex'} : {}}>
                <div >
                    <h2>Instruction</h2>
                    <p>Hacker Hangman is based on 
                    the classic word game in which you must guess the secret word one 
                    letter at a time.</p>
                    <ul>
                        <li>Guess one letter at a time to reveal the secret word.</li>
                        <li>Each incorrect guess increases your 
                        chance of loosing the game. You only get 10 incorrect guesses.</li>
                        <li>Use your Keyboard to guess the letters.</li>
                        <li>If you fail to guess the word it 
                        will be provided to you at the end of the game.</li>
                        <li>You will have the option to play 
                        again once you have guessed the word or once 
                        you've had 10 incorrect guesses.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }

// Sent to the app file.
export default Instructions;