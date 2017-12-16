import * as React from 'react';
import { Helmet } from 'react-helmet';

// import pic11 from '../assets/images/pic11.jpg';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
            <Helmet>
                <title>Susipažinkime</title>
                <meta name="description" content="Susipažinkime aprašymas" />
            </Helmet>

            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h1>Susipažinkime</h1>
                        </header>
                        {/* <span className="image main"><img src={pic11} alt="" /></span> */}
                        <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    </div>
                </section>
            </div>

        </div>
        );
    }
}

export default AboutPage;