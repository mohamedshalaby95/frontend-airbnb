import React from 'react'
import './footer.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon } from 'mdbreact';

const Footer=() => {
    return (            
        <div>
            <footer className="navbar-fixed-bottom ">
                <div class="container ">
    
                <div class="row footer-content">
                    
                    <div class="col-lg-3 col-md-6 ">
                        <p className="text-uppercase footer-head" >ABOUT</p>

                        <ul class="list-unstyled mb-2">
                        <li className="footer-link">
                            <a href="#!" class="text-dark">How Airbnb works</a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Newsroom</a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Investors</a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Airbnb Plus</a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark"> Airbnb Luxe </a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Airbnb Plus</a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark">HotelTonight</a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Airbnb for Work</a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Olympics</a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Careers</a>
                        </li>
                        </ul>
                    </div>
                    

                    
                    <div class="col-lg-3 col-md-6">
                        <p className="text-uppercase footer-head">community</p>

                        <ul class="list-unstyled">
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Diversity & Belonging</a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Against Discrimination</a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Accessibility</a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Airbnb Associates</a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Frontline Stays</a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Invite friends</a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Gift cards</a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Airbnb.org</a>
                        </li>
                        </ul>
                    </div>
                    

                    
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <p className="text-uppercase footer-head">host</p>

                        <ul class="list-unstyled mb-0">
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Host your home</a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Host an Online Experience</a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Host an Experience</a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Responsible hosting</a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Resource Center</a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Community Center</a>
                        </li>
                        </ul>
                    </div>
                    

                    
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <p className="text-uppercase footer-head">support</p>

                        <ul class="list-unstyled">
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Our COVID-19 Response</a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Help Center</a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Cancellation options</a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Neighborhood Support</a>
                        </li>
                        <li className="footer-link">
                            <a href="#!" class="text-dark">Trust & Safety</a>
                        </li>
                        </ul>
                    </div>
                    
                    </div>
                </div>

                <hr style={{width:"100%" }} ></hr>
                <div className="footer-container">
                    <div className='footer-privacy'>
                        <p> © 2021 Airbnb, Inc. All rights reserved </p>
                        . <a href="#!" class="text-dark"> Privacy </a>
                        . <a href="#!" class="text-dark"> Terms </a>
                        . <a href="#!" class="text-dark"> Sitemap </a>

                    <div className="footer-icons">

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                    </svg>

                        <a href="#!" class="text-dark font-weight-bold"> English(US) </a>
                        <a href="#!" class="text-dark font-weight-bold text-decoration"> $ USD </a>

                        <a href="https://www.facebook.com/airbnbuk/" target="_blank" className="fb-ic mr-3">
                            <MDBIcon fab icon="facebook-f" />
                        </a>
                        <a href="https://twitter.com/Airbnb?s=08" target="_blank" className="tw-ic mr-3">
                            <MDBIcon fab icon="twitter" />
                        </a>
                        <a href="https://www.instagram.com/airbnb?igshid=1a9sw1s3r0qji" target="_blank" className="ins-ic mr-3">
                            <MDBIcon fab icon="instagram" />
                        </a>
                        
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
