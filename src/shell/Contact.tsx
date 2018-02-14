import * as React from 'react';

const Contact = () => (
    <section id="contact">
        <div className="inner">
            <section>
                <form id="gform" action="https://formspree.io/slifuojugrindis@gmail.com" method="POST">
                    <div className="field half first">
                        <label htmlFor="name">Jūsų vardas</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="name">Jūsų el. paštas</label>
                        <input type="email" name="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Jūsų žinutė</label>
                        <textarea name="message" rows={6}></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Išsiųsti žinutę" className="special" /></li>
                        <li><input type="reset" value="Išvalyti" /></li>
                        <input type="hidden" name="_language" value="lt" />
                        <input type="hidden" name="_next" value="//slifuojugrindis.lt/aciu" /> 
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"/>
                        <h3>El. paštas</h3>
                        <a href="mailto:slifuojugrindis@gmail.com?subject=Noriu%20pasiteirauti%20">
                            slifuojugrindis@gmail.com
                        </a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"/>
                        <h3>Mob. tel.</h3>
                        <span>+ 370 610 87 516</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"/>
                        <h3>Adresas</h3>
                        <span>Biržai, Lietuva</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
);

export default Contact;
