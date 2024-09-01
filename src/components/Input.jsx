import React, { useState } from 'react';
import Letter from './Letter';

function InputForm() {
  const [name, setName] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [showLetter, setShowLetter] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowLetter(true);
  };

  const styles = {
    formContainer: {
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Cormorant Garamond', serif",
    },
    starryBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `#000 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
      backgroundAttachment: 'fixed',
      animation: 'twinkle 100s infinite linear',
    },
    form: {
      position: 'relative',
      zIndex: 1,
      background: '#f1e4c4',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)',
      maxWidth: '400px',
      width: '90%',
    },
    input: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '18px',
      color: '#2a1b0d',
      background: 'transparent',
      border: 'none',
      borderBottom: '1px solid #2a1b0d',
      margin: '10px 0',
      width: '100%',
      padding: '5px',
    },
    submitButton: {
      marginTop: '20px',
      padding: '10px 20px',
      fontSize: '16px',
      fontFamily: "'Cinzel', serif",
      color: '#fff',
      backgroundColor: '#8b0000',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      display: 'block',
      margin: '20px auto',
    },
    heading: {
      fontFamily: "'Cinzel', serif",
      color: '#8b0000',
      fontSize: '24px',
      marginBottom: '20px',
      textAlign: 'center',
    },
  };

  return ( showLetter ? <Letter name={name} roomNumber={roomNumber} /> : 
    <div style={styles.formContainer}>
      <div style={styles.starryBackground} />
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Reveal Thy Identity</h2>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter your name sunshine"
          style={styles.input}
          required
        />
        <input 
          type="text" 
          value={roomNumber} 
          onChange={(e) => setRoomNumber(e.target.value)} 
          placeholder="Your Room Number"
          style={styles.input}
          required
        />
        <button type="submit" style={styles.submitButton}>YOUR GATEWAY</button>
      </form>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Cormorant+Garamond:wght@400;700&display=swap');
          
          body {
            margin: 0;
            padding: 0;
          }

          input:focus {
            outline: none;
            border-bottom: 2px solid #8b0000;
          }

          @keyframes twinkle {
            0% { background-position: 0 0; }
            100% { background-position: -10000px 5000px; }
          }
        `}
      </style>
    </div>
  );
}

export default InputForm;