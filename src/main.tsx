import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./index.css";

// Context
import { ViewportProvider } from './context/ViewportContext.tsx';
// import { ScrollProvider } from './context/ScrollContext.tsx';
import { ImagePreviewProvider } from './context/ImagePreviewContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ImagePreviewProvider>
      {/* <ScrollProvider> */}
        <ViewportProvider>
          <App />
        </ViewportProvider>
      {/* </ScrollProvider> */}
    </ImagePreviewProvider>
  </StrictMode>
)
