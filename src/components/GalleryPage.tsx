import * as React from 'react';
// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// import Instafeed from 'react-instafeed';

// import pic08 from '../assets/images/pic03.jpg';
// import pic09 from '../assets/images/pic03.jpg';
// import pic10 from '../assets/images/pic03.jpg';

class GalleryPage extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Galerija</title>
                    <meta name="description" content="Galerijos aprašymas" />
                </Helmet>

                <section id="banner" className="style2">
                    <div className="inner">
                        <header className="major">
                            <h1>Galerija <a
                                    href="https://www.instagram.com/slifuojugrindis/"
                                    target="_blank"
                                    className="icon alt fa-instagram"
                                >
                                    <span className="label">Instagram</span>
                                </a>
                            </h1>
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
                                Nuoroda į nuotraukų albumą: <a
                                    href="https://www.instagram.com/slifuojugrindis/"
                                    target="_blank"
                                    className="icon alt fa-instagram"
                                >
                                    <span className="label">Instagram</span>
                                </a>
                            </p>

                            {/* 
                            <div id={instafeedTarget}>
                                <Instafeed
                                    limit='5'
                                    ref='instafeed'
                                    resolution='standard_resolution'
                                    sortBy='most-recent'
                                    target='instafeed'
                                    template='<div class="box alt"><div class="row 50% uniform"><div class="4u"><span class="image fit"><img src="{{image}}" /></span></div></div></div>'
                                    userId='6815772479'
                                    clientId='a0c7165f900049909bacb2974ab2754d'
                                    accessToken='6815772479.1677ed0.69e364ef934d47f5a25ed7130738b5fa'
                                />
                            </div> */}
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default GalleryPage;