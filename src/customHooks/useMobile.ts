import { useState, useEffect } from "react";

const useMobile = (width: number) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (width < 500) {
      setIsMobile(true);
    }
  }, [width]);

  return isMobile;
};

export default useMobile;
