import React from 'react';
import {DataProgram,DataSectionTitle} from '../components/data-program';

export default function Offer() {
  return (
    <section className="offer_section layout_padding">
        <div className="container">
          <div className="heading_container">
            {DataSectionTitle.map((val,index) => {
              const {title,description} = val
              return(
                <div key={index}>
                <h2>{title}</h2>
                <p>{description}</p>
                </div>
              )
            })}
          </div>
          <div className="row">
              {DataProgram.map((val,index) => {
                const {icon,title,description} = val;
                return(
                  <div className="col-md-6">
                    <div className="content-box" key={index}>
                      <div className="img-box">
                        <img src={icon} alt="logo" className="img-fluid" style={{width:'55px'}}/>
                      </div>
                      <div className="detail-box">
                        <h6>{title}</h6>
                        <p>
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
    </section>
  )
}
