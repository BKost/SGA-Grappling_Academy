import { useState, useEffect } from "react";

function useScreenScroll() {
  const [scrollDirection, setScrollDirection] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(document.body.scrollTop);
  const [currentScrollPos, setCurrentScrollPos] = useState(window.scrollY);

  useEffect(() => {
    currentScrollPos === 0 && setCurrentScrollPos(window.scrollY);
  }, []);

  useEffect(() => {
    setPrevScrollPos(currentScrollPos);

    if (currentScrollPos > prevScrollPos) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }
  }, [currentScrollPos, prevScrollPos]);

  useEffect(() => {
    function handleScroll() {
      setCurrentScrollPos(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollDirection, currentScrollPos, prevScrollPos };
}

export default useScreenScroll;
