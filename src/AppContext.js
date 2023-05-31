import React, { createContext, useState, useRef } from "react";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [logoOnScreen, setLogoOnScreen] = useState(true);
  // const [navbarHidden, setNavbarHidden] = useState(false);

  // navigation

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
        // navbarHidden,
        // setNavbarHidden,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext };
