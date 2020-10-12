import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logoImg from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import givClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

function Landing() {
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                
                <img src={landing} alt="plataforma de estudos" className="hero-image"/>
                
                <div className="buttons-container" >
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="aluno"/>
                        Aluno
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={givClassesIcon} alt="professor"/>
                        Professor
                    </Link>
                </div>
                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="coracao" />
                </span>
            </div>
        </div>
    )
}

export default Landing;