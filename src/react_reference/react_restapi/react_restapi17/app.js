import React from 'react';
import Post from './post';
import ErrorBoundary from './errorboundary';

export default function CustomApp() {

    const url = 'https://jsonplaceholder.typicode.com/posts/1'
  return (
    <ErrorBoundary fallback={<div>Error</div>}>   
        <React.Suspense fallback={<div>loading...</div>}>
            <Post url={url}/>
        </React.Suspense>
    </ErrorBoundary>
   
  )
}
