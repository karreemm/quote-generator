
export const shareOnWhatsApp = (quote) => {
    const text = encodeURIComponent(`"${quote.content}" - ${quote.author}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };
  
  export const shareOnTwitter = (quote) => {
    const text = encodeURIComponent(`"${quote.content}" - ${quote.author}`);
    const url = encodeURIComponent("http://localhost:3000"); 
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
  };
  
  export const shareOnFacebook = (quote) => {
    const shareUrl = encodeURIComponent("https://QuoteGenerator.com");
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${`${quote.content} - ${quote.author}`}`;
    window.open(facebookShareUrl, '_blank');
  };


export const shareOnTelegram = (quote) => {
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent("https://QuoteGenerator.com")}&text=${`${quote.content} - ${quote.author}`}`;
    window.open(shareUrl, '_blank');
  };
  
  export const shareOnLinkedIn = (quote) => {
    const shareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent("https://QuoteGenerator.com")}&title=${encodeURIComponent("Quote from " + quote.author)}&summary=${encodeURIComponent(`${quote.content} - ${quote.author}`)}`;
    window.open(shareUrl, '_blank');
  };
  
  
  
  
  
  
  