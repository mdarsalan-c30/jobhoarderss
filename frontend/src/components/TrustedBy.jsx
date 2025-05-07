import React from 'react'
import './TrustedBy.css';

const TrustedBy = () => {
  return (
    <div className="trusted-by-container">
      <h2>Trusted By</h2>
      <div className="logo-container">
       <img src="https://job-portal-gs-client.vercel.app/assets/microsoft_logo-BrRPO5-k.svg" alt="Microsoft" />
        <img src="https://job-portal-gs-client.vercel.app/assets/walmart_logo-BNc35QHy.svg" alt="Walmart" />
        <img src="https://job-portal-gs-client.vercel.app/assets/samsung_logo-BxQL65ad.png" alt="Other Logo" /> 
      </div>
    </div>
  );
}

export default TrustedBy;
