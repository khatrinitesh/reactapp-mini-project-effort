import React,{useEffect}from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './custom.css';

const Home = React.lazy(() => import('./pages/home'));
const About = React.lazy(() => import('./pages/about'));
const Program = React.lazy(() => import('./pages/programs'));
const ContactUs = React.lazy(() => import('./pages/contactus'));
const Error = React.lazy(() => import('./pages/error'));
const MainLayout = React.lazy(() => import('./mainlayout'));

export default function CustomApp() {

  useEffect(() => {
    // 👇 add class to body element
    document.body.classList.add('bg-salmon');

    // 👇️ adding multiple classes to the body element
    document.body.classList.add(
      'bg-salmon',
      'my-class-1',
      'my-class-2',
      'my-class-3',
    );
    document.body.classList.remove('my-class-3');

    // 👇️ checking if the body element contains a class
    if (document.body.classList.contains('bg-salmon')) {
      console.log('body tag contains class');
    }
  }, []);

  return (
    <React.Suspense fallback={<div>Loading ...</div>}>
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/program" element={<Program/>}/>
                    <Route path="/contactus" element={<ContactUs/>}/>
                </Route>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </Router>
    </React.Suspense>
  )
}
