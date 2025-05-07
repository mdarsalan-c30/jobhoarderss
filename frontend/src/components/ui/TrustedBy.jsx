import React from 'react';
import { TrustedBy } from '../util/trustedby';

const TrustedBy = () => {
  return (
    <div className="trusted-by-section">
      <div className="trusted-container">
        <p className="trusted-title">Trusted by</p>
        <div className="trusted-logos">
         <img src="https://job-portal-gs-client.vercel.app/assets/microsoft_logo-BrRPO5-k.svg" alt="Microsoft" />
        <img src="https://job-portal-gs-client.vercel.app/assets/walmart_logo-BNc35QHy.svg" alt="Walmart" />
        <img src="https://job-portal-gs-client.vercel.app/assets/samsung_logo-BxQL65ad.png" alt="Other Logo" />
        <img src="https://job-portal-gs-client.vercel.app/assets/microsoft_logo-BrRPO5-k.svg" alt="Microsoft" />
        <img src="https://job-portal-gs-client.vercel.app/assets/walmart_logo-BNc35QHy.svg" alt="Walmart" />
        <img src="https://job-portal-gs-client.vercel.app/assets/samsung_logo-BxQL65ad.png" alt="Other Logo" />
        
          {/* Add more logos as needed */}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
