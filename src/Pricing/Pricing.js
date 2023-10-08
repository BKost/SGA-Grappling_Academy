import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import "./Pricing.css";

function Pricing() {
  const { navigatePricingRef } = useContext(AppContext);

  return (
    <div ref={navigatePricingRef} className="pricing-container">
      <h3>Cenník</h3>
      <div className="pricing-text">
        <p>
          <span className="pricing-span">Jednorázový vstup:</span> 7€ / tréning
        </p>
        <p>
          <span className="pricing-span">Mesačný Grappling + MMA:</span> 60€ /
          40 tréningov
        </p>
        <p>
          <span className="pricing-span">Mesačný MMA:</span> 45€ / 20 tréningov
        </p>
        <p>
          <span className="pricing-span">Mesačný Grappling:</span> 50€ / 28
          tréningov
        </p>
        <p>
          <span className="pricing-span"> Trojmesačný Grappling + MMA:</span>
          150€ / 120 tréningov
        </p>
        <p>
          <span className="pricing-span">Polročný Grappling + MMA:</span> 280€ /
          240 tréningov
        </p>
      </div>
    </div>
  );
}

export default Pricing;
