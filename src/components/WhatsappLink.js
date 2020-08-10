import React from 'react';

const WhatsappLink = ({ number, countryCode, text, children }) => {
  const href = `https://api.whatsapp.com/send?phone=${countryCode}${number}&text=${encodeURIComponent(text)}.`;
  return (
    <a href={href}>{children || number}</a>
  )
}

export default WhatsappLink;
