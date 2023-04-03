import React from 'react'
import {DataAbout} from '../components/data-about';
import {Link} from 'react-router-dom';

export default function About() {
  return (
    <section className="about_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src={require('../img/about-img.jpg')} alt="website template image" />{" "}
              </div>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="detail-box">
                {DataAbout.map((data,index) => {
                  const {title,description} = data;
                  return(
                    <div className="card p-3 bg-transparent border-0" key={index}>
                    <div className="heading_container">
                      <h2>{title}</h2>
                    </div>
                    <p>
                      {description}
                    </p>
                    </div>
                  )
                })}
                <div>
                  <Link to="https://www.free-css.com/free-css-templates">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
