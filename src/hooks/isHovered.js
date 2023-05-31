import { useState, useEffect, useRef } from "react";

function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const hoverRef = useRef();

  useEffect(() => {
    const hoveredElement = hoverRef.current;

    function updateIsHovered() {
      setIsHovered(!isHovered);
    }

    hoveredElement.addEventListener("mouseenter", updateIsHovered);
    hoveredElement.addEventListener("mouseleave", updateIsHovered);

    return () => {
      hoveredElement.removeEventListener("mouseenter", updateIsHovered);
      hoveredElement.removeEventListener("mouseleave", updateIsHovered);
    };
  }, [isHovered]);

  return { isHovered, hoverRef };
}

export default useHover;
