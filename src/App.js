import React, { useState } from 'react';
import { shareOnWhatsApp, shareOnTwitter, shareOnFacebook, shareOnTelegram, shareOnLinkedIn } from './utils/shareFunctions'; 
import './App.css';
import facebookIcon from './images/facebook.png';
import twitterIcon from './images/twitter.png';
import linkedinIcon from './images/linkedin.png';
import telegramIcon from './images/telegram.png';
import whatsappIcon from './images/whatsapp.png';
import copyIcon from './images/copy.png';
import quoteIcon from './images/quote.png';
import shareIcon from './images/share.png';

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(`${quote.author} once said: ${quote.content}`);
    copyMessage();
  };

  const copyMessage = () => {
    const btn = document.getElementById('copyBtn');
    btn.classList.add("keep");
    btn.innerText = 'Copied Successfully!';
      setTimeout(() => {
      btn.innerHTML = 'Copy Quote <img src="' + copyIcon + '" alt="Copy" class="icon " />';
        }, 3000);
  }

  return (
    <div className="parent">
      <div className="container">
        <h1>Quote Generator</h1>
        <div className='quote'>
          <p>{quote.content}</p>
          <span>- {quote.author}</span>
        </div>
        
        <div className='btns-parent'>
          <div className="btns">
            <button onClick={generateQuote} className="btn btnImage"> Another Quote <img src={quoteIcon} alt="WhatsApp" className="icon" /></button>
            <button onClick={copy} id='copyBtn' className="btn btnImage">Copy Quote<img src={copyIcon} alt="WhatsApp" className="icon" /></button>
          </div>
          <div className='or'>
            <span>OR</span>
          </div>
          <div class="share-button">
              <span>
                <img src={shareIcon} alt="WhatsApp" className="icon2 sp" /> Share!
              </span>
              <button onClick={() => shareOnWhatsApp(quote)} className="btn2 btnImage"> <img src={whatsappIcon} alt="WhatsApp" className="icon" /></button>
              <button onClick={() => shareOnTwitter(quote)} className="btn2 btnImage"> <img src={twitterIcon} alt="Twitter" className="icon" /></button>
              <button onClick={() => shareOnFacebook(quote)} className="btn2 btnImage"> <img src={facebookIcon} alt="Facebook" className="icon" /></button>
              <button onClick={() => shareOnTelegram(quote)} className="btn2 btnImage"> <img src={telegramIcon} alt="Telegram" className="icon" /></button>
              <button onClick={() => shareOnLinkedIn(quote)} className="btn2 btnImage"> <img src={linkedinIcon} alt="LinkedIn" className="icon" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
