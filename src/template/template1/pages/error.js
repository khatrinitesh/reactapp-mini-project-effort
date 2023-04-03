import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Error() {

  const navigation = useNavigate();

  const btnBack= () => {
    navigation("/");
  }
  return (
    <div className="content">
        <section className="page_404">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                  <div className="four_zero_four_bg">
                    <h1 className="text-center ">404</h1>
                  </div>
                  <div className="contant_box_404">
                    <h3 className="h2">Look like you're lost</h3>
                    <p>the page you are looking for not avaible!</p>
                    <button onClick={btnBack} className="link_404">
                      Go to Home
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
