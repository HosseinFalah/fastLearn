import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppContainer from './Containers/AppContainer';

createRoot(document.getElementById('root')).render(
  <AppContainer/>
)