import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';
import { ThemeProvider } from './context/ThemeContext'; // Ensure correct import
import CustomCursor from './components/CustomCursor';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>  {/* Wrap everything with ThemeProvider */}
      <CustomCursor />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
