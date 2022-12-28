import React, { useEffect ,useMemo,useCallback,useLayoutEffect } from 'react';


export default function CustomApp() {

    // what will be the order of the logs when app is mounted?

    useEffect(() => {
        console.log('A')
    });
    useMemo(() => {
        console.log('B')
    });
    useLayoutEffect (() => {
        console.log('C')
    });
    useCallback(() => {
        console.log('D')
    });

    console.log('E');
  return null
}
