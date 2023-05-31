import { useState, useEffect } from "react";

function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // console.log(screenWidth);

  function handleResize() {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { screenWidth };
}

export default useScreenWidth;
