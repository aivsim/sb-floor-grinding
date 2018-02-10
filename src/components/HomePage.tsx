import * as React from 'react';
import { Link,  } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Banner } from '../shell';

import pic01 from '../assets/images/pic01.jpg';
import pic02 from '../assets/images/pic02.jpg';
import pic03 from '../assets/images/pic03.jpg';
import pic04 from '../assets/images/pic04.jpg';
// import pic05 from '../assets/images/pic05.jpg';
// import pic06 from '../assets/images/pic06.jpg';

class HomeIndex extends React.Component {
    render() {
        const siteTitle = 'Šlifuoju grindis';
        const siteDescription = 'Šlifuoju grindis';
        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="informacija" className="tiles">
                        <article style={{ backgroundImage: `url(${pic01})` }}>
                            <header className="major">
                                <h3>Paslaugos</h3>
                                <p>Suteikiamų darbų rūšys ir tipai</p>
                            </header>
                            <Link to="/paslaugos" className="link primary" />
                        </article>
                        <article style={{ backgroundImage: `url(${pic02})` }}>
                            <header className="major">
                                <h3>Įranga</h3>
                                <p>Darbų atlikimo metu naudojama įranga, technologijos ir metodikos</p>
                            </header>
                            <Link to="/iranga" className="link primary" />
                        </article>
                        <article style={{ backgroundImage: `url(${pic03})` }}>
                            <header className="major">
                                <h3>Galerija</h3>
                                <p>Darbų pavyzdžiai, vaizdai prieš ir po </p>
                            </header>
                            <Link to="/galerija" className="link primary" />
                        </article>
                        <article style={{ backgroundImage: `url(${pic04})` }}>
                            <header className="major">
                                <h3>Kainoraštis</h3>
                                <p>Suteikiamų paslaugų preliminarios kainos</p>
                            </header>
                            <Link
                                to="/kainorastis"
                                className="link primary"
                                onClick={() => window.scrollTo(0, 0)}
                            />
                        </article>
                    </section>

                    <section id="susipazinkime">
                        <div className="inner">
                            <header className="major">
                                <h2>Susipažinkime</h2>
                            </header>
                            {/* <p>
                                Roberto trumpas aprašymas apie save, kuris detaliau bus pateiktas "Plačiau" 
                                esančiame puslapyje.
                            </p> */}
                            <ul className="actions">
                                <li>
                                    <Link
                                        to="/susipazinkime"
                                        className="button next"
                                    >
                                        Plačiau
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* <section id="straipsniai" className="tiles">
                        <article style={{ backgroundImage: `url(${pic05})` }}>
                            <header className="major">
                                <h3>Darbo aplinkos paruošimas</h3>
                                <p>Straipsnis</p>
                            </header>
                            <Link to="/landing" className="link primary" />
                        </article>
                        <article style={{ backgroundImage: `url(${pic06})` }}>
                            <header className="major">
                                <h3>Grindų puoselėjimas po atnaujinimo</h3>
                                <p>Straipsnis</p>
                            </header>
                            <Link to="/landing" className="link primary" />
                        </article>
                    </section> */}
                </div>

            </div>
        );
    }
}

export default HomeIndex;