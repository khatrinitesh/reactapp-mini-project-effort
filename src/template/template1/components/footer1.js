import React from 'react'

export default function FooterOne() {
  return (
    <section className="info_section layout_padding">
      <div className="container">
        <div className="info_form">
          <div className="row">
            <div className="offset-lg-3 col-lg-3">
              <h5 className="form_heading">Newsletter</h5>
            </div>
            <div className="col-md-6">
              <form action="#" method="post">
                <input type="text" placeholder="Enter Your email" />
                <button>subscribe</button>
              </form>
            </div>
          </div>
        </div>
          <div className="row">
            <div className="col-md-3">
              <div className="info_logo">
                <div>
                  <a href="https://www.free-css.com/free-css-templates">
                    <img src={require('../img/logo.png')} alt="website template image" />{" "}
                    <span>Brighton</span>
                  </a>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but
                  the majority have suffered alteration
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_links">
                <h5>Contact Us</h5>
                <p className="pr-0 pr-md-4 pr-lg-5">
                  Donec odio. Quisque volutpat mattis eros.Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info_insta">
                <h5>INFORMATION</h5>
                <p className="pr-0 pr-md-4 pr-md-5">
                  Donec odio. Quisque volutpat mattis eros.Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="pl-0 pl-lg-5 pl-md-4">
                <h5>MY ACCOUNT</h5>
                <p>
                  Donec odio. Quisque volutpat mattis eros.Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
