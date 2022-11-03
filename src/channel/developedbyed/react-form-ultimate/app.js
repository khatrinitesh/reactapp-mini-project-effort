import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import AppHome from './index';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppHome />
  </StrictMode>
);
