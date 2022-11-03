import React,{useState,useEffect,useRef} from 'react';
import gsap from 'gsap'
import './custom.scss';

export default function CustomApp() {

    const [isActive,setIsActive] = useState(false);
    const t1 = gsap.timeline();
    const t2 = gsap.timeline();

    const openMenu= () => {
        alert('Open Modal')
    }

    const closeMenu= () => {
        alert('Close Modal')
    }

    useEffect(() => {
        if(!isActive){
            return;
        }

        t1.from([".preloader",".container"],{
            duration:1.2,
            height:0,
            ease:'power3.inOut',
            stagger:{
                amount:2
            }
        }).from(['.logo_contauiner','.user_info','.search_container'],{
            opacity:0,
            delay:-.3,
            duration:.5,
            y:20,
            ease:'power3.inOut',
            stagger:{
                amount:2
            }
        })
    },[])

    
  return (
    <section className='section' ref={setIsActive}>
        <div className='preloader'></div>
        <div className='container'>
            {/* HEADER */}
            <header>
                <div className='logo_container'>
                    <div className='menu_icon' onClick={openMenu}>
                        <span className='filled'></span>
                        <span></span>
                        <span></span>
                        <span className='filled'></span>
                    </div>
                    <div className='logo'>DA</div>
                </div>
                <div className='user_info'>
                    <a href="#">Log in</a>
                    <a href="#">Signup</a>
                </div>
                <div className='search_container'>
                    <i className='fa fa-search'></i>
                </div>
            </header>
           
           {/* IMAGE CONTAINER */}
            <div className='image_container'>
                <div className='images wedding'>
                    <img src={process.env.PUBLIC_URL + '/images/wedding.png'} alt="wedding" className='img-fluid'/>
                    <p className='title'>Wedding</p>
                    <div className="stars">
                        <span>5.0</span>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
                <div className='images wedding'>
                    <img src={process.env.PUBLIC_URL + '/images/wedding.png'} alt="wedding" className='img-fluid'/>
                    <p className='title'>Wedding</p>
                    <div className="stars">
                        <span>5.0</span>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
                <div className='images fashion'>
                    <img  src={process.env.PUBLIC_URL + '/images/fashion.jpg'} alt="wedding" className='img-fluid'/>
                    <p className='title'>Fashion</p>
                    <div className="stars">
                        <span>5.0</span>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
            </div>

            {/* MORE */}
            <div className='more'>
                <i className='fa fa-caret-up'></i>
                <a href="#">See More</a>
            </div>

            {/* OVERLAY MENU */}
            <div className='overlay_menu'>
                <div className='close_overlay'>Close</div>
                <div className='item'>
                    <span>studio</span>
                    <span>models</span>
                    <span>blog</span>
                </div>
                <div className='item'>
                    <span>studio</span>
                    <span>models</span>
                    <span>blog</span>
                </div>
                <div className='item'>
                    <span>studio</span>
                    <span>models</span>
                    <span>blog</span>
                </div>
            </div>
        </div>
    </section>
  )
}
