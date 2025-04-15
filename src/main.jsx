import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from "./components/ui/provider";
import { BrowserRouter } from "react-router";
import { system } from './components/ui/theme.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider value={system}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
