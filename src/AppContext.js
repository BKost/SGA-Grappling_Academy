import React, { createContext, useState, useRef } from "react";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [logoOnScreen, setLogoOnScreen] = useState(true);

  // Navigation
  const navigateHomeRef = useRef();
  const navigateADCCRef = useRef();
  const navigateSGARef = useRef();
  const navigateGalleryRef = useRef();
  const navigateContactRef = useRef();

  return (
    <AppContext.Provider
      value={{
        navigateHomeRef,
        navigateADCCRef,
        navigateSGARef,
        navigateGalleryRef,
        navigateContactRef,
        logoOnScreen,
        setLogoOnScreen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext };
