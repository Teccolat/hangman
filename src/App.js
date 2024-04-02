
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
      // Get the Key and the Key code from the event
      const { key, keyCode } = event;
      // Get user input keyboard value
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        // Check if user letter is in random selected word
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            // Add correct letter, if the letter is not in CorrectLetters.
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
    //Add event listener  Keydown and handle the event with handelKeyDown
    window.addEventListener('keydown', handleKeydown);
   //Remove event listener- Only one event listener should be active
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  //Function to restart the game.
  function playAgain() {
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

//When user request for for set of instruction.
  const showInstructions=()=>{
    //sset the instruction set to the opposit state
    instructions?setInstructions(false):setInstructions(true);
 
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        <Instructions showInstructions={showInstructions} instructions={instructions}/>
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification displayNotification={displayNotification} />
    </>
  );
}

export default App;