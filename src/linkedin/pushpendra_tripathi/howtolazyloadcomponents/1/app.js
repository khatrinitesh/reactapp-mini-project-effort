import React,{Suspense,lazy} from 'react';

const Home = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("./home")), 2000);
    });
});
const About = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("./about")), 2000);
    });
})
const Service = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import("./service")), 2000);
    });
})

export default function CustomApp() {
  return (
    <>
        <Suspense fallback={<div>please wait....Home</div>}>
            <Home/>
        </Suspense>
        <Suspense fallback={<div>please wait....About</div>}>
            <About/>
        </Suspense>
        <Suspense fallback={<div>please wait....Service</div>}>
            <Service/>
        </Suspense>
    </>
  )
}
