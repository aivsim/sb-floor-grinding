import * as React from 'react';
// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import pic08 from '../assets/images/pic02.jpg';
// import pic09 from '../assets/images/pic02.jpg';
// import pic10 from '../assets/images/pic02.jpg';

class EquipmentPage extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Įranga</title>
                    <meta name="description" content="Įrangos aprašymas" />
                </Helmet>

                <section id="banner" className="style2">
                    <div className="inner">
                        <header className="major">
                            <h1>Įranga</h1>
                        </header>
                        <div className="content">
                            <p>Darbų pavyzdžiai, vaizdai prieš ir po </p>
                        </div>
                    </div>
                </section>

                <div id="main">
                    <section id="one">
                        <div className="inner">
                            {/* <header className="major">
                                <h2>Sed amet aliquam</h2>
                            </header> */}
                            <p>
                                Informacija ruošiama
                            </p>
                        </div>
                    </section>
                    {/* <section id="two" className="spotlights">
                        <section>
                            <Link to="/generic" className="image">
                                <img src={pic08} alt="" />
                            </Link>
                            <div className="content">
                                <div className="inner">
                                    <header className="major">
                                        <h3>Orci maecenas</h3>
                                    </header>
                                    <p>
                                        Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna
                                        sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.
                                        Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor.
                                        Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.
                                    </p>
                                    <ul className="actions">
                                        <li><Link to="/generic" className="button">Learn more</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section>
                            <Link to="/generic" className="image">
                                <img src={pic09} alt="" />
                            </Link>
                            <div className="content">
                                <div className="inner">
                                    <header className="major">
                                        <h3>Rhoncus magna</h3>
                                    </header>
                                    <p>
                                        Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed
                                        nunc rhoncus condimentum sem. In efficitur ligula tate urna.
                                        Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor.
                                        Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.
                                    </p>
                                    <ul className="actions">
                                        <li><Link to="/generic" className="button">Learn more</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section>
                            <Link to="/generic" className="image">
                                <img src={pic10} alt="" />
                            </Link>
                            <div className="content">
                                <div className="inner">
                                    <header className="major">
                                        <h3>Sed nunc ligula</h3>
                                    </header>
                                    <p>
                                        Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna
                                        sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.
                                        Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor.
                                        Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.
                                    </p>
                                    <ul className="actions">
                                        <li><Link to="/generic" className="button">Learn more</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </section> */}
                </div>

            </div>
        );
    }
}

export default EquipmentPage;