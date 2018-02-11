import * as React from 'react';
// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import pic09 from '../assets/images/pic09.jpg';

class PricesPage extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Kainoraštis</title>
                    <meta name="description" content="Kainoraščio aprašymas" />
                </Helmet>

                <section id="banner" className="style2">
                    <div className="inner">
                        <header className="major">
                            <h1>Kainoraštis</h1>
                        </header>
                        <div className="content">
                            <p>Suteikiamų paslaugų preliminarios kainos</p>
                        </div>
                    </div>
                </section>

                <div id="main">
                    <section id="one">
                        <div className="inner">
                            <div className="table-wrapper">
                                <table className="alt">
                                    <thead>
                                        <tr>
                                            <th><b>Paslauga</b></th>
                                            <th><b>Aprašymas</b></th>
                                            <th><b>Kaina</b></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Grindų šlifavimas</td>
                                            <td></td>
                                            <td>1 m<sup>2</sup> - nuo 6 &euro;</td>
                                        </tr>
                                        <tr>
                                            <td>Grindų tarpų glaistymas</td>
                                            <td></td>
                                            <td>1 m<sup>2</sup> - nuo 1 &euro;</td>
                                        </tr>
                                        <tr>
                                            <td>Grindų lakavimas</td>
                                            <td>
                                                1 sluoksnis<br/>
                                                Naudojami lakai: "Bona", "Kiilto", "Hesse lignal"
                                            </td>
                                            <td>1 m<sup>2</sup> - 1 &euro;</td>
                                        </tr>
                                        <tr>
                                            <td>Grindų vandeninis lakavimas</td>
                                            <td>
                                                Darbų eiga:
                                                <ul>
                                                    <li>Tarpų glaistymas</li>
                                                    <li>Peršveitimas</li>
                                                    <li>Gruntavimas</li>
                                                    <li>1 sluoksnio lakavimas</li>
                                                    <li>Paviršiaus smulkiagrudis</li>
                                                    <li>Peršveitimas</li>
                                                    <li>2 sluoksnio lakavimas</li>
                                                </ul>
                                            </td>
                                            <td>1 m<sup>2</sup> - 5 &euro;</td>
                                        </tr>
                                        <tr>
                                            <td>Grindų alivavimas</td>
                                            <td></td>
                                            <td>1 m<sup>2</sup> - 2 &euro;</td>
                                        </tr>
                                        <tr>
                                            <td>Grindų tonavimas</td>
                                            <td></td>
                                            <td>1 m<sup>2</sup> - 2 &euro;</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={3}></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </section>
                    {/* <section id="two" className="spotlights">
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
                    </section> */}
                </div>
            </div>
        );
    }
}

export default PricesPage;