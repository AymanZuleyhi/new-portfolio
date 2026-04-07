import React, { createContext, useContext, useState, useEffect } from 'react';

const ViewportContext = createContext({ width: window.innerWidth });

export const ViewportProvider = ({ children }: { children: React.ReactNode }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ViewportContext.Provider value={{ width }}>
      {children}
    </ViewportContext.Provider>
  );
};

export const useViewport = () => useContext(ViewportContext);