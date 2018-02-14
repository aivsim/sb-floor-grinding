import * as React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import pic111 from '../assets/images/irenginiai/111.jpg';
import pic21 from '../assets/images/irenginiai/21.jpg';
import pic31 from '../assets/images/irenginiai/31.jpg';
import pic41 from '../assets/images/irenginiai/41.jpg';

class IrangaPage extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>^lifuoju grindis - Įranga</title>
                    <meta name="description" content="Įrangos aprašymas" />
                </Helmet>

                <section id="banner" className="style2">
                    <div className="inner">
                        <header className="major">
                            <h1>Įranga</h1>
                        </header>
                        <div className="content">
                            <p>Darbų atlikimo metu naudojama įranga, technologijos ir metodikos</p>
                        </div>
                    </div>
                </section>

                <div id="main">                    
                    <section id="two" className="spotlights">
                        <section>
                            <Link to="/generic" className="image">
                                <img src={pic111} alt="" />
                            </Link>
                            <div className="content">
                                <div className="inner">
                                    <header className="major">
                                        <h3>"Pallmann Cobra II"</h3>
                                    </header>
                                    <p>
                                        Naujos kartos "Pallmann Cobra II" užtikrina sklandų, agresyvų šlifavimo procesą, ypatingas saugumo ir 
                                        komforto savybes. Skirtas senų lakų, nelygių grindų išlyginimui, nuėmimui.
                                        Aptaki važiuoklė ir rankenų konstrukcijos užtikrina tylesnį veikimą, patobulintą regėjimo liniją, 
                                        artimesnį veikimą prie sienų jų nepažeidžiant. Pavarų diržų technologija yra unikali pramonėje ir 
                                        užtikrina maksimalų galios perkėlimą į būgną. 
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section>
                            <Link to="/generic" className="image">
                                <img src={pic21} alt="" />
                            </Link>
                            <div className="content">
                                <div className="inner">
                                    <header className="major">
                                        <h3>"Bona Felixisand" ir "Bona Edge"</h3>
                                    </header>
                                    <p>
                                        <b>"Bona FlexiSand"</b> - galingas įrenginys, kuris yra skirtas šlifavimui, poliravimui, 
                                        tarpinių lakavimo paviršiaus šušvelninimui. Jis gali būti aprūpintas 
                                        daugybe diskų plokščių, skirtų įvairiems skirtingų grindų tipų grindų paruošimo darbams.
                                    </p>    
                                    <p>
                                        <b>"Bona Edge"</b> - kompaktiškas, labai galingas ir lengvai manevringas kraštų šlifuoklis, skirtas 
                                        sunkiai prieinamoms vietoms po radiatoriais ir kraštams pagal patalpos perimetrą.
                                        Jis gali būti sumontuotas su "Holed" arba "Velcro" diskais, kurie surenka dulkes geriau nei 
                                        dauguma kraštų šlifuoklių esančių rinkoje.
                                    </p>                                    
                                </div>
                            </div>
                        </section>
                        <section>
                            <Link to="/generic" className="image">
                                <img src={pic31} alt="" />
                            </Link>
                            <div className="content">
                                <div className="inner">
                                    <header className="major">
                                        <h3>"Festool"</h3>
                                    </header>
                                    <p>
                                        <b>"Festool"</b> - įrankiai skirti vidinių kampų, sunkiai prieinamų vietų, šlifavimui, 
                                        kurių nepasiekia ir neapdirba didieji įrenginiai.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section>
                            <Link to="/generic" className="image">
                                <img src={pic41} alt="" />
                            </Link>
                            <div className="content">
                                <div className="inner">
                                    <header className="major">
                                        <h3>"Eibenstock"</h3>
                                    </header>
                                    <p>
                                        <b>"Eibenstock"</b> - skirtas dulkių surinkimui ir nusiurbimui ne tik darbo metu ir po jo.
                                        Užtikrinamas minimalus dulkių kiekis patalpoje. 
                                        Neleidžiama dulkėms pasklisti po kitas patalpas ir namų zonas.
                                        Oro tarpai, vėdinimo sistemos ir kitos angos tinkamai uždengiamos ir apsaugomos nuo dulkių pasklidimo.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>

            </div>
        );
    }
}

export default IrangaPage;