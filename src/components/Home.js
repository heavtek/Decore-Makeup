import React,{useEffect,useState} from 'react'
import '../assets/css/style.css'
import '../assets/css/animate.css'
import '../assets/css/auth-pages.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/flaticon.css'
import '../assets/css/font-awesome.min.css'
import '../assets/css/jquery-ui.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/css/magnific-popup.css'
import '../assets/css/nice-select.css'
import '../assets/css/odometer-theme-default.css'
import '../assets/css/owl.carousel.css'
import '../assets/css/owl.theme.css'
import '../assets/css/owl.transitions.css'
import '../assets/css/slick-theme.css'
import '../assets/css/slick.css'
import '../assets/css/swiper.min.css'
import '../assets/css/themify-icons.css'

import Navbar from './Navbar'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Home=()=>{
    return<>
   
<div class="wpo-box-style">
 <section class="wpo-hero-slider">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="slide-inner slide-bg-image" data-background="assets/images/slider/slide-1.jpg">
                                {/* <!-- <div class="gradient-overlay"></div> --> */}
                                <div class="container-fluid">
                                    <div class="slide-content">
                                        <div data-swiper-parallax="300" class="slide-title">
                                            <h2>Our DREAMY Love</h2>
                                        </div>
                                        <div data-swiper-parallax="400" class="slide-text">
                                            <p>Welcome and open yourself to your truest love this year with us! With the
                                                Release Process</p>
                                        </div>
                                        <div class="clearfix"></div>
                                        <div data-swiper-parallax="500" class="slide-btns">
                                            <a href="about.html" class="theme-btn">Discover More</a>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            {/* <!-- end slide-inner --> */}
                        </div> 
                        {/* <!-- end swiper-slide --> */}

                        <div class="swiper-slide">
                            <div class="slide-inner slide-bg-image" data-background="assets/images/slider/slide-2.jpg">
                                {/* <!-- <div class="gradient-overlay"></div> --> */}
                                <div class="container-fluid">
                                    <div class="slide-content">
                                        <div data-swiper-parallax="300" class="slide-title">
                                            <h2>Our DREAMY Love</h2>
                                        </div>
                                        <div data-swiper-parallax="400" class="slide-text">
                                            <p>Welcome and open yourself to your truest love this year with us! With the
                                                Release Process</p>
                                        </div>
                                        <div class="clearfix"></div>
                                        <div data-swiper-parallax="500" class="slide-btns">
                                            <a href="about.html" class="theme-btn">Discover More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             {/* <!-- end slide-inner --> */}
                        </div> 
                        {/* <!-- end swiper-slide --> */}

                        <div class="swiper-slide">
                            <div class="slide-inner slide-bg-image" data-background="assets/images/slider/slide-3.jpg">
                                {/* <!-- <div class="gradient-overlay"></div> --> */}
                                <div class="container-fluid">
                                    <div class="slide-content">
                                        <div data-swiper-parallax="300" class="slide-title">
                                            <h2>Our DREAMY Love</h2>
                                        </div>
                                        <div data-swiper-parallax="400" class="slide-text">
                                            <p>Welcome and open yourself to your truest love this year with us! With the
                                                Release Process</p>
                                        </div>
                                        <div class="clearfix"></div>
                                        <div data-swiper-parallax="500" class="slide-btns">
                                            <a href="about.html" class="theme-btn">Discover More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             {/* <!-- end slide-inner --> */}
                        </div>
                         {/* <!-- end swiper-slide --> */}
                    </div>
                    {/* <!-- end swiper-wrapper --> */}

                    {/* <!-- swipper controls --> */}
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </section>
            </div>
            {/* <!-- end of wpo-hero-slide-section--> */}



    
    </>
}
export default Home;