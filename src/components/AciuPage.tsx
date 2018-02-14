import * as React from 'react';
import { Helmet } from 'react-helmet';

class AciuPage extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Šlifuoju grindis - Ačiū</title>
                    <meta name="description" content="Ačiū" />
                </Helmet>

                <section id="banner" className="style2">
                    <div className="inner">
                        <header className="major">
                            <h1>Ačiū! Jūsų žinutė gauta!</h1>
                        </header>
                        <div className="content">
                            <p>Artimiausiu metu jums į ją atsakysiu. Iki susitikimo!</p>
                        </div>
                    </div>
                </section>    
            </div>
        );
    }
}

export default AciuPage;