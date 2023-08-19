import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import backgroundImageHome from '../assets/img/backgroundHome.png'
import Lodgment from '../components/Lodgment';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <header>
                <Logo />
                <Navigation />
            </header>
            <main>
                <Banner src={backgroundImageHome} alt="bannière accueil">
                <p>Chez vous, partout et ailleurs</p>
                </Banner>

                <section className='card-container'>
                    <Lodgment />
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Home;