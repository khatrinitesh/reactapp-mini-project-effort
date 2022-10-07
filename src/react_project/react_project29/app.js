import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

// pages
import BlogLayout from './pages/bloglayout';
import BlogPostsPage from './pages/blogposts';
import NewPostPage from './pages/newpost';
import PostDetailPage from './pages/postdetail';
import Welcome from './pages/welcome';
// layout
import RootLayout from './components/rootlayout';


export default function CustomApp() {
  return (
    <Router>
        <RootLayout>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/blog" element={<BlogLayout />}>
                    <Route index element={<BlogPostsPage/>}/>
                    <Route path=":id" element={<PostDetailPage/>}/>
                </Route>
                <Route path="/blog/new" element={<NewPostPage/>}/>
            </Routes>
        </RootLayout>
    </Router>
  )
}
