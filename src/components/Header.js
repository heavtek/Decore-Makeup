import React,{useEffect,useState} from "react";
const Header=()=>{
    return<>
     <section class="topbar">
            <h2 class="hidden">some</h2>
            <div class="container-fluid">
                <div class="row">
                    <div class="col col-lg-7 col-md-12 col-12">
                        <div class="contact-intro">
                            <ul>
                                <li><i class="fi flaticon-email"></i>loveme@gmail.com</li>
                                <li><i class="fi flaticon-phone-call"></i> +888 (123) 869523</li>
                                <li><i class="fi flaticon-maps-and-flags"></i> New York – 1075 Firs Avenue</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col col-lg-5 col-md-12 col-12">
                        <div class="contact-info">
                            <ul>
                                <li><a href="#"><i class="fi flaticon-facebook-app-symbol"></i></a></li>
                                <li><a href="#"><i class="fi flaticon-twitter"></i></a></li>
                                <li><a href="#"><i class="fi flaticon-linkedin"></i></a></li>
                                <li><a href="#"><i class="fi flaticon-instagram-1"></i></a></li>
                                <li><a href="#"><i class="fi flaticon-pinterest"></i></a></li>
                                <li><a href="#"><i class="fi flaticon-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    
    </>
}
 export default Header;