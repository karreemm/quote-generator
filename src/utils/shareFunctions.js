
export const shareOnWhatsApp = (quote) => {
    const text = encodeURIComponent(`"${quote.content}" - ${quote.author}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };
  
  export const shareOnTwitter = (quote) => {
    const text = encodeURIComponent(`"${quote.content}" - ${quote.author}`);
    const url = encodeURIComponent("https://karreemm.github.io/quote-generator"); 
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
  };
  
  export const shareOnFacebook = (quote) => {
    const baseUrl = "https://karreemm.github.io/quote-generator";
    const quoteText = encodeURIComponent(`${quote.content} - ${quote.author}`);
    const shareUrl = encodeURIComponent(baseUrl);
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${quoteText}`;
    window.open(facebookShareUrl, '_blank');
  };
  
  


export const shareOnTelegram = (quote) => {
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent("https://karreemm.github.io/quote-generator")}&text=${`${quote.content} - ${quote.author}`}`;
    window.open(shareUrl, '_blank');
  };
  
  export const shareOnLinkedIn = (quote) => {
    const shareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent("https://karreemm.github.io/quote-generator")}&title=${encodeURIComponent("Quote from " + quote.author)}&summary=${encodeURIComponent(`${quote.content} - ${quote.author}`)}`;
    window.open(shareUrl, '_blank');
  };
  
  
  
  
  
  
  