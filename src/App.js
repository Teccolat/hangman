
import './App.css';
import React, { useState, useEffect } from 'react';
import Figure from './component/figure/Figure';
import Header from './component/header/Header';
import WrongLetters from './component/wrongLetter/WrongLetters';
import Instructions from './component/instructions/Instructions';
import Word from './component/word/Word';
import Popup from './component/popup/Popup';
import Notification from './component/notification/Notification';
import { showNotification } from './helpers/helpers';

// List of words used to feed the game
const words = ['book', 'programming', 'calculation', 'strong'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [instructions, setInstructions] = useState(false);
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [displayNotification, setDisplayNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = event => {
      // Get the Key and the Key code from pressing keyboard
      const { key, keyCode } = event;
      // Check for keyboard input value
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        // Check if letter is in random selected word
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            // If the letter is not in CorrectLetters,add correct letter,
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            // If the user enetered the right letter twice then pass the status of SetDispalyNotification to the timeout function (showNotification )
            showNotification(setDisplayNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            // If the user enetered the wrong letter twice then pass the status of SetDispalyNotification to the timeout function (showNotification )
            showNotification(setDisplayNotification);
          }
        }
      }
    }
    //Add event listener on Keydown and handle the event with handelKeyDown function.
    window.addEventListener('keydown', handleKeydown);
   //Remove event listener- Only one event listener should be active
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  //The function below allow the game to restart.
  function playAgain() {
    setPlayable(true);

    // Empty arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

//The following method handle the event from clicking "More Info" and "X" button on instruction Modal.
  const showInstructions=()=>{
    //Set instructions status to opposit state 
    instructions?setInstructions(false):setInstructions(true);
 
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        <div className='game-button'>
        <Instructions showInstructions={showInstructions} instructions={instructions}/>
        <button className="replay"onClick={playAgain}>Restart</button>
        </div>
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification displayNotification={displayNotification} />
    </>
  );
}

export default App;

// Reference:
// https://www.youtube.com/watch?v=jj0W8tYX_q8&ab_channel=TraversyMedia

