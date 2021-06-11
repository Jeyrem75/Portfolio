import React, { Component } from "react";
import Quiz1 from './img/Quiz1.png';
import Quiz2 from './img/Quiz2.png';
import Quiz3 from './img/Quiz3.png';
import Quiz4 from './img/Quiz4.png';
import Quiz5 from './img/Quiz5.png';
import Quiz6 from './img/Quiz6.png';
import FreeAds1 from './img/FreeAds1.png';
import FreeAds2 from './img/FreeAds2.png';
import FreeAds3 from './img/FreeAds3.png';
import FreeAds4 from './img/FreeAds4.png';
import FreeAds5 from './img/FreeAds5.png';
import FreeAds6 from './img/FreeAds6.png';
import Tweet1 from './img/Tweet1.png';
import Tweet2 from './img/Tweet2.png';
import Tweet3 from './img/Tweet3.png';
import Tweet4 from './img/Tweet4.png';
import Tweet5 from './img/Tweet5.png';
import Snap1 from './img/Snap1.png';
import Snap2 from './img/Snap2.png';
import Snap3 from './img/Snap3.png';
import Snap4 from './img/Snap4.png';
import Snap5 from './img/Snap5.png';
import Snap6 from './img/Snap6.png';
import Snap7 from './img/Snap7.png';
import Snap8 from './img/Snap8.png';




class Portfolio extends Component {
    render() {
        return (
            <div id="portfolio">
                <h1>PORTFOLIO</h1>
                <br></br><br></br>
                <div id="snap" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#snap" data-slide-to="0" className="active"></li>
                        <li data-target="#snap" data-slide-to="1"></li>
                        <li data-target="#snap" data-slide-to="2"></li>
                        <li data-target="#snap" data-slide-to="3"></li>
                        <li data-target="#snap" data-slide-to="4"></li>
                        <li data-target="#snap" data-slide-to="5"></li>
                        <li data-target="#snap" data-slide-to="6"></li>
                        <li data-target="#snap" data-slide-to="7"></li>
                    </ol>
                    <div className="carousel-inner">
                        <a className="carousel-control-prev" href="#snap" role="button" data-slide="prev">
                            <div id="arrow"><i className="fa fa-chevron-left fa-2x" aria-hidden="true"></i></div>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#snap" role="button" data-slide="next">
                            <div id="arrow"><i className="fa fa-chevron-right fa-2x" aria-hidden="true"></i></div>
                            <span className="sr-only">Next</span>
                        </a>
                        <div className="carousel-item active">
                            <img src={Snap1} className="d-block w-100" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={Snap2} className="d-block w-100" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={Snap3} className="d-block w-100" alt="Third slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={Snap4} className="d-block w-100" alt="Fourth slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={Snap5} className="d-block w-100" alt="Fifth slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={Snap6} className="d-block w-100" alt="Sixth slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={Snap7} className="d-block w-100" alt="Seventh slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={Snap8} className="d-block w-100" alt="Eighth slide" />
                        </div>
                    </div>
                </div>
                <h1>My Snapchat</h1>
                <p>Langage: React Native</p>
                <p>Clone de Snapchat développé avec React Native. Projet de groupe realisé en 1 semaine.</p>
                <div id="quiz" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#quiz" data-slide-to="0" className="active"></li>
                        <li data-target="#quiz" data-slide-to="1"></li>
                        <li data-target="#quiz" data-slide-to="2"></li>
                        <li data-target="#quiz" data-slide-to="3"></li>
                        <li data-target="#quiz" data-slide-to="4"></li>
                        <li data-target="#quiz" data-slide-to="5"></li>
                    </ol>
                    <div className="carousel-inner">
                        <a className="carousel-control-prev" href="#quiz" role="button" data-slide="prev">
                            <div id="arrow"><i className="fa fa-chevron-left fa-2x" aria-hidden="true"></i></div>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#quiz" role="button" data-slide="next">
                            <div id="arrow"><i className="fa fa-chevron-right fa-2x" aria-hidden="true"></i></div>
                            <span className="sr-only">Next</span>
                        </a>
                        <div className="carousel-item active">
                            <img src={Quiz1} className="d-block w-100" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={Quiz2} className="d-block w-100" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={Quiz3} className="d-block w-100" alt="Third slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={Quiz4} className="d-block w-100" alt="Fourth slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={Quiz5} className="d-block w-100" alt="Fifth slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={Quiz6} className="d-block w-100" alt="SixthZ slide" />
                        </div>
                    </div>
                </div>
                <h1>My_Quiz</h1>
                <p>Langage: Symfony, Bootstrap, MySQL</p>
                <p>Site permettant de passer et de créer des Quizs développé en Symfony. Projet de groupe réalisé en 2 semaines.</p>
                <div id="freeads" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#freeads" data-slide-to="0" className="active"></li>
                        <li data-target="#freeads" data-slide-to="1"></li>
                        <li data-target="#freeads" data-slide-to="2"></li>
                        <li data-target="#freeads" data-slide-to="3"></li>
                        <li data-target="#freeads" data-slide-to="4"></li>
                        <li data-target="#freeads" data-slide-to="5"></li>
                    </ol>
                    <div className="carousel-inner">
                        <a className="carousel-control-prev" href="#freeads" role="button" data-slide="prev">
                            <div id="arrow"><i className="fa fa-chevron-left fa-2x" aria-hidden="true"></i></div>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#freeads" role="button" data-slide="next">
                            <div id="arrow"><i className="fa fa-chevron-right fa-2x" aria-hidden="true"></i></div>
                            <span className="sr-only">Next</span>
                        </a>
                        <div className="carousel-item active">
                            <img src={FreeAds1} className="d-block w-100" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={FreeAds2} className="d-block w-100" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={FreeAds3} className="d-block w-100" alt="Third slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={FreeAds4} className="d-block w-100" alt="Fourth slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={FreeAds5} className="d-block w-100" alt="Fifth slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={FreeAds6} className="d-block w-100" alt="Sixth slide" />
                        </div>
                    </div>
                </div>
                <h1>Free_Ads</h1>
                <p>Langage: Laravel, Bootstrap, MySQL</p>
                <p>Site d'annonces en ligne développé en Laravel. Projet solo développé en 1 semaine.</p>
                <div id="tweet" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#tweet" data-slide-to="0" className="active"></li>
                        <li data-target="#tweet" data-slide-to="1"></li>
                        <li data-target="#tweet" data-slide-to="2"></li>
                        <li data-target="#tweet" data-slide-to="3"></li>
                        <li data-target="#tweet" data-slide-to="4"></li>
                    </ol>
                    <div className="carousel-inner">
                        <a className="carousel-control-prev" href="#tweet" role="button" data-slide="prev">
                            <div id="arrow"><i className="fa fa-chevron-left fa-2x" aria-hidden="true"></i></div>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#tweet" role="button" data-slide="next">
                            <div id="arrow"><i className="fa fa-chevron-right fa-2x" aria-hidden="true"></i></div>
                            <span className="sr-only">Next</span>
                        </a>
                        <div className="carousel-item active">
                            <img src={Tweet1} className="d-block w-100" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={Tweet2} className="d-block w-100" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={Tweet3} className="d-block w-100" alt="Third slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={Tweet4} className="d-block w-100" alt="Fourth slide" />
                        </div>
                        <div className="carousel-item">
                            <img src={Tweet5} className="d-block w-100" alt="Fifth slide" />
                        </div>
                    </div>
                </div>
                <h1>Tweet_Academie</h1>
                <p>Langage: PHP, Bootstrap, MySQL</p>
                <p>Clone de Twitter développé en PHP. Projet de groupe réalisé en 1 mois</p>
            </div>
        );
    }
}

export default Portfolio;