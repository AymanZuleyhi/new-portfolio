import React, { createContext, useContext, useState } from 'react';

interface ImagePreviewContextType {
  showImagePreview: {
    isVisible: boolean,
    src: string
  };
  toggleImagePreview: (src?: string) => void;
}

const ImagePreviewContext = createContext<ImagePreviewContextType | undefined>(undefined);

export const ImagePreviewProvider = ({ children }: { children: React.ReactNode }) => {
  const [showImagePreview, setShowImagePreview] = useState<{isVisible: boolean, src: string}>({ 
    isVisible: false, 
    src: "" 
  });

  const toggleImagePreview = (src?: string) => {
    setShowImagePreview((prev) => ({
      isVisible: !prev.isVisible,
      src: src || prev.src
    }));
  };

  return (
    <ImagePreviewContext.Provider value={{ showImagePreview, toggleImagePreview }}>
      {children}
    </ImagePreviewContext.Provider>
  );
};

export const useImagePreview = () => {
  const context = useContext(ImagePreviewContext);
  if (!context) {
    throw new Error("useImagePreview must be used within an ImagePreviewProvider");
  }
  return context;
};