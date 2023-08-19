import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import backgroundImageAbout from '../assets/img/backgroundAbout.png'
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';

const About = () => {
    return (
        <>
            <header>
                <Logo />
                <Navigation />
            </header>

            <main>
                <Banner src={backgroundImageAbout} alt="bannière a propos"/>
                
                <section className='collapse-container'>
                    <Collapse>Fiabilité</Collapse>
                    <Collapse>Respect</Collapse>
                    <Collapse>Service</Collapse>
                    <Collapse>Sécurité</Collapse>
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default About;