import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export default function Letter({name, roomNumber}) {
  const letterRef = useRef(null);

  const downloadLetter = async ({name, room}) => {
    if (letterRef.current) {
      const canvas = await html2canvas(letterRef.current, {
        scale: 2,
        logging: false,
        useCORS: true
      });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save('NITA_Literary_Club_Invitation.pdf');
    }
  };

  const styles = {
    pageContainer: {
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
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
    letterContainer: {
      position: 'relative',
      zIndex: 1,
      maxWidth: '800px',
      width: '90%',
      maxHeight: '90vh',
      overflowY: 'auto',
      padding: '20px',
    },
    letter: {
      background: '#f1e4c4',
      padding: '40px',
      fontFamily: "'Cormorant Garamond', serif",
      color: '#2a1b0d',
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)',
    },
    letterHeader: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    letterHeaderH1: {
      fontFamily: "'Cinzel', serif",
      color: '#8b0000',
      fontSize: '24px',
      marginBottom: '10px',
    },
    letterBody: {
      fontSize: '18px',
      lineHeight: 1.6,
    },
    letterBodyH2: {
      fontFamily: "'Cinzel', serif",
      color: '#8b0000',
      fontSize: '20px',
      margin: '20px 0',
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
    downloadButton: {
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
        display: 'block',  // Make the button a block element
        margin: '20px auto', // Center the button horizontally
      },
      
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.starryBackground} />
      <div style={styles.letterContainer}>
        <div style={styles.letter} ref={letterRef}>
          <div style={styles.letterHeader}>
            <h1 style={styles.letterHeaderH1}>NITA Literary Club Headquarters</h1>
            <p>Somewhere Between Platform 9¾ and the JIRANIA</p>
            <p>Enchanted Quill Office, NIT Agartala</p>
          </div>
          <div style={styles.letterBody}>
          <div style={{display: 'flex', 'justifyContent': 'space-between'}}>
                <span>Sasta Desi Hogwarts (a.k.a NITA)</span>
               <span>Room number: {roomNumber}</span>
         </div>
            <h2 style={styles.letterBodyH2}>Subject: 🧙‍♂️ Your Invitation Letter to the League of Literary Legends (No, This Isn't a Drill) 🎉</h2>
            <p>Dear {name || '[ YOU ]'},</p>
            <p>We are pleased to inform you that you have been invited to explore the wizarding world of our very own NITA Literary Club, the most magical place on campus! 🪄 Whether you stumbled upon this letter after running into a wall or found it delivered by an owl with an attitude, congratulations! Your literary journey begins now.</p>
            <p>Much like Harry, you may be wondering if you're cut out for this. But rest assured, whether you're a Muggle or a wizard with words, we've got a spot for you at the Great Table of Creativity (yes, we serve butterbeer – in metaphorical cups). 🧙‍♂️✨</p>
            <p>Whether you're a Stark in the winter of exams, a Jedi of debate, or a S.H.I.E.L.D. agent of eloquent poetry, we've got missions (and events) tailor-made for you. 💥 No matter where your interests lie, NLC is the place where creativity, quick wit, and a love for the written word come together in a spectacular (and sometimes slightly chaotic) blend.</p>
            <p>And, as Dumbledore would say, "There are bigger things on the horizon." We've got something in the works that even Snape wouldn't be able to keep secret for long. Stay tuned, because missing this would be worse than missing the Marauders' Map on a full moon night! 🌕</p>
            <p>So, grab your quills, channel your inner Gryffindor (or Hufflepuff, Ravenclaw, Slytherin – we're all inclusive here), and get ready for an adventure that's going to be nothing short of legendary. 🎉</p>
            <p>We're thrilled to have you on board – we know you'll bring something special to the table (or the Triwizard Tournament, if that's more your speed).</p>
            <p>Yours magically,</p>
            <p>The NITA Literary Club</p>
          </div>
        </div>
        <button onClick={downloadLetter} style={styles.downloadButton}>Download Invitation</button>
      </div>
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

          /* For Webkit browsers */
          ::-webkit-scrollbar {
            width: 12px;
          }

          ::-webkit-scrollbar-track {
            background: rgba(241, 228, 196, 0.5);
          }

          ::-webkit-scrollbar-thumb {
            background-color: #8b0000;
            border-radius: 6px;
            border: 3px solid rgba(241, 228, 196, 0.5);
          }

          /* For Firefox */
          * {
            scrollbar-width: thin;
            scrollbar-color: #8b0000 rgba(241, 228, 196, 0.5);
          }
        `}
      </style>
    </div>
  );
}