import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';




export default function App() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-3 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-3'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <img src= {process.env.PUBLIC_URL+"images/img.png"} style={{  marginTop:"10px", width:"200px", height:"200px"}}/>
             
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Vehicle Fleet
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Services
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                Contact Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                FAQ
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Our Partners
                </a>
              </p>
             
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> 35/15, Nawala Road, Narahenpita,Colombo 5, Sri Lanka
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                Car4u@gmail.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> +94 71 878 9343
              </p>
              <p>
                <i className='fas fa-print me-3'></i> +94 71 878 9343
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright: Car4u(Private) Limited
        
      </div>
    </MDBFooter>
  );
}