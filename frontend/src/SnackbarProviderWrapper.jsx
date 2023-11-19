// SnackbarProviderWrapper.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

const SnackbarProviderWrapper = ({ children }) => (
  <SnackbarProvider
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    autoHideDuration={3000}
  >
    <Router>
      {children}
    </Router>
  </SnackbarProvider>
);

export default SnackbarProviderWrapper;
