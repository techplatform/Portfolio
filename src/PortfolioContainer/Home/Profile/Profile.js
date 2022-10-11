/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Typical from 'react-typical';
import '/Users/macuser/Desktop/Portfolio/client/src/PortfolioContainer/Home/Profile/Profile.css';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.facebook.com/profile.php?id=100084835304789' target="_blank" rel="noreferrer">
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='https://www.instagram.com/' target="_blank" rel="noreferrer">
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='https://www.linkedin.com/in/aniela-govada-7889a11a4/' target="_blank" rel="noreferrer">
                                <i className='fa fa-linkedin'></i>
                            </a>
                        </div>  
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {
                                " "
                            }
                            Hello, I'm <span className='highlighted-text'>Aniela</span>
                        </span>
                    </div> 
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {
                                " "
                            }
                            <h1>
                                {
                                    " "
                                }
                                <Typical 
                                loop={Infinity}
                                steps={[
                                    "Developer ",
                                    2000,
                                    "Designer ",
                                    2000,
                                    "Artist ",
                                    2000,
                                    "Ethusiastic Learner ",
                                    2000,
                                ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Design. Develop. Deploy. 
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {
                                " "
                            }
                            Let's Meet!
                            {
                                " "
                            }
                        </button>
                        <a href="Resume.pdf" download="Aniela Govada.pdf">
                            <button className='btn highlighted-btn'> My Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}