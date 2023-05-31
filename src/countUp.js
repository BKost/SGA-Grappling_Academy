import React, { useEffect, useState, useRef } from "react";

function AnimatedNumber({ number, countDelay = 100 }) {
  const [count, setCount] = useState();

  const numRef = useRef(null);

  useEffect(() => {
    const countInterval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < number) {
          return prevCount + 1;
        } else {
          clearInterval(countInterval);
          return prevCount;
        }
      });
    }, countDelay);

    return () => {
      clearInterval(countInterval);
    };
  }, [number, count, countDelay]);

  useEffect(() => {
    const numOptions = {
      rootMargin: "200% 0px 0px 0px",
    };

    const numObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCount(1);
        }
      });
    }, numOptions);

    if (numRef.current) {
      numObserver.observe(numRef.current);
    }

    return () => {
      numObserver.disconnect();
    };
  }, []);

  return <div ref={numRef}>{count}</div>;
}

export default AnimatedNumber;
