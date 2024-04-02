import React from 'react'
import state1 from './image/state1.GIF'
import state2 from './image/state2.GIF'
import state3 from './image/state3.GIF'
import state4 from './image/state4.GIF'
import state5 from './image/state5.GIF'
import state6 from './image/state6.GIF'
import state7 from './image/state7.GIF'
import state8 from './image/state8.GIF'
import state9 from './image/state9.GIF'
import state10 from './image/state10.GIF'
import state11 from './image/state11.GIF'

function Figure({wrongLetters}) {
    const errors = wrongLetters.length;
  return (
    <div>
        {/* starting position */}
        {errors < 1 &&
        <img src={state1} alt="hangman state1" className='figure-container'/>}

        {/* bottom rod position */}
       {errors === 1 && <img src={state2} alt="hangman state2" className='figure-container'/>}
        
        {/* right standing rod position */}
        {errors === 2 && <img src={state3} alt="hangman state3" className='figure-container'/>}
        
        {/* top horizontal rod in place */}
        {errors ===3 && <img src={state4} alt="hangman state4" className='figure-container'/>}
        
         {/* hanging rod position */}
         {errors === 4 && <img src={state5} alt="hangman state5" className='figure-container'/>}
       
        {/* head on the rod */}
        {errors === 5 && <img src={state6} alt="hangman state6" className='figure-container'/>}
        
         {/* boady on the rod */}
         {errors === 6 && <img src={state7} alt="hangman state7" className='figure-container'/>}
       
        {/* left hand on the rod */}
        {errors === 7 && <img src={state8} alt="hangman state8" className='figure-container'/>}
        
        {/* right hand on the rod */}
        {errors === 8 && <img src={state9} alt="hangman state9" className='figure-container'/>}
       
       {/* left leg on the rod */}
       {errors === 9 && <img src={state10} alt="hangman state10" className='figure-container'/>}
        
        {/* right leg on the rod */} 
        {errors === 10 && <img src={state11} alt="hangman state11" className='figure-container'/>}
        
    </div>
  )
}

export default Figure
