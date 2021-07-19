import React from 'react';
import { GalleryProvider } from '../context/GalleryContext';

export default function AppContainer({ children }) {
  return <GalleryProvider>{children}</GalleryProvider>;
}
