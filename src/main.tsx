import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { LanguageProvider } from './context/LanguageContext';
import { TransitProvider } from './context/TransitContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <TransitProvider>
        <App />
      </TransitProvider>
    </LanguageProvider>
  </React.StrictMode>
);
