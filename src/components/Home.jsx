import React, { useState, useEffect } from 'react';
import { BookOpen, Wand2, Sparkles } from 'lucide-react';

export default function Component() {

  return (
    <div className="page-container">
      <div className="starry-background" />
      <div className="content-container">
        <h1 className="title">Welcome to Atheneum</h1>
        <p className="quote">
          "Words are, in my not-so-humble opinion, our most inexhaustible source of magic." - Albus Dumbledore
        </p>
        <div className="grid">
          <div className="card">
            <BookOpen className="icon" />
            <h2 className="card-title">Magical Reading</h2>
            <p className="card-description">Explore enchanting literature with Sectumsempra-sharp insights</p>
          </div>
          <div className="card">
            <Wand2 className="icon" />
            <h2 className="card-title">Spellbinding Writing</h2>
            <p className="card-description">Craft your own magical tales with quill and parchment</p>
          </div>
          <div className="card">
            <Sparkles className="icon" />
            <h2 className="card-title">Literary Enchantments</h2>
            <p className="card-description">Experience the transformative power of words</p>
          </div>
        </div>
        <button className="join-button" onClick={() => window.location.href = '/credentials'}>
          Cast Your Spell
        </button>
      </div>
      <style jsx>{`
        .page-container {
          min-height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          font-family: 'Cormorant Garamond', serif;
          background-color: #000;
        }
        .starry-background {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
          background-attachment: fixed;
          animation: twinkle 100s infinite linear;
        }
        @keyframes twinkle {
          from { background-position: 0 0; }
          to { background-position: -10000px 5000px; }
        }
        .content-container {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 90%;
          max-width: 1000px;
          padding: 3rem;
          background: rgba(241, 228, 196, 0.9);
          border-radius: 15px;
          box-shadow: 0 0 30px rgba(255, 215, 0, 0.7);
        }
        .title {
          font-size: 3.5rem;
          font-weight: bold;
          color: #8b4513;
          margin-bottom: 1rem;
          font-family: 'Cinzel', serif;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        .quote {
          font-size: 1.2rem;
          color: #6b3e26;
          text-align: center;
          font-style: italic;
          margin-bottom: 2rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          width: 100%;
          margin-bottom: 2rem;
        }
        .card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1.5rem;
          background-color: rgba(255, 243, 205, 0.8);
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        }
        .icon {
          width: 48px;
          height: 48px;
          margin-bottom: 1rem;
          color: #8b4513;
        }
        .card-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: #5c3d2e;
        }
        .card-description {
          font-size: 1rem;
          color: #6b4f3f;
        }
        .join-button {
          background-color: #8b4513;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-size: 1.2rem;
          cursor: pointer;
          border: none;
          transition: all 0.3s ease;
          font-family: 'Cinzel', serif;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .join-button:hover {
          background-color: #a0522d;
          transform: translateY(-2px);
          box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
        }
        @media (max-width: 768px) {
          .content-container {
            padding: 2rem;
          }
          .title {
            font-size: 2.5rem;
          }
          .quote {
            font-size: 1rem;
          }
          .grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .card-title {
            font-size: 1.3rem;
          }
          .join-button {
            font-size: 1rem;
            padding: 0.6rem 1.2rem;
          }
        }
        @media (max-width: 480px) {
          .content-container {
            padding: 1.5rem;
          }
          .title {
            font-size: 2rem;
          }
          .quote {
            font-size: 0.9rem;
          }
          .card {
            padding: 1rem;
          }
          .card-title {
            font-size: 1.2rem;
          }
          .card-description {
            font-size: 0.9rem;
          }
          .join-button {
            font-size: 0.9rem;
            padding: 0.5rem 1rem;
          }
        }
      `}</style>
    </div>
  );
}