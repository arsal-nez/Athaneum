import React, { useState, useEffect } from 'react';
import { BookOpen, Feather, Sparkles } from 'lucide-react'

const Home = () => {
  const [doorOpen, setDoorOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDoorOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

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
    contentContainer: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      width: '90%',
      maxWidth: '800px',
      padding: '20px',
      background: 'rgba(241, 228, 196, 0.8)',
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)',
    },
    door: {
      position: 'fixed',
      top: 0,
      width: '50%',
      height: '100%',
      backgroundColor: '#5c4033',
      transition: 'transform 1.5s ease-in-out',
      zIndex: 100,
    },
    doorLeft: {
      left: 0,
      transformOrigin: 'left',
      transform: doorOpen ? 'perspective(1200px) rotateY(120deg)' : 'none',
    },
    doorRight: {
      right: 0,
      transformOrigin: 'right',
      transform: doorOpen ? 'perspective(1200px) rotateY(-120deg)' : 'none',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#8b4513',
      marginBottom: '1rem',
    },
    quote: {
        maxWidth: '600px',
        fontSize: '1.2rem',
        color: '#6b3e26',
        textAlign: 'center',
        marginBottom: '2rem',
      },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      width: '100%',
      maxWidth: '900px',
      marginBottom: '2rem',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '1.5rem',
      backgroundColor: '#fff3cd',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    icon: {
      width: '48px',
      height: '48px',
      marginBottom: '1rem',
    },
    cardTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    cardDescription: {
      fontSize: '0.9rem',
    },
    button: {
      backgroundColor: '#8b4513',
      color: 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.25rem',
      fontSize: '1rem',
      cursor: 'pointer',
      border: 'none',
      transition: 'background-color 0.3s ease',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.starryBackground} />
      <div style={styles.contentContainer}>
        <div style={styles.doorLeft} />
        <div style={styles.doorRight} />
        <div style={styles.content}>
          <h1 style={styles.title}>Welcome to Athenaeum</h1>
          <div style={{paddingLeft: '6rem'}}>
          <p style={styles.quote}>
            "Words are, in my not-so-humble opinion, our most inexhaustible source of magic." - Albus Dumbledore
          </p>
          </div>
          
          <div style={styles.grid}>
            <div style={styles.card}>
              <BookOpen style={{width: '48px', height: '48px'}}/>
              <h2 style={styles.cardTitle}>Magical Reading</h2>
              <p style={styles.cardDescription}>Explore enchanting literature maybe sectumsempra instead of metaphor</p>
              
            </div>
            <div style={styles.card}>
              <Sparkles style={{width: '48px', height: '48px'}}/>
              <h2 style={styles.cardTitle}>Spellbinding Writing</h2>
              <p style={styles.cardDescription}>Craft your own magical tales.</p>
            </div>
            <div style={styles.card}>
                <Feather style={{width: '48px', height: '48px'}}/>
              <h2 style={styles.cardTitle}>Get Involved</h2>
              <p style={styles.cardDescription}>Learn how you can participate in our literary community and contribute to our projects.</p>
            </div>
          </div>
        </div>
        <button style={styles.button} onClick={() => window.location.href = '/letter'}>Join the magic</button>
      </div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Cormorant+Garamond:wght@400;700&display=swap');

          body {
            margin: 0;
            padding: 0;
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
            background-color: #8b4513;
            border-radius: 6px;
            border: 3px solid rgba(241, 228, 196, 0.5);
          }

          /* For Firefox */
          * {
            scrollbar-width: thin;
            scrollbar-color: #8b4513 rgba(241, 228, 196, 0.5);
          }
        `}
      </style>
    </div>
  );
};

export default Home;
