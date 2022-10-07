import React from 'react';
import MainNavigation from './mainnavigation';

export default function RootLayout({children}) {
  return (
    <>
     <MainNavigation/>
     <main>{children}</main>
    </>
  )
}
