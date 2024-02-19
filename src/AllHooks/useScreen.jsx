import React, { useEffect, useState } from 'react';

function useScreen() {
  const [size, setSize] = useState();

  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth < 600) return setSize("SMALL");
      if (window.innerWidth >= 600 && window.innerWidth < 900) return setSize("MEDIUM");
      if (window.innerWidth >= 900) return setSize("LARGE");
    };

    checkSize(); 

    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return size;
}

export default useScreen;
