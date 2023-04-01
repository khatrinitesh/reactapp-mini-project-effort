import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './custom.scss';

const Books = React.lazy(() => import('./pages/books'));
const Home = React.lazy(() => import('./pages/home'));
const About = React.lazy(() => import('./pages/about'));
const Service = React.lazy(() => import('./pages/service'));
const Contact = React.lazy(() => import('./pages/contact'));
const Error = React.lazy(() => import('./pages/error'));
const Users = React.lazy(() => import('./pages/users'));
const Blog = React.lazy(() => import('./pages/blog'));
const Profile = React.lazy(() => import('./pages/profile'));
const Account = React.lazy(() => import('./pages/account'));

const MainLayout = React.lazy(() => import('./mainlayout'));


export default function CustomApp() {

    const users = [
        { id: '1', fullName: 'Robin Wieruch' },
        { id: '2', fullName: 'Sarah Finnley' },
      ];
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/service" element={<Service/>}/>
                    <Route path="/users" element={<Users users={users}/>}>
                        <Route path=":userId" element={<Users />} />
                    </Route>
                    <Route path="/contact" element={<Contact/>}/>
                </Route>
                <Route path="/blog" element={<Blog />}>
                    <Route index element={<Profile/>}/>
                    <Route path="/blog/profile" element={<Profile />} />
                    <Route exact  path="/blog/account" element={<Account />} />
                    <Route path="*" element={<Error/>}/>
                </Route>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </Router>
    </React.Suspense>
  )
}
