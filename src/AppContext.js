import React, { createContext, useState } from "react";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [logoOnScreen, setLogoOnScreen] = useState(true);

  // Navigation
  // const navigateHomeRef = useRef();
  // const navigateADCCRef = useRef();
  // const navigateSGARef = useRef();
  // const navigateGalleryRef = useRef();
  // const navigateContactRef = useRef();
  // const navigateTrainingScheduleRef = useRef();
  // const navigateFitnessRef = useRef();
  // const navigatePricingRef = useRef();

  return (
    <AppContext.Provider
      value={{
        // navigateHomeRef,
        // navigateADCCRef,
        // navigateSGARef,
        // navigateGalleryRef,
        // navigateContactRef,
        // navigateFitnessRef,
        // navigateTrainingScheduleRef,
        // navigatePricingRef,
        logoOnScreen,
        setLogoOnScreen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext };
