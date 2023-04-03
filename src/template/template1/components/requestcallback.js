import React from 'react'

export default function RequestCallback() {
  return (
    <section className="contact_section layout_padding">
          <div className="container">
            <div className="heading_container">
              <h2>
                Request<span>A call Back</span>
              </h2>
            </div>
          <div className="row">
            <div className="col-md-6">
              <form action="#" method="post">
                <div>
                  <input type="text" placeholder="Name" />
                </div>
                <div>
                  <input type="email" placeholder="Email" />
                </div>
                <div>
                  <input type="text" placeholder="Pone Number" />
                </div>
                <div>
                  <input type="text" className="message-box" placeholder="Message" />
                </div>
                <div className="d-flex  mt-4">
                  <button>SEND</button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div id="map" class="w-100 h-100">
              <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80629.04395197467!2d-0.17622974317067425!3d50.83750539941513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48758509f6294167%3A0x9cc6af7a727d0ef9!2sBrighton%2C%20Brighton%20and%20Hove%2C%20UK!5e0!3m2!1sen!2sin!4v1680503110959!5m2!1sen!2sin"
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
